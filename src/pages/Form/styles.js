import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 5px;
`;

export const ScrollView = styled.ScrollView`
    width: 100%;
`;

export const PickerBorder = styled.View`
    border-radius: 3px;
    border-color: #999999;
    border-width: 1px;
    margin: 10px;
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

export const ImageInput = styled.TouchableOpacity`
    border-style: dashed;
    border-color: #999999;
    border-width: 1px;
    border-radius: 3px;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-horizontal: 10px;
`;

export const ImageContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
    margin-horizontal: 10px;
    align-items: center;
    justify-content: center;
`;

export const ImageView = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 3px;
    margin-bottom: 10px;
    margin-right: 10px;
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

export const ButtonTextImage = styled.Text`
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
    color: #999999;
    font-size: 16px;
`;

export const DateInput = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border-color: #999999;
    border-width: 1px;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
`;

export const DateText = styled.Text`
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
    color: #000000;
    font-size: 16px;
`;