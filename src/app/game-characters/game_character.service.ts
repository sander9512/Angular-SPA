import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {GameCharacter} from '../shared/game_character.model';

@Injectable()
export class GameCharacterService implements ServicesInterface {
  charactersChanged = new Subject<GameCharacter[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/characters'; // URL to web api
  private characters: GameCharacter[] = [];

  constructor(private http: Http) {
  }
  getAll(): Promise<GameCharacter[]> {
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

  getEntity(id: string): Promise<GameCharacter> {
    return this.http.get(this.serverUrl + '/' + id, {headers: this.headers})
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

  deleteEntity(character: GameCharacter): Promise<string> {
    const idx: number = this.findIndexCust(character._id);
    this.characters.splice(idx, 1);
    return this.http.delete(this.serverUrl + '/' + character._id, {headers: this.headers})
      .toPromise()
      .then( response => {
        console.dir(response.toString());
        return response.toString() as string;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  editEntity(character: GameCharacter, id: string): Promise<object> {
    console.log(character, 'char submitted');
    return this.http.put(this.serverUrl + '/' + id, character, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(character);
        console.dir(response.json());
        return response.json() as GameCharacter;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  public deleteCharacterNeo(character: GameCharacter): Promise<string> {
    return this.http.delete(this.serverUrl + '/' + character.name + '/neo', {headers: this.headers})
      .toPromise()
      .then( response => {
        console.dir(response.json());
        return response.json() as string;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  public editCharacterNeo(character: GameCharacter, name: string) {
    console.log(character, 'character submitted');
    return this.http.put(this.serverUrl + '/' + name + '/neo', character, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(character);
        console.dir(response.json());
        return response.json() as GameCharacter;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  findIndexCust(id: string) {
    let index = -1;
    for (let i = 0, len = this.characters.length; i < len; i++) {
      if (this.characters[i]._id === id) {
        return index = i;
      }
    }
  }
}
