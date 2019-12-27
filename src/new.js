import React from 'react';
import './App.css';
import {TextField,Grid} from '@material-ui';


export default function Colonna() {
    return (
        <div className="forUser">
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center" >
           <Grid item sm> <TextField id="outlined-basic" label="First Name" variant="outlined"/>
           </Grid>
           <Grid item sm> <TextField id="outlined-basic" label="Second Name" variant="outlined"/>
           </Grid>
           <Grid item sm> <TextField id="outlined-basic" label="Last Name" variant="outlined"/>
           </Grid>
            </Grid>
        </div>
    )
}
