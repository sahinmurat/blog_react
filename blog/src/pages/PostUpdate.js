import React, { useState, useEffect, useContext } from 'react';
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
import { useParams } from 'react-router-dom'
import NativeSelect from '@material-ui/core/NativeSelect';
import { useHistory } from 'react-router-dom';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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

export default function PostUpdate() {
    const classes = useStyles();
    const history = useHistory();
    const { token, setToken, currentuser, setCurrentuser } = useContext(AuthContext);
    const [detail, setDetail] = useState('')
    const [force, setForce] = useState(true)
    const { slug } = useParams();
    const [title, setUpdTitle] = useState('')
    const [content, setUpdContent] = useState('')
    const [image, setUpdImage] = useState('')
    const [status, setUpdStatus] = useState('')
    const [category, setUpdCategory] = useState('')

    useEffect(async () => {
        axios.get(`https://sahinblog.herokuapp.com/${slug}/detail-comment`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        }
        ).then((a) => {
            setDetail(a.data)
            setUpdTitle(a.data.title)
            setUpdContent(a.data.content)
            setUpdImage(a.data.image)
            setUpdStatus(a.data.status)
            setUpdCategory(a.data.category)
        })
            .catch((a) => console.log(a))
    }, [force])

    const handleChangeCategory = (event) => {
        setUpdCategory(event.target.value)
    };
    const handleChangeStatus = (event) => {
        setUpdStatus(event.target.value)
    };

    const handleSubmit = () => {
        axios.put(`https://sahinblog.herokuapp.com/${slug}/update`, {
            title: title, content: content, image: image, category: category, status: status
        }, {
            headers: {
                'Authorization': `Token ${token}`
            }
        }
        ).then((a) => {
            console.log(a)
            history.push(`/detail/${slug}`)
        })
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
                        Update Your Post
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            onChange={(e) => setUpdTitle(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            name="title"
                            autoComplete="title"
                            autoFocus
                            value={title}
                        />
                        <TextField
                            rows={5} multiline
                            onChange={(e) => setUpdContent(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="content"
                            name="content"
                            autoComplete="content"
                            autoFocus
                            value={content}
                        />
                        <TextField
                            onChange={(e) => setUpdImage(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="image"
                            type="url"
                            id="image"
                            autoComplete="current-image"
                            value={image}
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
                            Update Your Post <SendRoundedIcon style={{ marginLeft: '10px' }} />
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}








