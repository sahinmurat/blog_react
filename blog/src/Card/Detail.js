import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../App'
import './Detail.style.css'
import { FcLike } from "react-icons/fc"
import { FaRegHeart } from "react-icons/fa"
import { useHistory } from 'react-router-dom';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Icon } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import Swal from 'sweetalert2'
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
  comment: {
    border: '1px solid blue',
    borderRadius: '10px',
    display: 'inline-block',
    wordBreak: 'break-all'
  },
  commentTitle: {
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px'
  },
  a: {
    display: 'inline-block',
    wordBreak: 'break-all'
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
      .catch((a) => {
        Swal.fire({
          title: 'You are not the owner of this post!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      })

  }

  const updatePost = () => {
    history.push(`/update/${slug}`)
  }
  
  const com = detail.comments

  return (
    <div className='wrapper'>
      <h2 className='header' > {detail.title} </h2>
      <img className='image' src={detail.image} alt='photo' />
      <p className='content' > {detail.content} </p>
      <p className='author' ><b>  Author of this Post: </b> {detail.author} </p>
      {detail.has_liked == true ? <p className='like' onClick={likeHandle} style={{ cursor: 'pointer' }} > I like this Post <FcLike /> </p> : <p className='like' onClick={likeHandle} style={{ cursor: 'pointer' }} > I like this Post <FaRegHeart /> </p>}

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-textarea" label="Comment" variant="outlined" rows={5} multiline onChange={(e) => setcontent(e.target.value)} />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit Your Comment <SendRoundedIcon style={{ marginLeft: '10px' }} />
        </Button>
        <Button onClick={deletePost} variant="contained" color="secondary">
          Delete This Post <DeleteTwoToneIcon style={{ marginLeft: '10px' }} />
        </Button>
        <Button onClick={updatePost} variant="contained" style={{ color: 'purple' }}>
          Update This Post <BuildTwoToneIcon style={{ marginLeft: '10px' }} />
        </Button>
        <h3 className={classes.commentTitle}> What do the people think about this post ?</h3>
        {com?.map(({ content, author }) => <p className={classes.comment}> <b> {author} :</b> <br />{content} </p>)}
      </form>
    </div>
  )
}

export default Detail
