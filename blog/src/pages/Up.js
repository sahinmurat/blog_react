// import React from 'react'
// import {Button, TextField, Grid, Container} from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';
// import { useFormik } from 'formik';



// function Signup() {

//     const formik = useFormik({
//         initialValues: {
//             username : '',
//             email: '',
//             password : ''
//         },
//         onSubmit: values => {
//           alert(JSON.stringify(values, null, 2));
//         },
//       });

//     const styles = makeStyles({
//         wrapper:{
//             marginTop: '5rem'
//         }
//     })
//     const signupStyles = styles();
//     console.log(formik)
//     return (
//         <div>
//             <Container className={signupStyles.wrapper} maxWidth="sm">
//                 <form onSubmit={formik.handleSubmit} >
//             <Grid container spacing={3}> 
//                 <Grid item xs={12} >
//                     <TextField  
//                     name = "username"
//                     label="User name" 
//                     variant="outlined" 
//                     fullWidth
//                     value = {formik.values.username}
//                     onChange={formik.handleChange}  
//                     />
//                 </Grid>
//                 <Grid item xs={12} >
//                     <TextField  
//                     name = "email"
//                     label="Email" 
//                     variant="outlined" 
//                     fullWidth
//                     value = {formik.values.email}
//                     onChange={formik.handleChange}  
//                     />
//                 </Grid>
//                 <Grid item xs={12} >
//                     <TextField  
//                     name = "password"
//                     label="Password" 
//                     variant="outlined" 
//                     type= 'password'
//                     fullWidth
//                     value = {formik.values.password}
//                     onChange={formik.handleChange}  
//                     />
//                 </Grid>
//                 <Grid item xs={12} >
//                     <Button type="submit" variant="contained" color="primary" fullWidth > SignUp </Button>
//                 </Grid>
//                 <Grid item xs={12} >
//                     <Button variant="contained" color="primary" fullWidth > Primary </Button>
//                 </Grid>
//             </Grid>
//             </form>
//             </Container>
//         </div>
//     )
// }

// export default Signup


import React,  {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  const classes = useStyles();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = () => {
    axios.post('https://sahinblog.herokuapp.com/user/register', {
      username:username , email:email, password:password, password2:password2
    }).then((a)=> console.log(a))
    .catch((a)=> console.log(a))
  }

  // const handleSubmit = () => {
  //   axios.post('https://sahinblog.herokuapp.com/user/register', {
  //     username:username , email:email, password:password, password2:password2
  //   }, {
  //     headers:{
  //       'Authorization':`Token ${token}`
  //     }
  //   }).then((a)=> console.log(a))
  //   .catch((a)=> console.log(a))
  // }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate  >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange = {(e)=> setUsername(e.target.value)}
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="User Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               onChange = {(e)=> setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label=" Email"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               onChange = {(e)=> setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="password1"
                label="Password"
                name="email"
                type="password"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                 onChange = {(e)=> setPassword2(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Password2"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            onClick = {handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

// #button onSubmit
// onchange 4 usestate
// onclick handlesubmit
// axios.post
// // axios.getaxios.delete
localStorage.setItem('Authorization', token)
// localStorage.setItem('Authorization', '')
// localStorage.getItem('Authorization')