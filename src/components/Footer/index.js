import React from 'react';
import { Container, View, ImageView, Text, Image } from './styles';

export default function Footer() {
    return (
        <Container>
            <View>
                <Text>Realização:</Text>
                <Image height='100px' width='100px' source={require('../../assets/logo_ipf.png')} />
            </View>
            <View>
                <Text>Desenvolvido por:</Text>
                <ImageView>
                    <Image height='100px' width='40px' source={require('../../assets/logo_ufape.png')} />
                    <Image height='40px' width='100px' source={require('../../assets/logo_lmts.png')} />
                </ImageView>
            </View>
        </Container>
    );
}