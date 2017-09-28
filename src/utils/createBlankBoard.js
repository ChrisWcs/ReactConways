const createBlankBoard = (maxR, maxC) => {
    let board = [];
    for(let i = 0; i < maxR; i++){
        let temp = [];

        for(let j = 0; j < maxC; j++){
            temp.push(false);
        }
        board.push(temp);
    }
    return board;
};

export default createBlankBoard;