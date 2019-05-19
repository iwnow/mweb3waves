import React, {Component} from 'react';

import Stag from './components/stag';
import Button from './components/button';
import {WavesKeeperClient, MessageService} from './services';


export default class App extends Component {
    auth() {
        if (WavesKeeperClient.isAvailable()) {
            WavesKeeperClient.auth({ data: 'test data' }).then(console.log).catch(console.log);
        } else {
            MessageService.alert(WavesKeeperClient.availableError());
        }
    }
    render() {
        return <>
            <div className="section">
                <Stag name="web" desc="3.0"></Stag>
            </div>
            <div className="section">
                <Button onClick={this.auth}>Waves Keeper Auth</Button>
            </div>
        </>
    }
}