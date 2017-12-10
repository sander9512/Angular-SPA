import { Component, OnInit } from '@angular/core';
import {Game} from '../../shared/game.model';
import {GamesService} from '../games.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-games-character-list',
  templateUrl: './games-character-list.component.html',
  styleUrls: ['./games-character-list.component.css']
})
export class GamesCharacterListComponent implements OnInit {

  game: Game = new Game();
  id = '';
  constructor(private gameService: GamesService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
          console.log('params: ', params);
          console.log('params[\'_gameId\']: ' + params['_gameId']);
          this.id = params['_gameId'];
          this.gameService.getGame(this.id)
            .then(game => {
              console.log('game._id: ' + game._id);
              this.game = game;
            })
            .catch(error => console.log(error));
        }
      );
  }

  AddCharacter() {
    this.router.navigate(['newCharacter'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
