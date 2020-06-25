import { DELETE_FROM_FAV, ADD_TO_FAV } from '../types';

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TO_FAV:
            return [...state, action.payload];
        case DELETE_FROM_FAV:
            return [...state.filter(x => x.id !== action.payload)];
        default:
            return state;
    }
}
