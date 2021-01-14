import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';


import logo from '../../assets/logo.png';

import bell from '../../assets/bell.png';

function Header({lateCount,clickNotification}) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">Inicio</Link>
        <span className="dividir"/>
        <Link to="/task">Nova Tarefa</Link>
        <span className="dividir"/>
        <Link to="/qrcode">Sincronizar Celular</Link>
        <span className="dividir"/>
        <button onClick={clickNotification} id="notification">
          <img src={bell} alt="notificação"/>
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
