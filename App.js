import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/pages/Home';
import Form from './src/pages/Form';
import Discover from './src/pages/Discover';

export default function App() {
  return (
    <>
      <Discover />
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
    </>
  );
}