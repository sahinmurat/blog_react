import React, {useEffect, useState} from 'react'
import axios from 'axios'

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

    {res ? res.map((neu) =>(neu.category == 'Literature' ?  literature.push(neu) : null
    )) : <p>Loading...</p>}

    return (
        
        <div>
            <br/>
            {res ? res.map((neu) =>(neu.category == 'Literature' ?  <img src = {neu.image} alt= 'photo' /> : null
            )) : <p>Loading...</p>}
          <p> xx {JSON.stringify(literature)}  xx</p>
        </div>
    )
}

export default Main
