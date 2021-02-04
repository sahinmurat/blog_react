import React,  {useContext} from 'react';
import {AuthContext} from '../App'
import {useHistory} from 'react-router-dom';
import {StyledCardWrapper,StyledPostImage, StyledPostTitle} from './Card.style'
import { FcLike } from "react-icons/fc"
import {FaRegComments} from 'react-icons/fa'
import {FaRegEye} from 'react-icons/fa'



function Card({item}) {
   const history = useHistory();
   const {auth} = useContext(AuthContext);
    return (
        <StyledCardWrapper onClick = {() => history.push(`/detail/${item.slug}`)} >
            <StyledPostImage src = {item.image} alt= 'photo' />
            <StyledPostTitle> {item.title} </StyledPostTitle>
            <StyledPostTitle> <FcLike />{item.like_count} < FaRegComments style={{paddingLeft:10}}/> {item.comment_count} < FaRegEye style={{paddingLeft:10}}/>  {item.view_count} </StyledPostTitle>
        </StyledCardWrapper>
    )
}

export default Card
