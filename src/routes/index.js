import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Form from '../pages/Form';
import Discover from '../pages/Discover';
import Info from '../pages/Info';
import Map from '../pages/Map';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator>
                <Screen 
                    name='Home'
                    component={Home}
                />
                <Screen 
                    name='Form'
                    component={Form}
                />
                <Screen 
                    name='Map'
                    component={Map}
                    options={{ headerShown: false }}
                />
                <Screen 
                    name='Info'
                    component={Info}
                />
                <Screen 
                    name='Discover'
                    component={Discover}
                />
            </Navigator>
        </NavigationContainer>
    );
}