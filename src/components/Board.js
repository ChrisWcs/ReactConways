import React from 'react';
import PropTypes from 'prop-types';

import Pixel from './Pixel';



const Board = ({board}) => (
    <div>
        {board.map( (arr, j) => {
            return (
                <div key={j}>
                    {arr.map( (ele, i) => <Pixel key={i} status={ele} /> )}
                </div>
            );
        })}
    </div>
);

Board.propTypes = {
    board: PropTypes.array
};

export default Board;