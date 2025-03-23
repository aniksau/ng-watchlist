import { createReducer, on } from "@ngrx/store";
import { watchListState } from "./watch-list.state";
import { addToWatchList, removeFromWatchList, watchListFail, watchListSuccess } from "./watch-list.action";

const _watchListReducer = createReducer(watchListState,
    on(watchListSuccess, (state, action) => {
        return {
            ...state,
            list: action.list
        }
    }),
    on(watchListFail, (state, action) => {
        return {
            ...state,
            list: [],
            message: action.message
        }
    }),
    on(addToWatchList, (state, action) => {
        if (state?.list?.findIndex(item => item.symbol === action?.itemToAdd?.symbol) === -1) {
            return {
                ...state,
                list: [...state?.list, action.itemToAdd]
            }
        };
        return {
            ...state
        };
    }),
    on(removeFromWatchList, (state, action) => {
        const stateCopy = [...state?.list];
        stateCopy.splice(state?.list?.findIndex(item => item.symbol === action?.targetItem?.symbol), 1);
        console.log(stateCopy)
        return {
            ...state,
            list: stateCopy
        }
    })
);

export const watchListReducer = (state: any, action: any) => {
    return _watchListReducer(state, action);
};