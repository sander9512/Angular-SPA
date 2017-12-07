import { Component, OnInit } from '@angular/core';
import {GameDeveloperService} from '../game-developers/game_developers.service';
import {GameDeveloper} from '../shared/game_developer.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-game-characters',
  templateUrl: './game-characters.component.html',
  styleUrls: ['./game-characters.component.css']
})
export class GameCharactersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
