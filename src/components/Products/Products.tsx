import {FlatList, Text, View} from 'react-native';
import React from 'react';
import Product from '@components/Product/Product';
import {HomeScreenNavigationProp} from '@screens/HomeScreen/HomeScreen';
import styles from './Products.styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavouriteItems,
  deleteFavouriteItem,
  selectFavouriteItems,
} from 'src/slices/favouritesSlice';

type Props = {
  data: ProductType[];
  navigation: HomeScreenNavigationProp;
};

const Products = ({data, navigation}: Props) => {
  const favouriteItems = useSelector(selectFavouriteItems);
  const dispatch = useDispatch();

  const checkFavourite = (id: number) => {
    if (favouriteItems && favouriteItems.includes(id)) {
      return true;
    }
    return false;
  };

  const addToFavourite = (id: number) => {
    dispatch(addFavouriteItems(id));
  };

  const removeFromFavourite = (id: number) => {
    if (favouriteItems) {
      const index = favouriteItems.indexOf(id);
      dispatch(deleteFavouriteItem(index));
    }
  };

  return (
    <View style={styles.productsContainer}>
      <Text style={styles.productsRecommended}>Recommended</Text>

      {/* @ts-ignore */}
      <FlatList
        data={data}
        keyExtractor={(item: ProductType) => item.id}
        // @ts-ignore
        key={(item: ProductType) => item.id.toString()}
        columnWrapperStyle={styles.productsListContainer}
        numColumns={2}
        renderItem={({item}: {item: ProductType}) => {
          return (
            <Product
              key={item.id.toString()}
              item={item}
              navigation={navigation}
              favourite={checkFavourite(item.id)}
              addToFavourite={addToFavourite}
              removeFromFavourite={removeFromFavourite}
            />
          );
        }}
      />
    </View>
  );
};

export default Products;
