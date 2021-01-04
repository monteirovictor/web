import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';

import bell from '../../assets/bell.png';

function Header({lateCount}) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <a href="">Inicio</a>
        <span className="dividir"/>
        <a href="">Nova Tarefa</a>
        <span className="dividir"/>
        <a href="">Sincronizar Celular</a>
        <span className="dividir"/>
        <a href="" id="notification">
          <img src={bell} alt="notificacão"/>
          <span>{lateCount}</span>
        </a>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
