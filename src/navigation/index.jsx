import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CoinDetailsScreen from '../screens/CoinDetailedScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Root" screenOptions={{headerShown: false}}>
            <Stack.Screen name ="Root" component = {BottomTabNavigator}/>
            <Stack.Screen name ="CoinDetail" component = {CoinDetailsScreen}/>
        </Stack.Navigator>
    )
}
export default Navigation;