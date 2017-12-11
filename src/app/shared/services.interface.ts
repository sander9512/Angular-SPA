interface ServicesInterface {
  getAll(): Promise<object[]>;
  getEntity(id: string): Promise<object>;
  deleteEntity(obj: object): Promise<string>;
  editEntity(obj: object, id: string): Promise<object>;
  findIndexCust(id: string): number;
}
