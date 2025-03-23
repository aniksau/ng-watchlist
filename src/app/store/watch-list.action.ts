import { createAction, props } from "@ngrx/store";
import { SymbolResultList } from "../models/symbol-list";

export const ADD_TO_WATCH_LIST = 'add to watchList';
export const LOAD_WATCH_LIST = 'get watchList';
export const LOAD_WATCH_LIST_SUCCESS = 'get watchList success';
export const LOAD_WATCH_LIST_FAIL = 'get watchList fail';
export const REMOVE_FROM_WATCH_LIST = 'remove from watchList';

export const addToWatchList = createAction(ADD_TO_WATCH_LIST, props<{ itemToAdd: SymbolResultList }>());
export const loadWatchList = createAction(LOAD_WATCH_LIST);
export const watchListSuccess = createAction(LOAD_WATCH_LIST_SUCCESS, props<{ list: SymbolResultList[] }>());
export const watchListFail = createAction(LOAD_WATCH_LIST_FAIL, props<{ message: string }>());
export const removeFromWatchList = createAction(REMOVE_FROM_WATCH_LIST, props<{ targetItem: SymbolResultList }>());
