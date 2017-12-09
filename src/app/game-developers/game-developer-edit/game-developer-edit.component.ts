import {Component, ElementRef, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {GameDeveloper} from '../../shared/game_developer.model';
import {GameDeveloperService} from '../game_developers.service';

@Component({
  selector: 'app-game-developer-edit',
  templateUrl: './game-developer-edit.component.html',
  styleUrls: ['./game-developer-edit.component.css']
})
export class GameDeveloperEditComponent implements OnInit {

  constructor(private devService: GameDeveloperService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newDev = new GameDeveloper({'_name': value.name, '_companyDescription': value.description, '_location': value.location});
    console.log(newDev);
    this.devService.addDeveloper(newDev);
  }
}
