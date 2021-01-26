import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Main() {
    const [api, setApi] = useState('')
    useEffect( async () => {
        try {
            const response = await axios.get('https://sahinblog.herokuapp.com/list');
            console.log(response.data.results)
            setApi(response.data.results)
        } catch (err) {
            console.error(err)
        }
    }, [])



    return (
        <div>
            {api.map((neu) =>(
                <p>{neu.author} </p>
            ))}
            {/* {JSON.stringify(api)} */}
        </div>
    )
}

export default Main
