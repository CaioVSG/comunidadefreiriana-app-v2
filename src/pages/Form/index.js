import React, { useState } from 'react';
import { Container, ScrollView, Text, TextInput, TextArea, ImageContainer, ImageView, ImageInput, Button, ButtonText } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Form() {
    const [images, setImages] = useState([]);

    async function handleSelectImages() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            alert('É necessário solicitar o acesso à fotos do seu celular antes!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            quality: 0.5,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (result.cancelled) {
            return;
        }

        setImages([...images, result.uri]);
    }

    return (
        <Container>
            <ScrollView>
                <Text>Nome</Text>
                <TextInput multiline />
                <Text>Telefone (com DDD)</Text>
                <TextInput />
                <Text>E-mail</Text>
                <TextInput />
                <Text>Cidade</Text>
                <TextInput />
                <Text>Estado</Text>
                <TextInput />
                <Text>Data da realização</Text>
                <TextInput />
                <Text>Nome da realização</Text>
                <TextInput multiline />
                <Text>Mais informações</Text>
                <TextArea multiline />
                <Text>Adicionar fotos</Text>
                <ImageContainer>
                    {images.map(image => {
                        return (
                            <ImageView
                                key={image}
                                source={{ uri: image }}
                            />
                        );
                    })}
                </ImageContainer>
                <ImageInput onPress={handleSelectImages}>
                    <FontAwesome5 name='plus' size={24} color='#999999' />
                </ImageInput>
                <Button>
                    <ButtonText>Enviar</ButtonText>
                </Button>
            </ScrollView>
        </Container>
    );
}