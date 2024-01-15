import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {ProductType} from 'src/types/productTypes';
import Product from '@components/Product/Product';
import {HomeScreenNavigationProp} from '@screens/HomeScreen/HomeScreen';
import styles from './Products.styles';

type Props = {
  data: ProductType[];
  navigation: HomeScreenNavigationProp;
};

const Products = ({data, navigation}: Props) => {
  return (
    <View style={styles.productsContainer}>
      <Text style={styles.productsRecommended}>Recommended</Text>

      {/* @ts-ignore */}
      <FlatList
        data={data}
        keyExtractor={(item: ProductType) => item.id}
        // @ts-ignore
        key={(item: ProductType) => String(item.id)}
        columnWrapperStyle={styles.productsListContainer}
        numColumns={2}
        renderItem={({item}: {item: ProductType}) => {
          return (
            <Product
              key={String(item.id)}
              item={item}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
};

export default Products;
