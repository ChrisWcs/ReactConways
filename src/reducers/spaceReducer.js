const addToTotal = ( x, y, board) => {
    if( board[x][y] ){
        return 1;
    } else {
        return 0;
    }
}

const checkSpaces = ( x, y, xMax, yMax, board ) => {
    let neighbors = 0;

    if( x - 1 !== -1 ){
        neighbors += addToTotal( x - 1, y, board);
    }
    if( x + 1 !== xMax){
        neighbors += addToTotal( x + 1, y, board);
    }
    if( y - 1 !== -1){
        neighbors += addToTotal( x, y - 1, board);
    }
    if( y + 1 !== yMax){
        neighbors += addToTotal( x, y + 1, board);
    }
    if( y + 1 !== yMax && x + 1 !== xMax){
        neighbors += addToTotal( x + 1, y + 1, board);
    }
    if( y - 1 !== -1 && x - 1 !== -1){
        neighbors += addToTotal( x - 1, y - 1, board);
    }
    if( y + 1 !== yMax && x - 1 !== -1){
        neighbors += addToTotal( x - 1, y + 1, board);
    }
    if( y - 1 !== -1 && x + 1 !== xMax){
        neighbors += addToTotal( x + 1, y - 1, board);
    }
};

const spaceReducer = ( oldState, newState, x, y ) => {

    let neighbors = checkSpaces( x, y, oldState)



    if() {

    } else if() {

    } else if() {

    } else {

    }
};

export default spaceReducer;