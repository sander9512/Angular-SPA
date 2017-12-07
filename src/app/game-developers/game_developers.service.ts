import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {GameDeveloper} from '../shared/game_developer.model';

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
}
