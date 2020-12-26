import styled from 'styled-components';

export const Container =  styled.div`
width:100%;
height:70px;
background:#20265F;
border-bottom: 5px solid #EE6B26;
display:flex;
`;

export const LeftSide =  styled.div`

width:50%;
height:50px;
display:flex;
align-items:center;
padding-left:5px;

img{
    width:100px;
    height:40px;
}

`;

export const RightSide =  styled.div`

width:50%;
height:50px;
display:flex;
align-items:center;
justify-content:flex-end;

a{
    color:#fff;
    font-weight:bold;
    text-decoration:none;
    margin:0 10px;
    &:hover{
        color:#EE6B26;
    }
}


`;