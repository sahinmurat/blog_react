import React from 'react'
import {Button, TextField, Grid, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';



function Signup() {

    const formik = useFormik({
        initialValues: {
            username : '',
            email: '',
            password : ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    const styles = makeStyles({
        wrapper:{
            marginTop: '5rem'
        }
    })
    const signupStyles = styles();
    console.log(formik)
    return (
        <div>
            <Container className={signupStyles.wrapper} maxWidth="sm">
                <form onSubmit={formik.handleSubmit} >
            <Grid container spacing={3}> 
                <Grid item xs={12} >
                    <TextField  
                    name = "username"
                    label="User name" 
                    variant="outlined" 
                    fullWidth
                    value = {formik.values.username}
                    onChange={formik.handleChange}  
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField  
                    name = "email"
                    label="Email" 
                    variant="outlined" 
                    fullWidth
                    value = {formik.values.email}
                    onChange={formik.handleChange}  
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField  
                    name = "password"
                    label="Password" 
                    variant="outlined" 
                    type= 'password'
                    fullWidth
                    value = {formik.values.password}
                    onChange={formik.handleChange}  
                    />
                </Grid>
                <Grid item xs={12} >
                    <Button type="submit" variant="contained" color="primary" fullWidth > SignUp </Button>
                </Grid>
                <Grid item xs={12} >
                    <Button variant="contained" color="primary" fullWidth > Primary </Button>
                </Grid>
            </Grid>
            </form>
            </Container>
        </div>
    )
}

export default Signup
