import React from 'react';
import * as S from './styles';
import iconDefault from '../../assets/default.png'

function TaskCard(){
    return  (
        <S.Container>
        <S.TopCard><img src={iconDefault} alt="icone da tarefa"/></S.TopCard>
        <h3>Futebool com a malandragem</h3>
        <S.BottomCard>
          <strong>17/10/2020</strong>
          <span>10:00</span>
        </S.BottomCard>
        </S.Container>
      );
}

export default TaskCard;