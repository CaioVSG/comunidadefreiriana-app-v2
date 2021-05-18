import React from 'react';
import { Container, View, Buttons } from './styles';
import DiscoverButton from '../../components/DiscoverButton';
import Footer from '../../components/Footer';

export default function Discover() {
    return (
        <Container>
            <View>
                <Buttons>
                    <DiscoverButton icon='history' text='Linha do tempo' />
                    <DiscoverButton icon='history' text='Linha do tempo' />
                </Buttons>
                <Buttons>
                    <DiscoverButton icon='photo-video' text='Acervo Digital' />
                    <DiscoverButton icon='book' text='Biblioteca' />
                </Buttons>
                <Buttons>
                    <DiscoverButton icon='sort-alpha-down' text='Glossário' />
                    <DiscoverButton icon='phone-alt' text='Contato' />
                </Buttons>
            </View>
            <Footer />
        </Container>
    );
}