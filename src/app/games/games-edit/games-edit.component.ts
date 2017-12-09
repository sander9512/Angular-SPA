import { Component, OnInit } from '@angular/core';
import {GameDeveloperService} from '../../game-developers/game_developers.service';
import {GamesService} from '../games.service';
import {NgForm} from '@angular/forms';
import {Game} from '../../shared/game.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-games-edit',
  templateUrl: './games-edit.component.html',
  styleUrls: ['./games-edit.component.css']
})
export class GamesEditComponent implements OnInit {

  constructor(private devService: GameDeveloperService, private gameService: GamesService, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onGameSubmit(form: NgForm) {
    const value = form.value;
    const id = this.route.snapshot.params['id'];
    const newGame = new Game({'_title': value.title, '_release_date': value.releaseDate, '_description': value.description});
    console.log(newGame);
    this.devService.addGameToDev(newGame, id);
  }
}
