import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Character from '../pages/Character';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
    <App.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: '#000000'}
        }}
    >
        <App.Screen name="Dashboard" component={Dashboard} />
        <App.Screen name="Character" component={Character} />
    </App.Navigator>
);

export default AppRoutes;
