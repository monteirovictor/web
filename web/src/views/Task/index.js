import React,{useState,useEffect} from 'react';

import api from '../../services/api';

import * as S from './styles';
//nossos componentes 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

function Task() {

const [lateCount,setLateCount]=useState();
const[type,setType]=useState();

  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response=>{
        setLateCount(response.data.length)
    });
  }

  

    useEffect(()=>{
      
      lateVerify();
    },[])

    
  return (
      <S.Container>
        <Header lateCount={lateCount}/>


        <S.Form>
            <S.TypeIcons>
            {
                TypeIcons.map((icon,index)=>(

                  index>0 && 
                  
                  <button typ="button" onClick={()=>setType(index)} >
                  <img src={icon} alt="Tipo de Tarefa" 
                  className={type && type !== index && 'inative'}/>
                  </button>
                ))
            }
            </S.TypeIcons>
            <S.Input>
              <span>Título</span>
              <input type="text" placeholder="Título da Tarefa"/>
            </S.Input>

            <S.TextArea>
              <span>Título</span>
              <textarea rows={5} placeholder="Detalhes da Tarefa"/>
            </S.TextArea>
         </S.Form>
        <Footer/>
        </S.Container>
  );
}

export default Task;
