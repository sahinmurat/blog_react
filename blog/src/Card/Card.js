import React from 'react'
import {useHistory} from 'react-router-dom'

function Card({item}) {
    const history = useHistory();
    console.log('a', item)
    return (
        <div onClick = {() => history.push(`/detail/${item.slug}`)} >
            <img src = {item.image} alt= 'photo' />
            <p> {item.title} </p>
        </div>
    )
}

export default Card
