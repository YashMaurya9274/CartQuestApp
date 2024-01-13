import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import ImageLinks from '@assets/images';
import {COLOR_CODE, TEXT_COLOR} from 'src/types/enums';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  cartIconStyle?: StyleProp<ImageStyle>;
};

const CartIcon = ({cartIconStyle, containerStyle}: Props) => {
  return (
    <TouchableOpacity style={[styles.cartContainer, containerStyle]}>
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

const styles = StyleSheet.create({
  cartContainer: {
    position: 'relative',
    marginRight: 4,
  },
  cartImage: {height: 20, width: 20, objectFit: 'contain'},
  cartNumberContainer: {
    backgroundColor: COLOR_CODE.PRIMARY_YELLOW,
    position: 'absolute',
    height: 22,
    width: 22,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    left: 10,
  },
  cartNumerText: {
    color: TEXT_COLOR.WHITE,
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 1,
    borderRadius: 100,
  },
});
