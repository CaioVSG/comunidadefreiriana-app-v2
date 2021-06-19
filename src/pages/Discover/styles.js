import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`;

export const ScrollView = styled.ScrollView`
    width: 100%;
`;

export const View = styled.View`
    align-items: center;
    margin-bottom: 10px;
`;

export const Buttons = styled.View`
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin: 10px;
    elevation: 3;
    border-radius: 5px;
    background-color: #ffffff;
    height: 150px;
    width: 40%;
`;

export const Image = styled.Image`
    height: 100%;
    width: 100%;
    resize-mode: cover;
    border-radius: 5px;
`;

export const ButtonView = styled.View`
    position: absolute;
    background-color: transparent;
    z-index: 1;
`;

export const Text = styled.Text`
    padding-horizontal: 5px;
    margin-top: ${props => props.margin};
    text-align: center;
    background-color: #616161;
    color: #ffffff;
    font-size: 16px;
`;