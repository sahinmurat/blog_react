import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../Card/Card'
import './CategoryStyle.css'

function Main() {
    const { category } = useParams();
    const [res, setRes] = useState('')
    const [culture, set] = useState('')
    const [literature, setLiterature] = useState([]);
    const upperCategory = category.charAt(0).toUpperCase() + category.slice(1)

    useEffect(async () => {
        const response = await axios.get('https://sahinblog.herokuapp.com/list')
        getList(response.data.results)
       }, [])

    const getList = async (data) => {
        const list = [];
        data.map((neu) => neu.category == `${upperCategory}` ? list.push(neu) : null)
        setLiterature(list)
    }

    return (
        <div className='cardWrapper' >
            { literature ? literature.map((a) => < Card item={a} />) : <p>Loading...</p>}
        </div>
    )
}

export default Main
