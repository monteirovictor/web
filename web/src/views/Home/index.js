import React,{useState,useEffect} from 'react';

import api from '../../services/api';

import * as S from './styles';
//nossos componentes 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';
function Home() {
  const [filterActived,setFilterActived]=useState('all');

  const [tasks,setTasks]=useState([]);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/00:19:B9:FB:E2:58`)
    .then(response=>{
        setTasks(response.data)
    });
  }
    useEffect(()=>{
      loadTasks();
    },[filterActived])
  return (
      <S.Container>
        <Header/>
      <S.FilterArea>
        <button type="button" onClick={()=>setFilterActived("all")}><FilterCard title="Todos" actived={filterActived==='all'}/></button>
        <button type="button" onClick={()=>setFilterActived("today")}><FilterCard title="Hoje" actived={filterActived==='today'}/></button>
        <button type="button" onClick={()=>setFilterActived("week")}><FilterCard title="Semana" actived={filterActived==='week'} /></button>
        <button type="button" onClick={()=>setFilterActived("month")}><FilterCard title="Mês" actived={filterActived==='month'} /></button>
        <button type="button" onClick={()=>setFilterActived("year")}><FilterCard title="Ano" actived={filterActived==='year'} /></button>
      </S.FilterArea>
      <S.Title><h3>Tarefas</h3></S.Title>
      <S.Content>
        {
          tasks.map(t=>(
            <TaskCard/>
            ))
        }
       
      </S.Content>
        <Footer/></S.Container>
  );
}

export default Home;
