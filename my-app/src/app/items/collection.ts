import { Item } from '../shared/interfaces/item.model';
import { State } from '../shared/enmus/state.enum';

export const COLLECTION: Item[] = [
{
  name: 'Christophe',
  ref: '0123',
  state: State.ALIVRER
},
{
name: 'Jean',
  ref: '4567',
  state: State.ENCOURS
},
{
name: 'Sabine',
  ref: '8910',
  state: State.LIVRE
}
];
