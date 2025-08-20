7; // ComponentsApp.tsx

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { View, Text } from 'react-native';
import { Navigator } from './presentation/navigator/Navigator';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
