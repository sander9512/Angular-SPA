import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {GameDeveloper} from '../shared/game_developer.model';
import {Game} from '../shared/game.model';

@Injectable()
export class GameDeveloperService {
  developersChanged = new Subject<GameDeveloper[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/developers'; // URL to web api
  private developers: GameDeveloper[] = [];

  constructor(private http: Http) {
  }

  public getDevelopers(): Promise<GameDeveloper[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.developers = response.json() as GameDeveloper[];
        return this.developers;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  public getDeveloper(_id: string): Promise<GameDeveloper> {
    return this.http.get(this.serverUrl + '/' + _id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as GameDeveloper;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  public deleteDeveloper(developer: GameDeveloper): Promise<string> {
    console.log(developer.name);
    const idx = this.findIndexCust(developer._id);
    console.log('index', idx);
    console.log(this.developers[idx].name);
    this.developers.splice(idx, 1);
    return this.http.delete(this.serverUrl + '/' + developer._id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as string;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  public addDeveloper(developer: GameDeveloper) {
    return this.http.post(this.serverUrl, developer, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(developer);
        console.dir(response.toString());
        return response.toString() as string;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  public addGameToDev(game: Game, id: string) {
    console.log(game, 'game submitted');
    return this.http.put(this.serverUrl + '/' + id + '/' + 'game', game, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(game);
        console.dir(response.json());
        return response.json() as GameDeveloper;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  public editDeveloper(developer: GameDeveloper, id: string) {
    console.log(developer, 'dev submitted');
    return this.http.put(this.serverUrl + '/' + id, developer, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(developer);
        console.dir(response.json());
        return response.json() as GameDeveloper;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  private findIndexCust(id: string) {
    let index = -1;
    for (let i = 0, len = this.developers.length; i < len; i++) {
      if (this.developers[i]._id === id) {
        return index = i;
      }
    }
  }
}
