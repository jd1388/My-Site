import React, { Component } from 'react';

import Styles from './styles/App';

class App extends Component {
    render() {
        return (
            <div>
                <h1 style={Styles.hero}>Hello</h1>
            </div>
        );
    }
}

export default App;
