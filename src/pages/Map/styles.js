import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const View = styled.View`
`;

export const IconView = styled.View`
    position: absolute;
    background-color: #4cb4d4;
    padding: 3px;
    border-radius: 5px;
    top: 8px;
    right: 10px;
    z-index: 4;
`;

export const FlatList = styled.FlatList`
    position: absolute;
    padding-bottom: 5px;
    border-bottom-width: 0.5px;
    border-bottom-color: #616161;
    width: 100%;
    top: 60px;
    background-color: #ffffff;
    z-index: 2;
`;

export const InstitutionDetails = styled.View`
    position: absolute;
    background-color: #ffffff;
    padding: 5px;
    border-radius: 5px;
    left: 5px;
    right: 5px;
    bottom: 0px;
    elevation: 3;
    z-index: 3;
`;

export const InstitutionDetailsView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Footer = styled.View`
    position: absolute;
    right: 24px;
    bottom: 32px;
    z-index: 1;
`;

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

export const ItemText = styled.Text`
    padding: 10px;
    margin-left: 5px;
    margin-right: 5px;
    color: #212121;
    font-size: ${props => props.size};
`;

export const ItemTextDetails = styled.Text`
    padding-horizontal: 10px;
    padding-vertical: 3px;
    margin-left: 5px;
    margin-right: 5px;
    color: #212121;
    font-size: 16px;
`;

export const Divider = styled.View`
    border-bottom-color: #616161;
    border-bottom-width: 0.5px;
    padding-bottom: 5px;
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

export const Image = styled.Image`
    height: 100px;
    width: 100%;
    resize-mode: cover;
    border-radius: 5px;
`;