import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../shared/game.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['./games-item.component.css']
})
export class GamesItemComponent implements OnInit {
  @Input() game: Game;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  onDetail() {
    console.log(this.game);
    console.log(this.route);
    this.router.navigate(['detail', this.game._id], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
