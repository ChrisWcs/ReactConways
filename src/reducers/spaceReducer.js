const addToTotal = ( r, c, board) => {
    if( board[r][c] ){
        return 1;
    } else {
        return 0;
    }
}

const checkSpaces = ( r, c, rMax, cMax, board ) => {
    let neighbors = 0;

    if( r - 1 !== -1 ){
        neighbors += addToTotal( r - 1, c, board);
    }
    if( r + 1 !== rMax){
        neighbors += addToTotal( r + 1, c, board);
    }
    if( c - 1 !== -1){
        neighbors += addToTotal( r, c - 1, board);
    }
    if( c + 1 !== cMax){
        neighbors += addToTotal( r, c + 1, board);
    }
    if( c + 1 !== cMax && r + 1 !== rMax){
        neighbors += addToTotal( r + 1, c + 1, board);
    }
    if( c - 1 !== -1 && r - 1 !== -1){
        neighbors += addToTotal( r - 1, c - 1, board);
    }
    if( c + 1 !== cMax && r - 1 !== -1){
        neighbors += addToTotal( r - 1, c + 1, board);
    }
    if( c - 1 !== -1 && r + 1 !== rMax){
        neighbors += addToTotal( r + 1, c - 1, board);
    }

    return neighbors;
};

const spaceReducer = ( oldState, newState, r, c ) => {

    let neighbors = checkSpaces( r, c, oldState.length, oldState[0].length, oldState);
    let state = [];
    newState.forEach( arr => state.push([...arr]));

    if( neighbors < 2 && oldState[r][c] ) {
        state[r][c] = false;

    } else if( neighbors >= 2 && neighbors <= 3 && oldState[r][c]) {
        state[r][c] = true;

    } else if( neighbors > 3 && oldState[r][c]) {
        state[r][c] = false;

    } else if( neighbors === 3 && (!oldState[r][c]) ){
        state[r][c] = true;
    }

    return state;
};

export default spaceReducer;