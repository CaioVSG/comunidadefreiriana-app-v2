import React, { useState, useEffect } from 'react';
import { Container, MapTextContainer, MapText, CalloutContainer, CalloutText, Footer, Button, Text } from './styles';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import api from '../../services/api';
import { FontAwesome5 } from '@expo/vector-icons';
import mapMarker from '../../assets/icone_marker.png';

export default function Map({ navigation }) {
    const [institutions, setInstitutions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentLatitude, setLatitude] = useState(0);
    const [currentLongitude, setLongitude] = useState(0);

    useEffect(() => {
        api.get('instituicao/index').then(response => {
            setInstitutions(response.data.data);
        });
    }, [setInstitutions]);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            const location = await Location.getCurrentPositionAsync({ accuracy: 6 });
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
            setIsLoading(false);
        })();
    }, []);

    function handleNavigateToInfo(id) {
        navigation.navigate('Info', { id: id });
    }

    function handleNavigateToSelectArea() {
        navigation.navigate('SelectArea');
    }

    return (
        <Container>
            {isLoading ? (
                <MapTextContainer>
                    <MapText>Carregando mapa...</MapText>
                </MapTextContainer>
            ) : (
                <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={{
                    latitude: currentLatitude,
                    longitude: currentLongitude,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0143
                }}
                >
                    {institutions.map(institution => {
                        return (
                            <Marker
                                key={institution.id}
                                icon={mapMarker}
                                coordinate={{
                                    latitude: parseFloat(institution.latitude),
                                    longitude: parseFloat(institution.longitude)
                                }}
                            >
                                <Callout tooltip onPress={() => handleNavigateToInfo(institution.id)}>
                                    <CalloutContainer>
                                        <CalloutText>{institution.nome}</CalloutText>
                                    </CalloutContainer>
                                </Callout>
                            </Marker>
                        )
                    })}
                </MapView>
            )}
            <Footer>
                <Button onPress={handleNavigateToSelectArea}>
                    <FontAwesome5 name='plus' size={22} color='white' />
                    <Text>Instituição</Text>
                </Button>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})