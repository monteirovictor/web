import React,{useState,useEffect} from 'react';
import * as S from './styles';
//nossos componentes 
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    return (
    <S.Container>
        <Header>
            <S.Content>
                <h1>Capture o QRCODE</h1>
                <S.QrCodeArea></S.QrCodeArea>
                <p>Suas atividades serão sincronizadas com a do celular</p>
            </S.Content>
            <Footer/>
        </Header>
    </S.Container>)
}

export default QrCode;
