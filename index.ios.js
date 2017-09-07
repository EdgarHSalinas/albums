// Index.ios.js - place code in here for iOS

// Import a library to help create a component

// Create a component 



import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header'

const App = () => (
    <Header headerText={'Albums Header!'}/> // Component Nesting
  );

// It looks better above then previous code below

// const App = () => {
//   return (
//     <Text>Test Text</Text>
//   );

// };

// Render it to the device
AppRegistry.registerComponent('albums', () => App);