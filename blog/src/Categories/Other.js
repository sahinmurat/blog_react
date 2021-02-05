import React, {useEffect, useState} from 'react'
import axios from 'axios'
import  Card  from '../Card/Card'
import './CategoryStyle.css'

function Main() {
    const [res, setRes] = useState('')
    const [culture, set] = useState('')
    const other = []
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
             {res ? res.map((neu) =>(neu.category == 'Other' 
             ? other.push(neu) : null
             )) : <p>Loading...</p>}
             { other.map((a) =>  < Card item = {a} /> )}
        </div>
    )
}

export default Main
