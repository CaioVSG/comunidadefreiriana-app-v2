import React from 'react';
import { Container, ScrollView, View, Buttons, Button, ButtonView, Text, Image } from './styles';
import { Linking } from 'react-native';
import DiscoverButton from '../../components/DiscoverButton';
import Footer from '../../components/Footer';

export default function Discover() {
    return (
        <Container>
            <ScrollView>
                <View>
                    <Buttons>
                        <Button onPress={() => { Linking.openURL('http://memorial.paulofreire.org/conheca-paulo-freire.html') }}>
                            <ButtonView>
                                <Text margin='80px'>Conheça</Text>
                                <Text margin='0px'>Paulo Freire</Text>
                            </ButtonView>
                            <Image source={require('../../assets/paulo_freire.jpg')} />
                        </Button>
                        <DiscoverButton route={() => { Linking.openURL('http://memorial.paulofreire.org/Linha_do_tempo/linha_do_tempo.html') }} icon='history' text='Linha do tempo' />
                    </Buttons>
                    <Buttons>
                        <DiscoverButton route={() => { Linking.openURL('http://acervo.paulofreire.org:8080/xmlui/') }} icon='photo-video' text='Acervo Digital' />
                        <DiscoverButton route={() => { Linking.openURL('http://biblioteca.paulofreire.org/') }} icon='book' text='Biblioteca' />
                    </Buttons>
                    <Buttons>
                        <DiscoverButton route={() => { Linking.openURL('http://glossario.paulofreire.org/') }} icon='sort-alpha-down' text='Glossário' />
                        <DiscoverButton route={() => { Linking.openURL('http://memorial.paulofreire.org/') }} icon='phone-alt' text='Contato' />
                    </Buttons>
                </View>
                <Footer />
            </ScrollView>
        </Container>
    );
}