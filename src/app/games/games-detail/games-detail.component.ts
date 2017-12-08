import { Component, OnInit } from '@angular/core';
import {GamesService} from '../games.service';
import {Game} from '../../shared/game.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.css']
})
export class GamesDetailComponent implements OnInit {

  game: Game = new Game();
  id = '';
  constructor(private gameService: GamesService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log('params: ', params);
          console.log('params[\'gameId\']: ' + params['gameId']);
          this.id = params['gameId'];
          this.gameService.getGame(this.id)
            .then(game => {
              console.log('game._id: ' + game._id);
              this.game = game;
            })
            .catch(error => console.log(error));
        }
      );
  }

  onCharacterView() {
  }

  onEditGame() {
  }

  onDeleteGame() {
  }
}
