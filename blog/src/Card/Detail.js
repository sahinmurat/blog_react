import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../App'
import './Detail.style.css'
import { FcLike } from "react-icons/fc"
import { FaRegHeart } from "react-icons/fa"

function Detail() {
  const { token, setToken, currentuser, setCurrentuser } = useContext(AuthContext);
  const [detail, setDetail] = useState('')
  const { slug } = useParams();
  console.log('slug', slug)

  useEffect(async () => {
    axios.get(`https://sahinblog.herokuapp.com/${slug}/detail-comment`, {
      headers: {
        'Authorization': `Token ${token}`
      }
    }
    ).then((a) => setDetail(a.data))
      .catch((a) => console.log(a))
  }, [detail])

  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const [image, setimage] = useState('')
  const [category, setcategory] = useState('')

  const handleSubmit = () => {
    axios.post(`https://sahinblog.herokuapp.com/${slug}/detail-comment`, {
      content: content
    }, {
      headers: {
        'Authorization': `Token ${token}`
      }
    }
    ).then((a) => console.log(a))
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
      <p className='like' onClick={likeHandle} > I like this Post <FcLike/> </p> 
      {/* //</div>{detail.has_liked == true ? <FcLike onClick={likeHandle} /> : <FaRegHeart onClick={likeHandle} />}</p> */}
      {com?.map(({content, author})=><p className='comment'> {content} ,<b> by {author}</b> </p>)}
      <form className='form' noValidate>
        <input
          onChange={(e) => setcontent(e.target.value)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="content"
          label="Your Comment"
          name="content"
          autoComplete="content"
          autoFocus
        />
        <button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Send Your Comment
            </button>
      </form>
    </div>
  )
}

export default Detail
