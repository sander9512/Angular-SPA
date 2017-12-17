import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GameDeveloperService} from '../../game-developers/game_developers.service';
import {GamesService} from '../games.service';
import {FormGroup, NgForm, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';
import {Game} from '../../shared/game.model';
import {ActivatedRoute} from '@angular/router';
import {isUndefined} from 'util';
import {GameDeveloper} from '../../shared/game_developer.model';

@Component({
  selector: 'app-games-edit',
  templateUrl: './games-edit.component.html',
  styleUrls: ['./games-edit.component.css']
})
export class GamesEditComponent implements OnInit {
  @Input() dev: GameDeveloper;
  editMode = false;
  id = '';
  editedGame: Game;
  devId = '';
  developer: GameDeveloper;
  gForm: FormGroup;
 constructor(private devService: GameDeveloperService, private gameService: GamesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
   this.gForm = new FormGroup({
     'title': new FormControl(null, Validators.required),
     'release_date': new FormControl(null, Validators.required),
     'description': new FormControl(null, Validators.required),
     'genres': new FormArray([])
   });




    const id = this.route.snapshot.params['gameId'];
    const devId = this.route.snapshot.params['id'];
    console.log('id = ', id);
    if (!isUndefined(id)) {
      console.log('editing gmae');
      this.route.params
        .subscribe(params => {
            console.log('params[\'id\']: ' + params['gameId']);
            this.id = params['gameId'];
            this.gameService.getEntity(this.id)
              .then(game => {
                console.log('game.id: ' + game._id);
                this.editedGame = game;
                this.editMode = true;
                console.log(game);
                this.gForm.get('title').setValue(game.title);
                this.gForm.get('release_date').setValue(game.release_date);
                this.gForm.get('description').setValue(game.description);
                // this.gForm.get('genres').setValue(game.genres);
              })
              .catch(error => console.log(error));
          }
        );
    }
    if (!isUndefined(devId)) {
      this.route.params
        .subscribe(params => {
          this.devId = params['id'];
          this.devService.getEntity(devId)
            .then(developer => {
              this.developer = developer;
              console.log('current dev', developer);
            })
            .catch(error => console.log(error));
        });
    }
  }
  onGameSubmit() {
    console.log('dev = ', this.developer);
    const value = this.gForm.value;
    const id = this.route.snapshot.params['id'];
    const newGame = new Game({'_title': value.title, '_release_date': value.release_date,
      '_description': value.description, '_genres': value.genres});
    console.log(newGame);
    if (this.editMode) {
      this.gameService.editEntity(newGame, this.id);
      // this.gameService.editGameNeo(newGame, this.editedGame.title);
    } else if (!this.editMode) {
      this.devService.addGameToDev(newGame, id);
      this.devService.addGameToDevNeo(newGame, this.developer.name);
    }
    this.gForm.reset();
    console.log(this.gForm);
  }

  onAddGenre() {
   const control = new FormControl(null, Validators.required);
    (<FormArray>this.gForm.get('genres')).push(control);
  }
}
