import React from 'react';

import * as S from './styles';
//nossos componentes 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
function Home() {
  return (
      <S.Container>
        <Header/>
      <S.FilterArea>
           <FilterCard/>
           <FilterCard/>
           <FilterCard/>
           <FilterCard/>
           <FilterCard/>
      </S.FilterArea>
        <Footer/></S.Container>
  );
}

export default Home;
