import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {GameDeveloper} from '../../shared/game_developer.model';
import {GameDeveloperService} from '../game_developers.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {isUndefined} from 'util';

@Component({
  selector: 'app-game-developer-edit',
  templateUrl: './game-developer-edit.component.html',
  styleUrls: ['./game-developer-edit.component.css']
})
export class GameDeveloperEditComponent implements OnInit {
  @ViewChild('f') devForm: NgForm;
  editMode = false;
  id = '';
  editedDeveloper: GameDeveloper;
  constructor(private devService: GameDeveloperService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['devId'];
    console.log('id = ', id);
    if (!isUndefined(id)) {
      this.route.params
        .subscribe(params => {
            console.log('params[\'devId\']: ' + params['devId']);
            this.id = params['devId'];
            this.devService.getDeveloper(this.id)
              .then(developer => {
                console.log('developer._id: ' + developer._id);
                this.editedDeveloper = developer;
                this.editMode = true;
                console.log(developer);
                this.devForm.setValue({
                  name: developer.name,
                  location: developer.location,
                  description: developer.companyDescription
                });
              })
              .catch(error => console.log(error));
          }
        );
    }
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newDev = new GameDeveloper({'_name': value.name, '_companyDescription': value.description, '_location': value.location});
    console.log(newDev);
    if (this.editMode) {
      this.devService.editDeveloper(newDev, this.id);
      console.log('edited developer sent');
    } else if (!this.editMode) {
      this.devService.addDeveloper(newDev);
      this.devService.addDeveloperNeo(newDev);
      console.log('new developer sent');
    }
    form.reset();
  }
}
