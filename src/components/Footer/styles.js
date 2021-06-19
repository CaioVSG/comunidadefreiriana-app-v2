import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 25px;
    justify-content: center;
`;

export const View = styled.View`
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
`;

export const ImageView = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 11px;
    margin-bottom: 5px;
`;

export const Image = styled.Image`
    height: ${props => props.height};
    width: ${props => props.width};
    margin-left: 5px;
    margin-right: 5px;
`;