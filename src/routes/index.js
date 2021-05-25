import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Form from '../pages/Form';
import Discover from '../pages/Discover';
import Info from '../pages/Info';
import Map from '../pages/Map';
import SelectArea from '../pages/SelectArea';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName='Home' screenOptions={{ cardStyle: { backgroundColor: 'white' } }}>
                <Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Screen
                    name='Discover'
                    component={Discover}
                    options={{ title: 'Conheça Paulo Freire' }}
                />
                <Screen
                    name='Map'
                    component={Map}
                    options={{ title: 'Mapa' }}
                />
                <Screen
                    name='SelectArea'
                    component={SelectArea}
                    options={{ title: 'Selecione um lugar no mapa' }}
                />
                <Screen
                    name='Form'
                    component={Form}
                    options={{ title: 'Solicitar Cadastro' }}
                />
                <Screen
                    name='Info'
                    component={Info}
                    options={{ title: 'Instituição' }}
                />
            </Navigator>
        </NavigationContainer>
    );
}