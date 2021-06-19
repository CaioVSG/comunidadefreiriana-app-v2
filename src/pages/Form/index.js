import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Container, ScrollView, Text, TextInput, PickerBorder, DateInput, DateText, TextArea, ImageContainer, ImageView, ImageInput, Button, ButtonText, ButtonTextImage } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

export default function Form({ route }) {
    const [name, setName] = useState('');
    const [categoria, setCategoria] = useState('');
    const [coordinator, setCoordinator] = useState('');
    const [country, setCountry] = useState('');
    const [cep, setCep] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [site, setSite] = useState('');
    const [info, setInfo] = useState('');
    const [date, setDate] = useState(new Date(2021, 1, 1));
    const [show, setShow] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [images, setImages] = useState([]);

    const { latitude, longitude } = route.params;

    const navigation = useNavigation();

    function handleNavigateToHome() {
        navigation.navigate('Home');
    }

    function validateFields() {
        if (name === '' ||
            categoria === '' ||
            coordinator === '' ||
            country === '' ||
            cep === '' ||
            state === '' ||
            city === '' ||
            address === '' ||
            email === '') {
            return false;
        } else {
            return true;
        }
    }

    function validateImages() {
        if (showImage === false) {
            return false;
        } else {
            return true;
        }
    }

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    function onChangeCountry(text) {
        setCountry(text.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]/g, ''));
    }

    function onChangeCep(text) {
        setCep(text.replace(/[^0-9]/g, ''));
    }

    function onChangeState(text) {
        setState(text.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s]/g, ''));
    }

    function onChangeCity(text) {
        setCity(text.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9\s]/g, ''));
    }

    function onChangeAddress(text) {
        setAddress(text.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,0-9\s]/g, ''));
    }

    function onChangePhone(text) {
        setPhone(text.replace(/[^0-9]/g, ''));
    }

    async function handleSelectImages() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            alert('É necessário solicitar o acesso à fotos do seu celular antes!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (result.cancelled) {
            return;
        }

        setImages([result.uri]);
        setShowImage(true);
    }

    function handleRemoveImages() {
        setImages([]);
        setShowImage(false);
    }

    async function handleCreateInstitution() {
        if (validateFields() === false || validateImages() === false) {
            Alert.alert('Por favor, preencha todos os campos marcados com (*)!');
            return false;
        }

        if (latitude != '') {
            const data = new FormData();

            data.append('nome', name);
            data.append('categoria', categoria);
            data.append('pais', country);
            data.append('estado', state);
            data.append('cidade', city);
            data.append('endereco', address);
            data.append('cep', cep);
            data.append('telefone', phone);
            data.append('email', email);
            data.append('site', site);
            data.append('coordenador', coordinator);
            data.append('latitude', String(latitude));
            data.append('longitude', String(longitude));
            data.append('info', info);
            data.append('autorizado', false);
            data.append('confirmacaoEmail', false);
            data.append('datafundacao', String(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`));
            images.forEach((image, index) => {
                data.append('image', {
                    uri: image,
                    name: `${index}.jpg`,
                    type: 'image/jpg'
                });
            });

            try {
                await api.post('instituicao/store', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Accept: 'application/json'
                    }
                });
            } catch (err) {
                Alert.alert('Ocorreu um erro ao processar a sua requisição.', 'Tente novamente.')
                return false;
            }

            Alert.alert(
                'Solicitação realizada com sucesso!', 'Acompanhe o status pelo e-mail cadastrado.',
                [
                    {
                        text: "Ok", onPress: () => handleNavigateToHome()
                    }
                ],
                {
                    cancelable: false
                }
            );
        } else {
            const response = await Location.geocodeAsync(`${address} ${state} ${city} ${country}`);
            if (typeof response[0] === 'undefined') {
                Alert.alert('Endereço não encontrado!', 'Verifique o endereço e tente novamente.');
                return false;
            }
            const lat = response[0].latitude;
            const long = response[0].longitude;

            const data = new FormData();

            data.append('nome', name);
            data.append('categoria', categoria);
            data.append('pais', country);
            data.append('estado', state);
            data.append('cidade', city);
            data.append('endereco', address);
            data.append('cep', cep);
            data.append('telefone', phone);
            data.append('email', email);
            data.append('site', site);
            data.append('coordenador', coordinator);
            data.append('latitude', String(lat));
            data.append('longitude', String(long));
            data.append('info', info);
            data.append('autorizado', false);
            data.append('confirmacaoEmail', false);
            data.append('datafundacao', String(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`));
            images.forEach((image, index) => {
                data.append('image', {
                    uri: image,
                    name: `${index}.jpg`,
                    type: 'image/jpg'
                });
            });

            try {
                await api.post('instituicao/store', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Accept: 'application/json'
                    }
                });
            } catch (err) {
                Alert.alert('Ocorreu um erro ao processar a sua requisição.', 'Tente novamente.')
                return false;
            }

            Alert.alert(
                'Solicitação realizada com sucesso!', 'Acompanhe o status pelo e-mail cadastrado.',
                [
                    {
                        text: "Ok", onPress: () => handleNavigateToHome()
                    }
                ],
                {
                    cancelable: false
                }
            );
        }
    }

    return (
        <Container>
            <ScrollView>
                <Text>Nome*</Text>
                <TextInput
                    multiline
                    placeholder='Exemplo'
                    value={name}
                    onChangeText={setName}
                />
                <Text>Categoria*</Text>
                <PickerBorder>
                    <Picker
                        selectedValue={categoria}
                        onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
                    >
                        <Picker.Item label='Selecione' value='' />
                        <Picker.Item label='Cátedras Paulo Freire' value='Cátedras Paulo Freire' />
                        <Picker.Item label='Instituto Paulo Freire' value='Instituto Paulo Freire' />
                        <Picker.Item label='Centros e Núcleos de Estudos e Pesquisas' value='Centros e Núcleos de Estudos e Pesquisas' />
                        <Picker.Item label='Homenagens' value='Homenagens' />
                        <Picker.Item label='Projetos' value='Projetos' />
                    </Picker>
                </PickerBorder>
                <Text>Data de fundação*</Text>
                <DateInput onPress={() => setShow(true)}>
                    <FontAwesome5 name='calendar' size={22} color='black' />
                    <DateText>
                        {((date.getDate())) + '/' + ((date.getMonth() + 1)) + '/' + date.getFullYear()}
                    </DateText>
                </DateInput>
                {show && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode='date'
                        is24Hour={true}
                        display='default'
                        onChange={onChangeDate}
                    />
                )}
                <Text>Coordenador(a)*</Text>
                <TextInput
                    multiline
                    placeholder='Exemplo'
                    value={coordinator}
                    onChangeText={setCoordinator}
                />
                <Text>País*</Text>
                <TextInput
                    multiline
                    placeholder='Brasil'
                    value={country}
                    onChangeText={onChangeCountry}
                />
                <Text>CEP (Somente números)*</Text>
                <TextInput
                    multiline
                    placeholder='55555555'
                    value={cep}
                    onChangeText={onChangeCep}
                />
                <Text>Estado*</Text>
                <TextInput
                    multiline
                    placeholder='Exemplo'
                    value={state}
                    onChangeText={onChangeState}
                />
                <Text>Cidade*</Text>
                <TextInput
                    multiline
                    placeholder='Exemplo'
                    value={city}
                    onChangeText={onChangeCity}
                />
                <Text>Endereço*</Text>
                <TextInput
                    multiline
                    placeholder='Exemplo, 99'
                    value={address}
                    onChangeText={onChangeAddress}
                />
                <Text>E-mail*</Text>
                <TextInput
                    multiline
                    placeholder='exemplo@email.com'
                    value={email}
                    onChangeText={setEmail}
                />
                <Text>Telefone (com DDD)</Text>
                <TextInput
                    multiline
                    placeholder='81999999999'
                    value={phone}
                    onChangeText={onChangePhone}
                />
                <Text>Site</Text>
                <TextInput
                    multiline
                    placeholder='exemplo@site.com'
                    value={site}
                    onChangeText={setSite}
                />
                <Text>Mais informações</Text>
                <TextArea
                    multiline
                    placeholder='Exemplo'
                    value={info}
                    onChangeText={setInfo}
                />
                <Text>Adicionar foto da instituição*</Text>
                <ImageContainer>
                    {images.map(image => {
                        return (
                            <ImageView
                                key={image}
                                source={{ uri: image }}
                            />
                        );
                    })}
                </ImageContainer>
                {validateImages() ? (
                    <ImageInput onPress={handleRemoveImages}>
                        <ButtonTextImage>Remover imagem</ButtonTextImage>
                    </ImageInput>
                ) : (
                    <ImageInput onPress={handleSelectImages}>
                        <FontAwesome5 name='plus' size={24} color='#999999' />
                    </ImageInput>
                )}
                <Text>Campos com (*) são obrigatórios</Text>
                <Button onPress={handleCreateInstitution}>
                    <ButtonText>Enviar</ButtonText>
                </Button>
            </ScrollView>
        </Container>
    );
}