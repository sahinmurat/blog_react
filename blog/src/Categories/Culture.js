import React, {useEffect, useState} from 'react'
import axios from 'axios'
import  Card  from '../Card/Card'

function Main() {
    const [res, setRes] = useState('')
    const [culture, set] = useState('')
    const literature = [ ]
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

    {res ? res.map((neu) =>(neu.category == 'Literature' ?  literature.push(neu) : null
    )) : <p>Loading...</p>}
    const slug = literature.map(({slug}) => slug)

    return (
        <div>
            {/* <br/>
            {res ? res.map((neu) =>(neu.category == 'Literature' ?  <img src = {neu.image} alt= 'photo' /> : null
            )) : <p>Loading...</p>}
          <p> {slug} </p> */}
         { literature.map((a) =>  < Card item = {a} /> )}
         
        </div>
    )
}

export default Main
