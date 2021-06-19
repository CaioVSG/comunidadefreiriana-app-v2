import React from 'react';
import { Button, Text } from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function DiscoverButton(props) {
    return (
        <Button onPress={props.route}>
            <FontAwesome5 name={props.icon} size={50} color='#f04434' />
            <Text>{props.text}</Text>
        </Button>
    );
}