import {GameCharacter} from './game_character.model';

export class Game {
  private __id: string;
  private _title: string;
  private _description: string;
  private _gameCharacters: GameCharacter[];
  private _releaseDate: string;


  get releaseDate(): string {
    return this._releaseDate;
  }

  set releaseDate(value: string) {
    this._releaseDate = value;
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
