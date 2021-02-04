import React, {useEffect, useState} from 'react'
import axios from 'axios'
import  Card  from '../Card/Card'


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
           console.log(res.data);
          }).
          catch((err) => console.log(err))
      }, [])

    console.log('res', res)
    return (
        <div >
             {res ? res.map((neu) =>(neu.category == 'Travel' 
             ? travel.push(neu) : null
             )) : <p>Loading...</p>}
             { travel.map((a) =>  < Card item = {a} /> )}
             <p>{JSON.stringify(travel)}</p>
        </div>
    )
}

export default Main
