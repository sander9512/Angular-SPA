import { Component, OnInit } from '@angular/core';
import {GameDeveloperService} from '../game_developers.service';
import {GameDeveloper} from '../../shared/game_developer.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-game-developer-list',
  templateUrl: './game-developer-list.component.html',
  styleUrls: ['./game-developer-list.component.css']
})
export class GameDeveloperListComponent implements OnInit {

  constructor(private devService: GameDeveloperService) { }
  developers: GameDeveloper[];
  subscription: Subscription;
  ngOnInit() {
    this.subscription = this.devService.developersChanged
      .subscribe(
        (developers: GameDeveloper[]) => {
          this.developers = developers;
        }
      );
    this.devService.getDevelopers()
      .then(developers => {
        this.developers = developers;
      })
      .catch(error => console.log(error));
  }
}
