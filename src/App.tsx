import 'react-native-gesture-handler'
import React from 'react';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';

import store from './store'
import AppRoutes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  </Provider>
);

export default App;
