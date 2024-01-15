import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import ImageLinks from '@assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@navigators/RootNavigator';
import styles from './CartIcon.styles';
import {useSelector} from 'react-redux';
import {selectCartItems} from 'src/slices/cartItemsSlice';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  cartIconStyle?: StyleProp<ImageStyle>;
};

const CartIcon = ({cartIconStyle, containerStyle}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const cartItems = useSelector(selectCartItems);

  return (
    <TouchableOpacity
      style={[styles.cartContainer, containerStyle]}
      onPress={() => navigation.navigate('Cart')}>
      <Image
        source={ImageLinks.bag}
        style={[styles.cartImage, cartIconStyle]}
      />

      {cartItems && cartItems.length > 0 && (
        <View style={styles.cartNumberContainer}>
          <Text style={styles.cartNumerText}>{cartItems.length}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartIcon;
