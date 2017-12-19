import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enmus/state.enum';
import { COLLECTION } from '../../../items/collection';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  newItem: Item;
  state = State;
  collection: Item[];
  @Output() dataItem: EventEmitter<Item> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.reset();
  }

process(): void {
  this.dataItem.emit(this.newItem);
  this.reset();
}

reset(): void {
  this.newItem = {
    name: '',
    ref: '',
    state: State.ALIVRER
  };
}

}
