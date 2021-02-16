// import React, { useState, useContext, useEffect } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { AuthContext } from '../App'
// import { useParams } from 'react-router-dom'

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Sahin's Blog
//       </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         minHeight: '100vh',
//     },
//     paper: {
//         // margin: theme.spacing(8, 4),
//         // margin:'auto',
//         // display: 'flex',
//         // flexDirection: 'column',
//         // alignItems: 'center',
//         paddingBottom: '2.5rem',
//         position: 'absolute',
//         bottom: 0,
//         width:' 100%',
//         height:' 2.5rem',
//     },

// }));

// export default function Signin(props) {
//     const classes = useStyles();
//     return (
//         <Grid container component="main" className={classes.root}>
//             <CssBaseline />
//             <div className={classes.paper}>
//                 <Box mt={5}>
//                     {/* <p>Practice Make Perfect</p> */}
//                     <Copyright />
//                 </Box>
//             </div>
//         </Grid>

//     );
// }
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#EEEEEE",
    padding: theme.spacing(3, 0),

  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>Blog Project</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Practice make perfect</Typography>
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/sahinmurat">
                sahinmurat
            </Link> 
        </Typography>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

