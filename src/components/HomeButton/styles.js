import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 5px;
    padding: 12px;
    elevation: 3;
    border-radius: 5px;
    background-color: ${props => props.color};
`;

export const Text = styled.Text`
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
    color: #ffffff;
    font-size: 16px;
`;