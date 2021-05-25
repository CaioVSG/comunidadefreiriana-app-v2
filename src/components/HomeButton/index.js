import React from 'react';
import { Button, Text } from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function HomeButton(props) {
    return (
        <Button onPress={props.route} color={props.color}>
            <FontAwesome5 name={props.icon} size={22} color='white' />
            <Text>{props.text}</Text>
        </Button>
    );
}