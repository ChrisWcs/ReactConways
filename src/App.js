import React from 'react';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: ""
        };

        this.startInterval = this.startInterval.bind(this);
        this.endInterval = this.endInterval.bind(this);
    }

    startInterval() {

    }

    endInterval() {

    }
    
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default App;