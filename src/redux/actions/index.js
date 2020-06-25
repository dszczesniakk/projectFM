import axios from 'axios';
import { COMMENTS_LIST, ADD_TO_FAV, CREATE_NEW_COMMENT, DELETE_FROM_FAV } from '../types';

export function getComments() {
    const request = axios.get('https://jsonplaceholder.typicode.com/comments').then(response => {
        return response.data.filter(x => x.id <= 20);
    });

    return {
        type: COMMENTS_LIST,
        payload: request,
    };
}

export function addToFavs(data) {
    return {
        type: ADD_TO_FAV,
        payload: data,
    };
}

export function deleteFromFavs(id) {
    return {
        type: DELETE_FROM_FAV,
        payload: id,
    };
}

export function addNewComment(data) {
    return {
        type: CREATE_NEW_COMMENT,
        payload: data,
    };
}
