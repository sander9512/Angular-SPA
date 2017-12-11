import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameCharacterService} from '../game_character.service';
import {GameCharacter} from '../../shared/game_character.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-game-character-list',
  templateUrl: './game-character-list.component.html',
  styleUrls: ['./game-character-list.component.css']
})
export class GameCharacterListComponent implements OnInit, OnDestroy {
  constructor(private charService: GameCharacterService) { }
  characters: GameCharacter[];
  subscription: Subscription;
  ngOnInit() {
    this.subscription = this.charService.charactersChanged
      .subscribe(
        (characters: GameCharacter[]) => {
          this.characters = characters;
        }
      );
    this.charService.getAll()
      .then(characters => {
        this.characters = characters;
      })
      .catch(error => console.log(error));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
