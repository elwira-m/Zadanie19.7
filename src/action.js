import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//kreator akcji
export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
}
//wysyłanie z kreatorem
//dispatch(addComment('nowy komentarz!'));

export function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

export function removeComment(commentId) {
    return {
        type: REMOVE_COMMENT,
        id: commentId
    }
}

export function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

export function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
    }
}


