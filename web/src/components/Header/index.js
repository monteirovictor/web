import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <a href="">Inicio</a>
        <a href="">Nova Tarefa</a>
        <a href="">Sincronizar Celular</a>
       
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
