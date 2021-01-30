import React from 'react'
import {useParams} from 'react-router-dom'

function Detail() {
    const {slug} = useParams();
    console.log('slug', slug)
    const token = 'cac3a18ef501580fa9e7aa0d82457e586b167a26'

    // const handleSubmit = () => {
    //   axios.post('https://sahinblog.herokuapp.com/create', {
    //     title:title , content:content, image:image, category:category
    //   }, {
    //            headers:{
    //              'Authorization':`Token ${token}`
    //            }
    //          }
    //   ).then((a)=> console.log(a))
    //   .catch((a)=> console.log(a))
    // }
    useEffect( async () => {
       
        axios.post('https://sahinblog.herokuapp.com/create', {
            title:title , content:content, image:image, category:category
          }, {
                   headers:{
                     'Authorization':`Token ${token}`
                   }
                 }
          ).then((a)=> console.log(a))
          .catch((a)=> console.log(a))
}, [])

    return (
        <div>
            <p> {slug} </p>
        </div>
    )
}

export default Detail
