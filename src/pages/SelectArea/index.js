import React, { useState, useEffect } from 'react';
import { Container, MapTextContainer, MapText, Footer, Button, Text } from './styles';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import mapMarker from '../../assets/icone_marker.png';

export default function SelectArea({ navigation }) {
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [currentLatitude, setLatitude] = useState(0);
    const [currentLongitude, setLongitude] = useState(0);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            try {
                const location = await Location.getCurrentPositionAsync({ accuracy: 1 });
                setLatitude(location.coords.latitude);
                setLongitude(location.coords.longitude);
                setIsLoading(false);
            } catch (err) {
                console.log("Couldn't get locations" + err);
                recallCurrentLocationFunction();
            }
        })();
    }, []);

    getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return;
        }

        try {
            const location = await Location.getCurrentPositionAsync({ accuracy: 1 });
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
            setIsLoading(false);
        } catch (err) {
            console.log("Couldn't get locations" + err);
            recallCurrentLocationFunction();
        }
    };

    recallCurrentLocationFunction = () => {
        getCurrentLocation();
    };

    function handleNavigateToForm() {
        navigation.navigate('Form', { latitude: position.latitude, longitude: position.longitude });
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
                    onPress={(e) => { setPosition(e.nativeEvent.coordinate) }}
                >
                    {position.latitude != 0 && (
                        <Marker
                            icon={mapMarker}
                            coordinate={{
                                latitude: position.latitude,
                                longitude: position.longitude
                            }}
                        >
                        </Marker>
                    )}
                </MapView>
            )}
            {position.latitude != 0 && (
                <Footer>
                    <Button onPress={handleNavigateToForm}>
                        <Text>Próximo passo</Text>
                    </Button>
                </Footer>
            )}
        </Container>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})