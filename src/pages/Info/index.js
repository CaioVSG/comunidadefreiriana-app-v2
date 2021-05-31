import React, { useState, useEffect } from 'react';
import { Container, Image, Institution, ScrollView, Icons, Divider, View, Text, TextMargin } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import api from '../../services/api';

export default function Info({ route }) {
    const [institution, setInstitution] = useState({});
    const [images, setImages] = useState([]);
    const { id } = route.params;

    useEffect(() => {
        api.get(`/instituicao/show/${id}`).then(response => {
            setInstitution(response.data.data);
            setImages(response.data.data.images[0]);
        })
    }, [id]);

    return (
        <Container>
            <Image source={{ uri: `http://sistemas.ufape.edu.br/comunidadefreiriana/${images.path}` }} />
            <Institution>
                <TextMargin margin='0 0 20px 0' size='22px' color='#000000'>{institution.nome}</TextMargin>
                <Divider />
            </Institution>
            <ScrollView>
                <Icons>
                    <FontAwesome5 name='phone' size={14} color='#000000' />
                    <TextMargin margin='0 0 0 5px' size='14px' color='#616161'>{institution.telefone}</TextMargin>
                </Icons>
                <Icons>
                    <FontAwesome5 name='envelope' size={14} color='#000000' />
                    <TextMargin margin='0 0 0 5px' size='14px' color='#616161'>{institution.email}</TextMargin>
                </Icons>
                <View>
                    <Text size='14px' color='#000000'>Endereço</Text>
                    <Text size='14px' color='#616161'>{institution.endereco}</Text>
                </View>
                <Divider />
                <View>
                    <Text size='14px' color='#000000'>Data da realização</Text>
                    <Text size='14px' color='#616161'>{institution.datafundacao}</Text>
                </View>
                <View>
                    <Text size='14px' color='#000000'>Nome da realização</Text>
                    <Text size='14px' color='#616161'>{institution.NomedaRealizacao}</Text>
                </View>
                <View>
                    <Text size='14px' color='#000000'>Nome da realização</Text>
                    <Text size='14px' color='#616161'>{institution.coordenador}</Text>
                </View>
                <View>
                    <Text size='14px' color='#000000'>Mais informações</Text>
                    <TextMargin margin='0 0 20px 0' size='14px' color='#616161'>{institution.info}</TextMargin>
                </View>
            </ScrollView>
        </Container>
    );
}