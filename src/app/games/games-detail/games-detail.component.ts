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
  similarGames: Game[];
  game: Game = new Game();
  id = '';
  constructor(private gameService: GamesService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log('params: ', params);
          console.log('params[\'gameId\']: ' + params['gameId']);
          this.id = params['gameId'];
        this.gameService.getEntity(this.id)
            .then(game => {
              console.log('game._id: ' + game._id);
              this.game = game;
              this.gameService.getSimilarGames(game)
                .then(games => {
                  this.similarGames = games;
                });
            })
            .catch(error => console.log(error));
        }
      );
  }

  onCharacterView() {
    this.router.navigate(['characters'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  onEditGame() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  onDeleteGame() {
    this.gameService.deleteEntity(this.game);
    this.gameService.deleteGameNeo(this.game);
  }

}
