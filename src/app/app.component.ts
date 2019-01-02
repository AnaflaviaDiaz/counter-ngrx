import { AppState } from './app.reducer';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterActions from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-rx';
  counter: number;

  constructor(
    private _store: Store<AppState>
  ) {
    this.readCounterState();
  }

  increment() {
    this._store.dispatch(new counterActions.IncrementAction());
  }

  decrement() {
    this._store.dispatch(new counterActions.DecrementAction());
  }

  // plus() {
  //   this._store.dispatch(new counterActions.PlusAction(5));
  // }

  // reset() {
  //   this._store.dispatch(new counterActions.ResetAction());
  // }

  private readCounterState() {
    this._store
      .select('counter')
      .subscribe(counter => {
        this.counter = counter;
      });
  }
}
