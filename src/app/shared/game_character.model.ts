export class GameCharacter {
  private __id: string;
  private _name: string;
  private _bio: string;


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

  get bio(): string {
    return this._bio;
  }

  set bio(value: string) {
    this._bio = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
