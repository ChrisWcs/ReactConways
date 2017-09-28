import React from 'react';
import Board from '../components/Board';

const data = [
    [ false, false, true ],
    [ false, true, false ],
    [ true, false, false ],
];

const App = () => (
    <Board board={data}/>
);

export default App;