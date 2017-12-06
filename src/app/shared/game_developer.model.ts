import {Game} from './game.model';

export class GameDeveloper {
  private __id: string;
  private _name: string;
  private _companyDescription: string;
  private _games: Game[];


  get _id(): string {
    return this.__id;
  }

  set _id(value: string) {
    this.__id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get companyDescription(): string {
    return this._companyDescription;
  }

  set companyDescription(value: string) {
    this._companyDescription = value;
  }

  get games(): Game[] {
    return this._games;
  }

  set games(value: Game[]) {
    this._games = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
