import React from 'react';
import { View, Image, Text } from './styles';
import HomeButton from '../../components/HomeButton';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <View>
            <Image source={require('../../assets/logo_mapeamento_2.png')} />
            <Text>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
            e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os
                embaralhou para fazer um livro de modelos de tipos.</Text>
            <HomeButton color={'#4cb4d4'} icon={'bezier-curve'} text={'Conheça Paulo Freire'} />
            <HomeButton color={'#7cc44c'} icon={'map-marked-alt'} text={'Mapa'} />
            <HomeButton color={'#fbc30f'} icon={'list-alt'} text={'Solicitar cadastro'} />
            <HomeButton color={'#f38424'} icon={'sign-out-alt'} text={'Sair do aplicativo'} />
            <Footer />
        </View>
    );
}