import { COMMENTS_LIST, CREATE_NEW_COMMENT } from '../types';

export default function (state = [], action) {
    switch (action.type) {
        case COMMENTS_LIST:
            return action.payload;
        case CREATE_NEW_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}
