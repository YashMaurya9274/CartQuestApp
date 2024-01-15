import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import ProductDetailsScreen from '@screens/ProductDetailsScreen/ProductDetailsScreen';
import CartScreen from '@screens/CartScreen/CartScreen';

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  ProductDetails: {
    product: ProductType;
  };
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
        <RootStack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
        />
        <RootStack.Screen name="Cart" component={CartScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
