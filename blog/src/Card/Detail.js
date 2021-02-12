import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../App'
import './Detail.style.css'
import { FcLike } from "react-icons/fc"
import { FaRegHeart } from "react-icons/fa"
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
}));




function Detail() {
  const classes = useStyles();
  const { token, setToken, currentuser, setCurrentuser } = useContext(AuthContext);
  const [detail, setDetail] = useState('')
  const { slug } = useParams();
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const [image, setimage] = useState('')
  const [category, setcategory] = useState('')
  const [force, setForce] = useState(true)
  const history = useHistory();

  useEffect(async () => {
    axios.get(`https://sahinblog.herokuapp.com/${slug}/detail-comment`, {
      headers: {
        'Authorization': `Token ${token}`
      }
    }
    ).then((a) => setDetail(a.data))
      .catch((a) => console.log(a))
  }, [force])
  console.log('detail', detail)

  const handleSubmit = () => {
    axios.post(`https://sahinblog.herokuapp.com/${slug}/detail-comment`, {
      content: content
    }, {
      headers: {
        'Authorization': `Token ${token}`
      }
    }
    ).then((a) => {
      setForce(s => !s)
      console.log(a)
    })
      .catch((a) => console.log(a))
  }

  const likeHandle = () => {
    axios.post(`https://sahinblog.herokuapp.com/${slug}/like`,
      {
        content: ''
      }, {
      headers: {
        'Authorization': `Token ${token}`
      }
    }
    ).then((a) => {
      console.log(a.data)
      setForce(s => !s)

    })
      .catch((a) => console.log(a))
  }

  const deletePost = () => {
    axios.delete(`https://sahinblog.herokuapp.com/${slug}/update`,
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
    ).then((a) => {
      console.log(a)
      history.push(`/blog/${detail.category}`)


    })
      .catch((a) => console.log(a))
  }
  const com = detail.comments
  console.log('com', com)
  return (
    <div className='wrapper'>
      <h2 className='header' > {detail.title} </h2>
      <img className='image' src={detail.image} alt='photo' />
      <p className='content' > {detail.content} </p>
      <p className='author' ><b>  Author of this Post: </b> {detail.author} </p>
      {detail.has_liked == true ? <p className='like' onClick={likeHandle} style={{ cursor: 'pointer' }} > I like this Post <FcLike /> </p> : <p className='like' onClick={likeHandle} style={{ cursor: 'pointer' }} > I like this Post <FaRegHeart /> </p>}
      {com?.map(({ content, author }) => <p className='comment'> {content} ,<b> by {author}</b> </p>)}

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-textarea" label="Outlined" variant="outlined" rows={5} multiline onChange={(e) => setcontent(e.target.value)} />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Primary
        </Button>
        <Button onClick={deletePost} variant="contained" color="secondary">
          Delete This Post
      </Button>
      </form>
    </div>
  )
}

export default Detail
