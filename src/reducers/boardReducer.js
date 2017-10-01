import createBlankBoard from '../utils/createBlankBoard';
import spaceReducer from './spaceReducer';

const boardReducer = ( board ) => {
    let newState = createBlankBoard( board.length, board[0].length );

    board.forEach( (arr, r) => {
        arr.forEach( (x, c) => {
            newState = spaceReducer( board, newState, r, c);
        });
    });
    
    return newState;
};

export default boardReducer;