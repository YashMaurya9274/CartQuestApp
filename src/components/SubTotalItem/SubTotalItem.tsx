import {Text, View} from 'react-native';
import React from 'react';
import styles from './SubTotalItem.styles';

type Props = {
  name: string;
  price: number;
};

const SubTotalItem = ({name, price}: Props) => {
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price.toString()}</Text>
    </View>
  );
};

export default SubTotalItem;
