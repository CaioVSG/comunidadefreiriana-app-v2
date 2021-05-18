import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 5px;
`;

export const ScrollView = styled.ScrollView`
    width: 100%;
`;

export const TextInput = styled.TextInput`
    color: #000000;
    margin: 10px;
    border-radius: 3px;
    border-color: #999999;
    border-width: 1px;
    padding: 8px;
`;

export const TextArea = styled.TextInput`
    color: #000000;
    margin: 10px;
    border-radius: 3px;
    border-color: #999999;
    border-width: 1px;
    padding: 8px;
    height: 100px;
    text-align-vertical: top;
`;

export const Text = styled.Text`
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    elevation: 3;
    border-radius: 5px;
    background-color: #7cc44c;
`;

export const ButtonText = styled.Text`
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
    color: #ffffff;
    font-size: 16px;
`;