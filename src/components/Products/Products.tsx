import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TEXT_COLOR} from 'src/types/enums';
import {ProductType} from 'src/types/productTypes';
import Product from '@components/Product';
import {HomeScreenNavigationProp} from '@screens/HomeScreen/HomeScreen';

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

const styles = StyleSheet.create({
  productsContainer: {
    padding: 15,
  },
  productsRecommended: {
    fontSize: 30,
    fontWeight: '400',
    color: TEXT_COLOR.BLACK,
  },
  productsListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },
});
