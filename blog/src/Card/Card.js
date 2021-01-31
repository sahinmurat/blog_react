import React,  {useContext} from 'react';
import {AuthContext} from '../App'
import {useHistory} from 'react-router-dom';
import {StyledCardWrapper,StyledPostImage, StyledPostTitle} from './Card.style'



function Card({item}) {
   const history = useHistory();
   const {auth} = useContext(AuthContext);
   console.log(auth)
    return (
        <StyledCardWrapper onClick = {() => history.push(`/detail/${item.slug}`)} >
            <StyledPostImage src = {item.image} alt= 'photo' />
            <StyledPostTitle> {item.title} </StyledPostTitle>
        </StyledCardWrapper>
    )
}

export default Card
