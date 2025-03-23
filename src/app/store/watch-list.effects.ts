import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addToWatchList, loadWatchList, removeFromWatchList, watchListFail, watchListSuccess } from "./watch-list.action";
import { catchError, exhaustMap, of, withLatestFrom } from "rxjs";
import { WATCH_LIST_KEY } from "../constants/localStorageItems";
import { Store } from "@ngrx/store";

@Injectable()
export class WatchListEffect {
    actions$ = inject(Actions);
    store$ = inject(Store);

    _loadWatchList = createEffect(() => this.actions$.pipe(
        ofType(loadWatchList),
        exhaustMap((action) => {
            const watchList = localStorage?.getItem(WATCH_LIST_KEY);
            return of(watchListSuccess({ list: JSON.parse(watchList || '') }))
        }),
        catchError(err => of(watchListFail({ message: 'Error!' })))
    ));

    _setWatchList = createEffect(() => this.actions$.pipe(
        ofType(addToWatchList, removeFromWatchList),
        withLatestFrom(this.store$.select('watchList')),
        exhaustMap(([action, watchList]) => {
            localStorage.setItem(WATCH_LIST_KEY, JSON.stringify(watchList?.list));
            return of(watchListSuccess(watchList));
        })
    ))
}