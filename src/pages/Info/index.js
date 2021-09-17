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

    function validatePhone() {
        if (institution.telefone === null) {
            return false;
        } else {
            return true;
        }
    }

    function validateInfo() {
        if (institution.info === null) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <Container>
            <Image source={{ uri: `http://sistemas.ufape.edu.br/comunidadefreiriana/storage/${images.path}` }} />
            <Institution>
                <TextMargin margin='0 0 20px 0' size='22px' color='#000000'>{institution.nome}</TextMargin>
                <Divider />
            </Institution>
            <ScrollView>
                <Icons>
                    <FontAwesome5 name='phone' size={14} color='#000000' />
                    {validatePhone() ? (
                        <TextMargin margin='0 0 0 5px' size='14px' color='#616161'>{institution.telefone}</TextMargin>
                    ) : (
                        <TextMargin margin='0 0 0 5px' size='14px' color='#616161'>Não informado</TextMargin>
                    )
                    }
                </Icons>
                <Icons>
                    <FontAwesome5 name='envelope' size={14} color='#000000' />
                    <TextMargin margin='0 0 0 5px' size='14px' color='#616161'>{institution.email}</TextMargin>
                </Icons>
                <View>
                    <Text size='14px' color='#000000'>Estado</Text>
                    <Text size='14px' color='#616161'>{institution.estado}</Text>
                </View>
                <View>
                    <Text size='14px' color='#000000'>Cidade</Text>
                    <Text size='14px' color='#616161'>{institution.cidade}</Text>
                </View>
                <View>
                    <Text size='14px' color='#000000'>Endereço</Text>
                    <Text size='14px' color='#616161'>{institution.endereco}</Text>
                </View>
                <Divider />
                <View>
                    <Text size='14px' color='#000000'>Data da fundação</Text>
                    <Text size='14px' color='#616161'>{institution.datafundacao}</Text>
                </View>
                <View>
                    <Text size='14px' color='#000000'>Categoria</Text>
                    <Text size='14px' color='#616161'>{institution.categoria}</Text>
                </View>
                <View>
                    <Text size='14px' color='#000000'>Nome do coordenador</Text>
                    <Text size='14px' color='#616161'>{institution.coordenador}</Text>
                </View>
                <View>
                    <Text size='14px' color='#000000'>Mais informações</Text>
                    {validateInfo() ? (
                        <TextMargin margin='0 0 20px 0' size='14px' color='#616161'>{institution.info}</TextMargin>
                    ) : (
                        <TextMargin margin='0 0 20px 0' size='14px' color='#616161'>Sem mais informações</TextMargin>
                    )}
                </View>
            </ScrollView>
        </Container>
    );
}