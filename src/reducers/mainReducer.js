import { ADVANCE } from '../actions/actions';
import { createBlankBoard } from '../utils/utils';
import spaceReducer from './spaceReducer';

const mainReducer = (state, action) => {
    switch(action.type){
        case ADVANCE:
            let newState = createBlankBoard( state.board.length, state.board[0].length );

            state.board.forEach( (arr, r) => {
                arr.forEach( (x, c) => {
                    newState = spaceReducer( state.board, newState, r, c);
                });
            });
            
            return {
                board: newState
            };
        default:
            return state;
    }
};

export default mainReducer;