import { combineReducers } from 'redux';
import comments from './comments_reducer';
import fav_comments from './fav_comments_reducer';

const rootReducer = combineReducers({
    comments,
    fav_comments,
});

export default rootReducer;
