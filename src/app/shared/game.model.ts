import {GameCharacter} from './game_character.model';

export class Game {
  private __id: string;
  private _title: string;
  private _description: string;
  private _release_date: string;
  private _gameCharacters: GameCharacter[];
  private _genres: string[];


  get release_date(): string {
    return this._release_date;
  }
  get genres(): string[] {
    return this._genres;
  }

  set genres(value: string[]) {
    this._genres = value;
  }

  set release_date(value: string) {
    this._release_date = value;
  }

  get _id(): string {
    return this.__id;
  }

  set _id(value: string) {
    this.__id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get gameCharacters(): GameCharacter[] {
    return this._gameCharacters;
  }

  set gameCharacters(value: GameCharacter[]) {
    this._gameCharacters = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
