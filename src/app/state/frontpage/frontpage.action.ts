import { createAction, props } from '@ngrx/store';
import { Frontpage } from 'src/app/frontpage/frontpage.model';

export const ADD_FRONTPAGE = createAction(
  '[Frontpage Module] Add Frontpage',
  props<{ id: number; name: string }>()
);
export const GET_FRONTPAGE = createAction('[Frontpage Module] Get Frontpage');

export const REMOVE_FRONTPAGE = createAction(
  '[Frontpage Module] Remove Frontpage',
  props<{ id: string }>()
);

//
// API ACTIONS
//
export const LOAD_FRONTPAGE = createAction('[Frontpage Module] Load Frontend');

export const LOAD_FRONTPAGE_SUCCESS = createAction(
  '[Frontpage API] Frontpage Load Success',
  props<{ products: Frontpage[] }>()
);

export const LOAD_FRONTPAGE_ERROR = createAction(
  '[Frontpage API] Frontpage Load Failed',
  props<{ error: string }>()
);

export const API_SAVE_FRONTPAGE = createAction('[Frontpage Module] API_SAVE_FRONTPAGE');

export const API_SAVE_FRONTPAGE_SUCCESS = createAction(
  '[Frontpage API] API_SAVE_FRONTPAGE_SUCCESS',
  props<{ product: Frontpage }>()
);

export const API_SAVE_FRONTPAGE_ERROR = createAction(
  '[Frontpage API] API_SAVE_FRONTPAGE_ERROR',
  props<{ error: string }>()
);
