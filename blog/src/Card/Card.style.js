import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
width: 18rem; 
height: 24rem;
border: 0.0625rem solid rgba(0,0,0,0.1);
border-radius: 5px;
box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 5px;
transition: 2s;

 &:hover {
     transform: scale(1.2,1);
     box-shadow: 3px 2px 1px aqua;
     cursor:pointer
 }
`

export const StyledPostImage = styled.img`
  width: 75%;
  height: 75%;
  border: 3px solid #fff;
  margin: 5px;
  font-size: 0.7rem;
  color: blue;
  border-radius:10px`

export const StyledPostTitle = styled.h4`
 color: brown;
 text-align:center
`