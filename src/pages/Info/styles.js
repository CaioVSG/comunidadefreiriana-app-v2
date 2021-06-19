import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 5px;
`;

export const Image = styled.Image`
    height: 200px;
    width: 100%;
    resize-mode: cover;
    z-index: -1;
`;

export const Institution = styled.View`
    position: absolute;
    width: 100%;
    margin-top: 180px;
    padding: 20px;
    border-radius: 15px;
    background-color: #ffffff;
    z-index: 1;
`;

export const ScrollView = styled.ScrollView`
    width: 100%;
    height: 100%;
    margin-top: 80px;
    padding: 20px;
    z-index: -1;
`;

export const Icons = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`;

export const Divider = styled.View`
    border-bottom-color: #616161;
    border-bottom-width: 0.5px;
`;

export const View = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
`;

export const Text = styled.Text`
    font-size: ${props => props.size};
    color: ${props => props.color};
`;

export const TextMargin = styled.Text`
    font-size: ${props => props.size};
    color: ${props => props.color};
    margin: ${props => props.margin};
`;