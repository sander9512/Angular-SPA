import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../shared/game.model';
import {ActivatedRoute, Router} from '@angular/router';
import {GameDeveloper} from '../../shared/game_developer.model';
import {GameDeveloperService} from '../../game-developers/game_developers.service';

@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['./games-item.component.css']
})
export class GamesItemComponent implements OnInit {
  @Input() game: Game;
  @Input() developer: GameDeveloper;
  constructor(private route: ActivatedRoute, private router: Router, private devService: GameDeveloperService) { }

  ngOnInit() {
    this.devService.neoDeveloper.next(this.developer);
    console.log('sending', this.developer);
  }
  onDetail() {
    console.log(this.game);
    console.log(this.route);
    this.router.navigate(['detail', this.game._id], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
