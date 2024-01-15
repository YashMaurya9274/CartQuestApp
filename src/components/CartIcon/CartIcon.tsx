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

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  cartIconStyle?: StyleProp<ImageStyle>;
};

const CartIcon = ({cartIconStyle, containerStyle}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={[styles.cartContainer, containerStyle]}
      onPress={() => navigation.navigate('Cart')}>
      <Image
        source={ImageLinks.bag}
        style={[styles.cartImage, cartIconStyle]}
      />

      <View style={styles.cartNumberContainer}>
        <Text style={styles.cartNumerText}>3</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartIcon;
