import React from 'react'
import {Button, TextField, Grid, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    wrapper:{
        marginTop: '5rem'
    
    }
})

function Signup() {
    const signupStyles = styles();
    return (
        <div>
            <Container className={signupStyles.wrapper} maxWidth="sm">
            <Grid container spacing={3}> 
                <Grid item xs={12} >
                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth  />
                </Grid>
                <Grid item xs={12} >
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth  />
                </Grid>
                <Grid item xs={12} >
                    <Button variant="contained" color="primary" fullWidth > SignUp </Button>
                </Grid>
                <Grid item xs={12} >
                    <Button variant="contained" color="primary" fullWidth > Primary </Button>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default Signup
