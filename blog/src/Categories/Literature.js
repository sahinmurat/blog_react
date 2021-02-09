import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import './CategoryStyle.css'

function Main() {
    const [res, setRes] = useState('')
    const [culture, set] = useState('')
    const [literature, setLiterature] = useState([]);

    useEffect(async () => {
        const response = await axios.get('https://sahinblog.herokuapp.com/list')
            .then(
                (res) => getList(res.data.results)
            )
            .catch(
                (err) => console.error(err)
            )
    }, [])

    const getList = async (data) => {
        const list = [];
        console.log('data', data)
        await data.map((neu) => neu.category == 'Literature' ? list.push(neu) : null)
        setLiterature(list)
    }

    return (
        <div className='cardWrapper' >
            { literature ? literature.map((a) => < Card item={a} />) : <p>Loading...</p>}
        </div>
    )
}

export default Main
