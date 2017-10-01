import React from 'react';

import Board from './components/Board';

import boardReducer from './reducers/boardReducer';

import createRandomBoard from './utils/createRandomBoard';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: "",
            board: createRandomBoard(15,15),
        };

        this.startInterval = this.startInterval.bind(this);
        this.endInterval = this.endInterval.bind(this);
    }

    startInterval() {
        let tempId = setInterval( () => {
            let tempBoard = boardReducer(this.state.board);

            this.setState( () => ({
                board: tempBoard
            }));

        }, 500);

        this.setState( () => ({
            id: tempId
        }));
    }

    endInterval() {
        clearInterval( this.state.id );
    }
    
    render() {
        return (
            <div>
                <Board board={this.state.board} />
                <button onClick={this.startInterval}>Start</button>
                <button onClick={this.endInterval}>End</button>
            </div>
        );
    }
}

export default App;