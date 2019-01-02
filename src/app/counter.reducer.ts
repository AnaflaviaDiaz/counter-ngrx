import * as CounterAction from './counter.actions';

export function CounterReducer (state: number = 0, action: CounterAction.CounterTypeAction) {
  if (action === null) { return state; }
  switch (action.type) {
    case CounterAction.INCREMENT:
      return state + 1;
    case CounterAction.DECREMENT:
      if (state === 0) {return state; }
      return state - 1;
    case CounterAction.PLUS:
      return state + action.payload;
    case CounterAction.RESET:
      return 0;
    default:
      return state;
  }
}

