import React, {useEffect, useState} from 'react'
import axios from 'axios'
import  Card  from '../Card/Card'
import './CategoryStyle.css'

function Main() {
    const [res, setRes] = useState('')
    const [culture, set] = useState('')
    const literature = []
    console.log(res)
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
        <div className = 'cardWrapper' >
             {res ? res.map((neu) =>(neu.category == 'Literature' 
             ? literature.push(neu) : null
             )) : <p>Loading...</p>}
             { literature.map((a) =>  < Card item = {a} /> )}
        </div>
    )
}

export default Main
