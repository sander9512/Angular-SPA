import { Component, OnInit } from '@angular/core';
import {GamesService} from '../games.service';
import {Game} from '../../shared/game.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  constructor(private gameService: GamesService) { }
  games: Game[];
  subscription: Subscription;
  ngOnInit() {
    this.subscription = this.gameService.gamesChanged
      .subscribe(
        (games: Game[]) => {
          this.games = games;
        }
      );
    this.gameService.getGames()
      .then(games => {
        this.games = games;
      })
      .catch(error => console.log(error));
  }

}
