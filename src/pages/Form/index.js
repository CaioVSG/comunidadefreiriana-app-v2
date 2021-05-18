import React from 'react';
import { Container, ScrollView, Text, TextInput, TextArea, Button, ButtonText } from './styles';

export default function Form() {
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
                <Button>
                    <ButtonText>Enviar</ButtonText>
                </Button>
            </ScrollView>
        </Container>
    );
}