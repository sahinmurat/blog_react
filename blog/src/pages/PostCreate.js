import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { AuthContext } from '../App'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PostAddTwoToneIcon from '@material-ui/icons/PostAddTwoTone';
import MailIcon from '@material-ui/icons/Mail';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

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
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: '10px 0',
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PostCreate() {
  const classes = useStyles();
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const [image, setimage] = useState('')
  const [category, setcategory] = useState('')
  const [status, setStatus] = useState('')
  const { token, setToken, currentuser, setCurrentuser } = useContext(AuthContext);


  const handleChangeCategory = (event) => {
    setcategory(event.target.value)
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value)
  };


  const handleSubmit = () => {
    axios.post('https://sahinblog.herokuapp.com/create', {
      title: title, content: content, image: image, category: category, status: status
    }, {
      headers: {
        'Authorization': `Token ${token}`
      }
    }
    ).then((a) => console.log(a))
      .catch((a) => console.log(a))
  }
  return (

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <  MailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create New Post
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              onChange={(e) => settitle(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
            rows={5} multiline
              onChange={(e) => setcontent(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="content"
              label="Content"
              name="content"
              autoComplete="content"
              autoFocus
            />
            <TextField
              onChange={(e) => setimage(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image"
              type="url"
              id="image"
              autoComplete="current-image"
            />
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
              <InputLabel required id="demo-simple-select-outlined-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={category}
                onChange={handleChangeCategory}
                label="Category"
                fullWidth
              >
                <MenuItem value='Technology'>Technology</MenuItem>
                <MenuItem value='Travel'>Travel</MenuItem>
                <MenuItem value='Social'>Social</MenuItem>
                <MenuItem value='Sport'>Sport</MenuItem>
                <MenuItem value='Politic'>Politic</MenuItem>
                <MenuItem value='Philosophy'>Philosophy</MenuItem>
                <MenuItem value='Literature'>Literature</MenuItem>
                <MenuItem value='Education'>Education</MenuItem>
                <MenuItem value='Economy'>Economy</MenuItem>
                <MenuItem value='Other'>Other</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl} fullWidth>
              <InputLabel required id="demo-simple-select-outlined-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={status}
                onChange={handleChangeStatus}
                label="Status"
                fullWidth
              >
                <MenuItem value='Published'>Published</MenuItem>
                <MenuItem value='Draft'>Draft</MenuItem>
              </Select>
            </FormControl>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Send Your Post <SendRoundedIcon style={{ marginLeft:'10px' }}/>
            </Button>
            <Grid container justify="flex-end">
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

