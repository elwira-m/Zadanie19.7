import {ADD_COMMENT} from './action';
import {REMOVE_COMMENT} from './action';
import {EDIT_COMMENT} from './action';
import {THUMB_UP_COMMENT} from './action';
import {THUMB_DOWN_COMMENT} from './action';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state];
				
		case REMOVE_COMMENT:
			return state.filter(comment => comment.id !==action.id);
		
		/*case EDIT_COMMENT:
			return [{
				state.comments.map(comment => comment.id === action.id), 
                text: action.text,
                votes: votes
			}];*/
			
		case EDIT_COMMENT:
			return state.map(comment => {
                if(comment.id === action.id) {
                    return {...comment,
						text: comment.text}         //czy action.text?
                }
                return comment;
            });
		
		/*case THUMB_UP_COMMENT:
			return [{
				state.comments.map(comment => comment.id === action.id),
				text: text,
				votes: votes + 1
			}];*/
		
		case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
					return {...comment, votes: comment.votes + 1}
                }
				return comment;
            });
        		
		case THUMB_DOWN_COMMENT:
			return state.map(comment => {
                if(comment.id === action.id) {
					return {...comment, votes: comment.votes - 1}
                }
				return comment;
            });
			
        default:
            return state;
    }
};

export default comments;





















