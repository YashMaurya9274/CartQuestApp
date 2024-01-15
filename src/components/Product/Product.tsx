import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageLinks from '@assets/images';
import PlusIcon from '../PlusIcon/PlusIcon';
import {HomeScreenNavigationProp} from '@screens/HomeScreen/HomeScreen';
import styles from './Product.styles';
import {useDispatch} from 'react-redux';
import {updateCartItems} from 'src/slices/cartItemsSlice';

type Props = {
  item: ProductType;
  navigation: HomeScreenNavigationProp;
  favourite: boolean;
  addToFavourite: (id: number) => void;
  removeFromFavourite: (id: number) => void;
};

const Product = ({
  item,
  navigation,
  favourite,
  addToFavourite,
  removeFromFavourite,
}: Props) => {
  const dispatch = useDispatch();

  const addOrRemoveFavourite = () => {
    if (favourite) {
      removeFromFavourite(item.id);
    } else {
      addToFavourite(item.id);
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetails', {
          product: item,
        })
      }
      style={styles.productContainer}>
      <Image
        source={{
          uri: item.thumbnail,
        }}
        //   @ts-ignore
        style={styles.productImage}
      />

      <View style={styles.productDetailsContainer}>
        <View style={styles.productDetailsLeft}>
          <Text style={styles.productPrice}>${item.price}</Text>

          <Text style={styles.productName}>
            {item.title.length > 15
              ? item.title.slice(0, 15) + '...'
              : item.title}
          </Text>
        </View>

        <PlusIcon onPress={() => dispatch(updateCartItems(item))} />
      </View>

      <TouchableOpacity
        onPress={addOrRemoveFavourite}
        style={styles.favouriteIconContainer}>
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
