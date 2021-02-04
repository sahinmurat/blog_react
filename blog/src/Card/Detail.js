import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../App'
import './Detail.style.css'
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

const useStyles = makeStyles((theme) => ({
    root: {
        height: '65vh',
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
}));

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


function Detail() {
    const { token, setToken, currentuser, setCurrentuser } = useContext(AuthContext);
    const [detail, setDetail] = useState('')
    const { slug } = useParams();
    console.log('slug', slug)
    const classes = useStyles();
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [image, setimage] = useState('')
    const [category, setcategory] = useState('')
    console.log('token', token, 'currentuser', currentuser)


    useEffect(async () => {

        axios.get(`https://sahinblog.herokuapp.com/${slug}/detail-comment`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        }
        ).then((a) => setDetail(a.data))
            .catch((a) => console.log(a))
    }, [])

    const handleSubmit = () => {
        axios.post('https://sahinblog.herokuapp.com/create', {
            title: title, content: content, image: image, category: category
        }, {
            headers: {
                'Authorization': `Token ${token}`
            }
        }
        ).then((a) => console.log(a))
            .catch((a) => console.log(a))
    }
    return (
        <div className='wrapper'>
            <h2> {detail.title} </h2>
            <p className='content' > {detail.content} </p>
            <img className='img' src={detail.image} alt='photo' />
            <p> {detail.author} </p>

            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Add Your Comment
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
                            <TextField
                                onChange={(e) => setcategory(e.target.value)}
                                variant="outlined"
                                required
                                fullWidth
                                name="category"
                                label="Category"
                                type="dropdown"
                                // id="image"
                                autoComplete="current-image"
                            />

                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSubmit}
                            >
                                Send Your Comment
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>

        </div>

    )
}

export default Detail