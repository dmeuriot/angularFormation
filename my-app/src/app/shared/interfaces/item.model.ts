import { State } from '../enmus/state.enum';

export interface Item {
  name: string;
  ref: string;
  state: State;
}
