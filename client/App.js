import React, { Component } from 'react';
import { NavBar, Downloader } from './components';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <Downloader />
                </div>
            </div>
        );
    }
}

export default App;