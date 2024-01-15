import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProductType} from 'src/types/productTypes';
import ImageLinks from '@assets/images';
import PlusIcon from '../PlusIcon/PlusIcon';
import {HomeScreenNavigationProp} from '@screens/HomeScreen/HomeScreen';
import styles from './Product.styles';

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
        source={{
          uri: item.image,
        }}
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
