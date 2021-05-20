import React from 'react';
import { Container } from './styles';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarker from '../../assets/icone_marker.png';

export default function Map() {
    return (
        <Container>
            <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={{
                latitude: -27.209205,
                longitude: -49.6401092,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
            }}
            >
                <Marker
                    icon={mapMarker}
                    coordinate={{
                        latitude: -27.209205,
                        longitude: -49.6401092,
                    }}
                >
                </Marker>
            </MapView>
        </Container>
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})