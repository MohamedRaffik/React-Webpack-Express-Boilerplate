import React, { Component } from 'react';
import { NavBar, TagEdit } from '..';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <TagEdit />
                </div>
            </div>
        );
    }
}

export default App;