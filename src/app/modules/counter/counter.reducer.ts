import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface ICounterState {
  counter: number;
}

export interface ICounterAction extends Action {
  payload?: any;
}

const initialState: ICounterState = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 }))
);
