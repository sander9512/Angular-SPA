import {Component, OnInit, ViewChild} from '@angular/core';
import {GamesService} from '../../games/games.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {GameCharacter} from '../../shared/game_character.model';
import {isUndefined} from 'util';
import {GameCharacterService} from '../game_character.service';

@Component({
  selector: 'app-game-character-edit',
  templateUrl: './game-character-edit.component.html',
  styleUrls: ['./game-character-edit.component.css']
})
export class GameCharacterEditComponent implements OnInit {
  @ViewChild('f') devForm: NgForm;
  editMode = false;
  id = '';
  editedCharacter: GameCharacter;
  constructor(private gameService: GamesService, private charService: GameCharacterService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['charId'];
    console.log('id = ', id);
    if (!isUndefined(id)) {
      this.route.params
        .subscribe(params => {
            console.log('params[\'charId\']: ' + params['charId']);
            this.id = params['charId'];
            this.charService.getCharacter(this.id)
              .then(character => {
                console.log('character._id: ' + character._id);
                this.editedCharacter = character;
                this.editMode = true;
                console.log(character);
                this.devForm.setValue({
                  name: character.name,
                  bio: character.bio
                });
              })
              .catch(error => console.log(error));
          }
        );
    }
  }

  onSubmitCharacter(form: NgForm) {
    const value = form.value;
    const id = this.route.snapshot.params['id'];
    const newChar = new GameCharacter({'_name': value.name, '_bio': value.bio});
    console.log(newChar);
    if (this.editMode) {
      this.charService.editCharacter(newChar, this.id);
    } else if (!this.editMode) {
      this.gameService.addCharacterToGame(newChar, id);
    }
    form.reset();
  }
}
