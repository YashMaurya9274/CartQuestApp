import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BACKGROUND_COLOR, TEXT_COLOR} from 'src/types/enums';
import {ProductType} from 'src/types/productTypes';
import ImageLinks from '@assets/images';
import PlusIcon from './PlusIcon/PlusIcon';
import {HomeScreenNavigationProp} from '@screens/HomeScreen/HomeScreen';

type Props = {
  item: ProductType;
  navigation: HomeScreenNavigationProp;
};

const Product = ({item, navigation}: Props) => {
  const favourite = false;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails')}
      style={styles.productContainer}>
      <Image
        source={ImageLinks.galleryOutline}
        //   @ts-ignore
        style={styles.productImage}
      />

      <View style={styles.productDetailsContainer}>
        <View style={styles.productDetailsLeft}>
          <Text style={styles.productPrice}>${item.price}</Text>

          <Text style={styles.productName}>{item.name}</Text>
        </View>

        <PlusIcon />
      </View>

      <TouchableOpacity style={styles.favouriteIconContainer}>
        <Image
          source={
            favourite ? ImageLinks.favouriteSolid : ImageLinks.favouriteOutline
          }
          style={styles.favouriteImage}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    position: 'relative',
    width: '46%',
    backgroundColor: BACKGROUND_COLOR.DEFAULT,
    borderRadius: 12,
    height: 180,
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'stretch',
    tintColor: 'gray',
    backgroundColor: 'green',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  productDetailsLeft: {
    gap: 2,
  },
  productPrice: {
    fontSize: 14,
    color: TEXT_COLOR.BLACK,
    fontWeight: '600',
  },
  productName: {
    fontSize: 12,
    color: TEXT_COLOR.GRAY_1,
    fontWeight: '400',
    marginBottom: 5,
  },
  favouriteIconContainer: {
    position: 'absolute',
    top: 14,
    left: 14,
  },
  favouriteImage: {
    height: 20,
    width: 20,
    objectFit: 'contain',
  },
});
