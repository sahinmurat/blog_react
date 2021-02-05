import React, {useEffect, useState} from 'react'
import axios from 'axios'
import  Card  from '../Card/Card'
import './CategoryStyle.css'


function Main() {
    const [res, setRes] = useState('')
    const travel = []
   
    // useEffect( async () => {
       
    //         const response = await axios.get('https://sahinblog.herokuapp.com/list')
    //         .then(
    //            (res)=> console.log('resss', res)
    //         )
    //         .catch(
    //             (err)=> console.error(err)
    //         )
    // }, [])
    useEffect(() => {
        axios.get('https://sahinblog.herokuapp.com/list').
          then((res) => {
           setRes(res.data.results);
          }).
          catch((err) => console.log(err))
      }, [])

    console.log(travel)
    return (
        <div className = 'cardWrapper'  >
             {res ? res.map((neu) =>(neu.category == 'Travel' 
             ? travel.push(neu) : null
             )) : <p>Loading...</p>}
             { travel.map((a) =>  < Card item = {a} /> )}
       
        </div>
    )
}

export default Main
