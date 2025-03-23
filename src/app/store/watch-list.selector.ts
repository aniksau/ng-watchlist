import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SymbolList, SymbolResultList } from "../models/symbol-list";

const watchListState = createFeatureSelector<SymbolResultList[]>('watchList');

export const getWatchList = createSelector(watchListState, (state) => {
    return state;
});