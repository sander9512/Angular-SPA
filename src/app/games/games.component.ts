import { Component, OnInit } from '@angular/core';
import {GamesService} from './games.service';
import {Game} from '../shared/game.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }
  games: Game[];
  ngOnInit() {
  }

}
