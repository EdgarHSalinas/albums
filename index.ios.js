// Index.ios.js - place code in here for iOS

// Import a library to help create a component

// Create a component 


import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View>
      <Header headerText={'Albums'} /> 
      <AlbumList />
    </View>
  );

// It looks better above then previous code below

// const App = () => {
//   return (
//     <Text>Test Text</Text>
//   );

// };

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
