import 'date-fns';
import React from 'react';
import {Fab,Button} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import './App.css';
import Colonna from './new' ;
import DateAndTime from './Date';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            </header>
            <body className="App-body">
            <div className="left">
            <h2> Hear you can book a flight</h2>
                <p>Travel to every part of the World with the Falcon Company!  </p>
            </div>

            <div className="right">
            <Colonna/>
            <Button class="" color="primary">Submit</Button>
            <Fab className="" color="primary" aria-label="add">
                <Add/>
            </Fab>
            <DateAndTime/>
            </div>
            </body>
        </div>
    )

}

export default App;