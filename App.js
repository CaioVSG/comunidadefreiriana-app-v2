import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/pages/Home';
import Form from './src/pages/Form';
import Discover from './src/pages/Discover';
import Info from './src/pages/Info';
import Map from './src/pages/Map';

export default function App() {
  return (
    <>
      <Map />
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
    </>
  );
}