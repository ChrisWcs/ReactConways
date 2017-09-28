import React from 'react';
import Board from '../components/Board';
import createRandomBoard from '../utils/createRandomBoard';

const data = createRandomBoard(3,3);

const App = () => (
    <Board board={data}/>
);

export default App;