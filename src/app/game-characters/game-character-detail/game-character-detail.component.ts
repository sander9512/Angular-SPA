import { Component, OnInit } from '@angular/core';
import {GameCharacter} from '../../shared/game_character.model';
import {GameCharacterService} from '../game_character.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game-character-detail',
  templateUrl: './game-character-detail.component.html',
  styleUrls: ['./game-character-detail.component.css']
})
export class GameCharacterDetailComponent implements OnInit {
  character: GameCharacter = new GameCharacter();
  id = '';
  constructor(private charService: GameCharacterService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
          console.log('params[\'_id\']: ' + params['_id']);
          this.id = params['_id'];
          this.charService.getCharacter(this.id)
            .then(character => {
              console.log('character._id: ' + character._id);
              this.character = character;
            })
            .catch(error => console.log(error));
        }
      );
  }

}
