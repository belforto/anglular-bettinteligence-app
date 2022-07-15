import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { FrontPageState } from './frontpage.reducer';
import { Frontpage } from '../../frontpage/frontpage.model';

// export const selectFrontpage = (state: AppState) => state.products;
export const selectAllFrontpage = createSelector(
  // selectFrontpage,
  (state: AppState) => state.products,
  (state: FrontPageState) => state.products
);

