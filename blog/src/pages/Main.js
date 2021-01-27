import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Main() {
    const [res, setRes] = useState('')
    useEffect( async () => {
       
            const response = await axios.get('https://sahinblog.herokuapp.com/list')
            .then(
               (res)=>  setRes(res.data.results)
            )
            .catch(
                (err)=> console.error(err)
            )
    }, [])

    return (
        <div>
            {res ? <p>aa</p> : <p>bbb </p>}
            {res ? res.map((neu) =>(
                <img src = {neu.image} alt= 'photo' />
            )) : <p>Loading...</p>}
    
        </div>
    )
}

export default Main
