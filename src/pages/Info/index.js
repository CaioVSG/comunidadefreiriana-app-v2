import React from 'react';
import { Container, Image, Institution, ScrollView, Icons, Divider, View, Text, TextMargin } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Info() {
    return (
        <Container>
            <Image source={require('../../assets/paulo_freire.jpg')} />
            <Institution>
                <TextMargin margin='0 0 20px 0' size='22px' color='#000000'>Universidade Federal do Agreste de Pernambuco</TextMargin>
                <Divider />
            </Institution>
            <ScrollView>
                <Icons>
                    <FontAwesome5 name='phone' size={14} color='#000000' />
                    <TextMargin margin='0 0 0 5px' size='14px' color='#616161'>(81) 3764-5505</TextMargin>
                </Icons>
                <Icons>
                    <FontAwesome5 name='envelope' size={14} color='#000000' />
                    <TextMargin margin='0 0 0 5px' size='14px' color='#616161'>ufape@exemplo.edu.br</TextMargin>
                </Icons>
                <View>
                    <Text size='14px' color='#000000'>Endereço</Text>
                    <Text size='14px' color='#616161'>Avenida Bom Pastor, s/n</Text>
                </View>
                <Divider />
                <View>
                    <Text size='14px' color='#000000'>Data da realização</Text>
                    <Text size='14px' color='#616161'>01/01/2020</Text>
                </View>
                <View>
                    <Text size='14px' color='#000000'>Nome da realização</Text>
                    <Text size='14px' color='#616161'>Exemplo</Text>
                </View>
                <View>
                    <Text size='14px' color='#000000'>Mais informações</Text>
                    <Text size='14px' color='#616161'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
                    e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                    de tipos e os embaralhou para fazer um livro de modelos de tipos.</Text>
                    <Text size='14px' color='#616161'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
                    e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
                    de tipos e os embaralhou para fazer um livro de modelos de tipos.</Text>
                </View>
            </ScrollView>
        </Container>
    );
}