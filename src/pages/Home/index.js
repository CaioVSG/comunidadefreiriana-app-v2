import React from 'react';
import { Container, Buttons, Image, Text } from './styles';
import { BackHandler } from "react-native";
import HomeButton from '../../components/HomeButton';
import Footer from '../../components/Footer';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    function handleNavigateToDiscover() {
        navigation.navigate('Discover');
    }

    function handleNavigateToMap() {
        navigation.navigate('Map');
    }

    function handleNavigateToSelectArea() {
        navigation.navigate('SelectArea');
    }

    function handleExitApp() {
        BackHandler.exitApp();
    }

    return (
        <Container>
            <Image source={require('../../assets/logo_mapeamento.png')} />
            <Text>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
            e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                de tipos e os embaralhou para fazer um livro de modelos de tipos.</Text>
            <Buttons>
                <HomeButton route={handleNavigateToDiscover} color={'#4cb4d4'} icon={'bezier-curve'} text={'Conheça Paulo Freire'} />
                <HomeButton route={handleNavigateToMap} color={'#7cc44c'} icon={'map-marked-alt'} text={'Mapa'} />
                <HomeButton route={handleNavigateToSelectArea} color={'#fbc30f'} icon={'list-alt'} text={'Solicitar cadastro'} />
                <HomeButton route={handleExitApp} color={'#f38424'} icon={'sign-out-alt'} text={'Sair do aplicativo'} />
            </Buttons>
            <Footer />
        </Container>
    );
}