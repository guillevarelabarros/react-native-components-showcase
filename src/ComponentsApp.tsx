import 'react-native-gesture-handler';

import { Navigator } from './presentation/navigator/Navigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};

// 7; // ComponentsApp.tsx

// import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';
// // import { View, Text } from 'react-native';
// import { Navigator } from './presentation/navigator/Navigator';

// export const ComponentsApp = () => {
//   return (
//     <NavigationContainer>
//       <Navigator />
//     </NavigationContainer>
//   );
// };
