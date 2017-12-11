import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Game} from '../shared/game.model';
import {GameCharacter} from '../shared/game_character.model';

@Injectable()
export class GamesService implements ServicesInterface {
  gamesChanged = new Subject<Game[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/games'; // URL to web api
  private games: Game[] = [];

  constructor(private http: Http) {
  }
  public deleteGameNeo(game: Game): Promise<string> {
    return this.http.delete(this.serverUrl + '/' + game.title + '/neo', {headers: this.headers})
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
  public addCharacterToGame(char: GameCharacter, id: string) {
    console.log(char, 'character submitted');
    return this.http.put(this.serverUrl + '/' + id + '/' + 'characters', char, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(char);
        console.dir(response.json());
        return response.json() as Game;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  public addCharacterToGameNeo(char: GameCharacter, title: string) {
    console.log(char, 'character submitted');
    return this.http.put(this.serverUrl + '/' + title + '/' + 'characters/neo', char, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(char);
        console.dir(response.json());
        return response.json() as Game;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  public editGameNeo(game: Game, title: string) {
    console.log(game, 'game submitted');
    return this.http.put(this.serverUrl + '/' + title + '/neo', game, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(game);
        console.dir(response.json());
        return response.json() as Game;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  getAll(): Promise<Game[]> {
      console.log('items ophalen van server');
      return this.http.get(this.serverUrl, {headers: this.headers})
        .toPromise()
        .then(response => {
          console.dir(response.json());
          this.games = response.json() as Game[];
          return this.games;
        })
        .catch(error => {
          console.log('handleError');
          return Promise.reject(error.message || error);
        });
  }

  getEntity(id: string): Promise<Game> {
    return this.http.get(this.serverUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Game;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  deleteEntity(game: Game): Promise<string> {
    const idx: number = this.findIndexCust(game._id);
    this.games.splice(idx, 1);
    return this.http.delete(this.serverUrl + '/' + game._id, {headers: this.headers})
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

  editEntity(game: Game, id: string): Promise<object> {
    console.log(game, 'game submitted');
    return this.http.put(this.serverUrl + '/' + id, game, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(game);
        console.dir(response.json());
        return response.json() as Game;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  findIndexCust(id: string) {
    let index = -1;
    for (let i = 0, len = this.games.length; i < len; i++) {
      if (this.games[i]._id === id) {
        return index = i;
      }
    }
  }
}
