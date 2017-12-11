import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GameDeveloperService} from '../../game-developers/game_developers.service';
import {GamesService} from '../games.service';
import {NgForm} from '@angular/forms';
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
  @ViewChild('f') gameForm: NgForm;
  @Input() dev: GameDeveloper;
  editMode = false;
  id = '';
  editedGame: Game;
  devId = '';
  developer: GameDeveloper;
  constructor(private devService: GameDeveloperService, private gameService: GamesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['gameId'];
    const devId = this.route.snapshot.params['id'];
    console.log('id = ', id);
    if (!isUndefined(id)) {
      this.route.params
        .subscribe(params => {
            console.log('params[\'id\']: ' + params['gameId']);
            this.id = params['gameId'];
            this.gameService.getGame(this.id)
              .then(game => {
                console.log('game.id: ' + game._id);
                this.editedGame = game;
                this.editMode = true;
                console.log(game);
                this.gameForm.setValue({
                  title: game.title,
                  releaseDate: game.release_date,
                  description: game.description
                });
              })
              .catch(error => console.log(error));
          }
        );
    }
    if (!isUndefined(devId)) {
      this.route.params
        .subscribe(params => {
          this.devId = params['id'];
          this.devService.getDeveloper(devId)
            .then(developer => {
              this.developer = developer;
              console.log('current dev', developer);
            })
            .catch(error => console.log(error));
        });
    }
  }
  onGameSubmit(form: NgForm) {
    const value = form.value;
    console.log('dev = ', this.developer);
    const id = this.route.snapshot.params['id'];
    const newGame = new Game({'_title': value.title, '_release_date': value.releaseDate, '_description': value.description});
    console.log(newGame);
    if (this.editMode) {
      this.gameService.editGame(newGame, this.id);
    } else if (!this.editMode) {
      this.devService.addGameToDev(newGame, id);
      this.devService.addGameToDevNeo(newGame, this.developer.name);
    }
    form.reset();
  }
}
