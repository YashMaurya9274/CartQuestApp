import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import ProductDetails from '@screens/ProductDetails/ProductDetails';

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  ProductDetails: undefined;
  Cart: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Main" component={TabNavigator} />
        </RootStack.Group>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="ProductDetails" component={ProductDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
