import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 5px;
`;

export const MapView = MapView`
    width: 100%;
    height: 100%;
`;