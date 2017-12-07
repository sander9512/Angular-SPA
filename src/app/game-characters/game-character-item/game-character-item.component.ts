import {Component, Input, OnInit} from '@angular/core';
import {GameCharacter} from '../../shared/game_character.model';

@Component({
  selector: 'app-game-character-item',
  templateUrl: './game-character-item.component.html',
  styleUrls: ['./game-character-item.component.css']
})
export class GameCharacterItemComponent implements OnInit {
  @Input() character: GameCharacter;
  constructor() { }

  ngOnInit() {
  }

}
