import styled from 'styled-components';

export const Container =  styled.div`
width:240px;
height:60px;
background:${props=>props.actived?'#ee6b26':'#20265F'};
display:flex;
flex-direction:column;
justify-content:space-around;
padding:5px;
border-radius:10px;
cursor: pointer;

img{
    width:25px;
    height: 25px;
}

span{
    color:#fff;
    font-weight:bold;
    align-self:flex-end;
    font-size:18px;
}
&:hover{
    background:#EE6B26;
}
`;


