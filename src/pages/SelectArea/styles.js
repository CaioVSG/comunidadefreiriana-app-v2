import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Footer = styled.View`
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 32px;
    z-index: 1;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 5px;
    padding: 12px;
    elevation: 3;
    border-radius: 5px;
    background-color: #4cb4d4;
`;

export const Text = styled.Text`
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
    color: #ffffff;
    font-size: 16px;
`;

export const MapTextContainer = styled.View`
    flex: 1;
    padding-horizontal: 20px;
    justify-content: center;
    align-items: center;
`;

export const MapText = styled.Text`
    color: #000000;
    font-size: 16px;
    font-weight: bold;
`;