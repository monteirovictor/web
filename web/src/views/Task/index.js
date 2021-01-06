import React,{useState,useEffect} from 'react';

import api from '../../services/api';

import * as S from './styles';
//nossos componentes 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

function Task() {

const [lateCount,setLateCount]=useState();
 

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
                TypeIcons()
            }
            </S.TypeIcons>

         </S.Form>
        <Footer/>
        </S.Container>
  );
}

export default Task;
