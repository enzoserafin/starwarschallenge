export interface ICharacter {
  name: string;
  url: string;
}

export interface IDataState {
  count: number;
  next: string;
  previous: string;
  results: Array<ICharacter>;
}
