import { Component, OnInit } from '@angular/core';
import {GameDeveloper} from '../../shared/game_developer.model';
import {GameDeveloperService} from '../game_developers.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QueryParamsHandling} from '@angular/router/src/config';

@Component({
  selector: 'app-game-developer-detail',
  templateUrl: './game-developer-detail.component.html',
  styleUrls: ['./game-developer-detail.component.css']
})
export class GameDeveloperDetailComponent implements OnInit {
  developer: GameDeveloper = new GameDeveloper();
  id = '';
  constructor(private devService: GameDeveloperService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
          console.log('params[\'_id\']: ' + params['_id']);
          this.id = params['_id'];
          this.devService.getDeveloper(this.id)
            .then(developer => {
              console.log('developer._id: ' + developer._id);
              this.developer = developer;
            })
            .catch(error => console.log(error));
        }
      );
  }

  onAddGame() {
    this.router.navigate(['addGame'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  onEditDeveloper() {
  }

  onDeleteDeveloper() {
    this.devService.deleteDeveloper(this.developer);
  }
}
