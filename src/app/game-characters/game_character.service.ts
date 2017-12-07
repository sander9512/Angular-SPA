import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {GameCharacter} from '../shared/game_character.model';

@Injectable()
export class GameCharacterService {
  charactersChanged = new Subject<GameCharacter[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/characters'; // URL to web api
  private characters: GameCharacter[] = [];

  constructor(private http: Http) {
  }

  public getCharacters(): Promise<GameCharacter[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.characters = response.json() as GameCharacter[];
        return this.characters;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  public getCharacter(_id: string): Promise<GameCharacter> {
    return this.http.get(this.serverUrl + '/' + _id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as GameCharacter;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
}
