import React from 'react'
import {useParams} from 'react-router-dom'

function Detail() {
    const {slug} = useParams();
    console.log('slug', slug)
    return (
        <div>
            detail
        </div>
    )
}

export default Detail
