import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounterState } from './counter.reducer';

const selectCounterFeature = createFeatureSelector<ICounterState>('counter');

export const selectCounter = createSelector(
  selectCounterFeature,
  (state) => state.counter
);
