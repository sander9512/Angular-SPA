import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Game} from '../shared/game.model';

@Injectable()
export class GamesService {
  gamesChanged = new Subject<Game[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/games'; // URL to web api
  private games: Game[] = [];

  constructor(private http: Http) {
  }

  public getGames(): Promise<Game[]> {
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

  public getGame(_id: string): Promise<Game> {
    return this.http.get(this.serverUrl + '/' + _id, {headers: this.headers})
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
}
