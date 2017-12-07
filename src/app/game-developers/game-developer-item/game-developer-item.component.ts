import {Component, Input, OnInit} from '@angular/core';
import {GameDeveloper} from '../../shared/game_developer.model';

@Component({
  selector: 'app-game-developer-item',
  templateUrl: './game-developer-item.component.html',
  styleUrls: ['./game-developer-item.component.css']
})
export class GameDeveloperItemComponent implements OnInit {
  @Input() developer: GameDeveloper;
  constructor() { }

  ngOnInit() {
  }

}
