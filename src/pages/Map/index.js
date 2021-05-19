import React from 'react';
import { Container, MapView } from './styles';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarker from '../../assets/icone_marker.png';

export default function Map() {
    return (
        <Container>
            <MapView provider={PROVIDER_GOOGLE} initialRegion={{
                latitude: -27.209205,
                logintude: -49.6401092,
                latitudeDelta: 0.008,
                logintudeDelta: 0.008
            }}
            >
                <Marker
                    icon={mapMarker}
                    coordinate={{
                        latitude: -27.209205,
                        logintude: -49.6401092
                    }}
                >
                </Marker>
            </MapView>
        </Container>
    );
}