import React , {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Detail() {
    const [detail, setDetail] = useState('')
    const {slug} = useParams();
    console.log('slug', slug)
    const token = 'cac3a18ef501580fa9e7aa0d82457e586b167a26'

    useEffect( async () => {
       
        axios.get(`https://sahinblog.herokuapp.com/${slug}/detail-comment`,  {
                   headers:{
                     'Authorization':`Token ${token}`
                   }
                 }
          ).then((a)=> setDetail(a.data))
          .catch((a)=> console.log(a))
}, [])
    console.log('detail', detail)
    return (
        <div>
            <p><b> {detail.title} </b></p>
            <p> {detail.content} </p>
            <img src = {detail.image} alt= 'photo' />
            <p> {detail.author} </p>
         
            
        </div>
    )
}

export default Detail
