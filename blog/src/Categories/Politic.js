import React, {useEffect, useState} from 'react'
import axios from 'axios'
import  Card  from '../Card/Card'

function Main() {
    const [res, setRes] = useState('')
    const [culture, set] = useState('')
    const politic = []
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
        <div>
             {res ? res.map((neu) =>(neu.category == 'Politic' 
             ? politic.push(neu) : null
             )) : <p>Loading...</p>}
             { politic.map((a) =>  < Card item = {a} /> )}
        </div>
    )
}

export default Main
