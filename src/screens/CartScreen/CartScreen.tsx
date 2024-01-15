import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MainContainer from '@components/MainContainer/MainContainer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigators/RootNavigator';
import {useNavigation} from '@react-navigation/native';
import {BACKGROUND_COLOR, STATUS_BAR_CONTENT_STYLE} from 'src/types/enums';
import BackIcon from '@components/BackIcon/BackIcon';
import CartItem from '@components/CartItem/CartItem';
import Subtotal from '@components/Subtotal/Subtotal';
import styles from './CartScreen.styles';

export type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;

const CartScreen = () => {
  const navigation = useNavigation<CartScreenNavigationProp>();

  return (
    <MainContainer
      navigation={navigation}
      statusBarBgColor={BACKGROUND_COLOR.WHITE}
      barTextStyle={STATUS_BAR_CONTENT_STYLE.DARK}>
      <ScrollView style={styles.cartScreenContainer}>
        <View style={styles.cartTop}>
          <BackIcon />
          <Text style={styles.cartHeading}>Shopping Cart (5)</Text>
        </View>

        <View>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

        <Subtotal />
      </ScrollView>
    </MainContainer>
  );
};

export default CartScreen;
