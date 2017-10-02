import React from 'react';

import Board from './components/Board';
import Title from './components/Title';

import boardReducer from './reducers/boardReducer';

import createRandomBoard from './utils/createRandomBoard';

const styleDivRow = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "10px",
};

const styleButton = {
    border: "none",
    color: "white",
    padding: "10px",
    background: "black",
    fontFamily: "Arial",
    fontSize: "22px",
    marginRight: "10px",
    cursor: "pointer"
};

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: "",
            board: createRandomBoard(15,15),
            isRunning: false,
        };

        this.startInterval = this.startInterval.bind(this);
        this.endInterval = this.endInterval.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        clearInterval( this.state.id );
        this.setState( () => ({
            id: "",
            board: createRandomBoard(15,15),
            isRunning: false,
        }));
    }

    startInterval() {
        let tempId = setInterval( () => {
            let tempBoard = boardReducer(this.state.board);

            this.setState( () => ({
                board: tempBoard
            }));

        }, 500);

        this.setState( () => ({
            id: tempId,
            isRunning: true,
        }));
    }

    endInterval() {
        clearInterval( this.state.id );
        this.setState( () => ({
            isRunning: false,
        }));
    }
    
    render() {
        return (
            <div>
                <Title title={"Conway's Game of Life"}/>
                <Board board={this.state.board} />
                <div style={styleDivRow}>
                    { this.state.isRunning ? <button style={styleButton} onClick={this.endInterval}>End</button> 
                                           : <button style={styleButton} onClick={this.startInterval}>Start</button>}
                    <button style={styleButton} onClick={this.reset}>Reset</button>
                </div>   
            </div>
        );
    }
}

export default App;