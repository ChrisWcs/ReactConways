const randomBool = () => Math.random() < .5 ? true : false;

const createRandomBoard = (rMax, cMax) => {
    let board = [];

    for(let i = 0; i < rMax; i++){
        let arr = [];

        for(let j = 0; j < cMax; j++){
            arr.push(randomBool());
        }
        board.push(arr);
    }
    return board;
};

export default createRandomBoard;
