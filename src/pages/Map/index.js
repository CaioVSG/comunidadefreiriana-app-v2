import React, { useState, useEffect } from 'react';
import { Container, View, FlatList, MapTextContainer, MapText, Image, InstitutionDetails, InstitutionDetailsView, Footer, Button, IconView, Text, ItemText, ItemTextDetails, Divider } from './styles';
import { StyleSheet, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import api from '../../services/api';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import mapMarker from '../../assets/icone_marker.png';

export default function Map({ navigation }) {
    const [search, setSearch] = useState('');
    const [temporaryInstitution, setTemporaryInstitution] = useState({});
    const [images, setImages] = useState([]);
    const [showTemporaryInstitution, setShowTemporaryInstitution] = useState(false);
    const [institutions, setInstitutions] = useState([]);
    const [filteredInstitutions, setFilteredInstitutions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentLatitude, setLatitude] = useState(0);
    const [currentLongitude, setLongitude] = useState(0);

    useEffect(() => {
        api.get('instituicao/aprovados').then(response => {
            setInstitutions(response.data.data);
            setFilteredInstitutions(response.data.data);
        });
    }, [setInstitutions]);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = institutions.filter(function (item) {
                const itemData = item.nome
                    ? item.nome.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredInstitutions(newData);
            setSearch(text);
        } else {
            setFilteredInstitutions(institutions);
            setSearch(text);
        }
    };

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

    function handleNavigateToInfo(id) {
        navigation.navigate('Info', { id: id });
    }

    function handleNavigateToSelectArea() {
        navigation.navigate('SelectArea');
    }

    const ItemView = ({ item }) => {
        return (
            <ItemText size='14px' onPress={() => GetItem(item)}>
                {item.nome.toUpperCase()}
            </ItemText>
        );
    };

    const DividerView = () => {
        return (
            <Divider />
        );
    };

    async function GetItem(item) {
        setSearch('');
        setTemporaryInstitution(item);
        setShowTemporaryInstitution(true);

        await api.get(`/instituicao/show/${item.id}`).then(response => {
            setImages(response.data.data.images[0]);
        });
    };

    async function GetItemId(id) {
        setSearch('');

        await api.get(`/instituicao/show/${id}`).then(response => {
            setTemporaryInstitution(response.data.data);
            setImages(response.data.data.images[0]);
        });

        setShowTemporaryInstitution(true);
    };

    function SetItem() {
        setSearch('');
        setTemporaryInstitution({});
        setImages([]);
        setShowTemporaryInstitution(false);
    };

    return (
        <Container>
            {isLoading ? (
                <MapTextContainer>
                    <MapText>Carregando mapa...</MapText>
                </MapTextContainer>
            ) : (
                <View>
                    <SearchBar
                        containerStyle={{
                            padding: 5,
                            backgroundColor: 'transparent',
                            borderBottomColor: 'transparent',
                            borderTopColor: 'transparent'
                        }}
                        inputContainerStyle={{
                            backgroundColor: 'transparent',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: '#999999',
                        }}
                        inputStyle={{
                            backgroundColor: 'transparent',
                            color: '#212121'
                        }}
                        searchIcon={{
                            color: '#ffffff',
                            size: 24,
                            containerStyle: {
                                borderRadius: 5,
                                padding: 5,
                                backgroundColor: '#f04434'
                            }
                        }}
                        onChangeText={(text) => searchFilterFunction(text)}
                        onClear={(text) => searchFilterFunction('')}
                        placeholder='Pesquisar'
                        placeholderTextColor='#999999'
                        value={search}
                    />
                    {search ? (
                        <FlatList
                            data={filteredInstitutions}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={DividerView}
                            renderItem={ItemView}
                        />
                    ) : (
                        <></>
                    )}
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
                                    onPress={(e) => { e.stopPropagation(); GetItemId(institution.id); }}
                                />
                            );
                        })}
                    </MapView>
                </View>
            )}
            <Footer>
                <Button color='#4cb4d4' onPress={handleNavigateToSelectArea}>
                    <FontAwesome5 name='plus' size={22} color='white' />
                    <Text>Instituição</Text>
                </Button>
            </Footer>
            {showTemporaryInstitution ? (
                <InstitutionDetails>
                    <IconView>
                        <AntDesign onPress={() => SetItem()} name='close' size={16} color='#ffffff' />
                    </IconView>
                    <Image source={{ uri: `http://sistemas.ufape.edu.br/comunidadefreiriana/storage/${images.path}` }} />
                    <ItemText size='24px'>{temporaryInstitution.nome}</ItemText>
                    <Divider />
                    <InstitutionDetailsView>
                        <View>
                            <ItemTextDetails>{`${temporaryInstitution.cidade} - ${temporaryInstitution.estado}`}</ItemTextDetails>
                            <ItemTextDetails>{temporaryInstitution.cep}</ItemTextDetails>
                        </View>
                        <Button color='#4cb4d4' onPress={() => handleNavigateToInfo(temporaryInstitution.id)}>
                            <Text>Mais info</Text>
                        </Button>
                    </InstitutionDetailsView>
                </InstitutionDetails>
            ) : (
                <>
                </>
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