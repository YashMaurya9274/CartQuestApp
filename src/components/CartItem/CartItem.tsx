import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './CartItem.styles';
import IconButton from '@components/IconButton/IconButton';
import ImageLinks from '@assets/images';

type Props = {
  item: ProductType;
  onPressIncreaseQuantity: (item: ProductType) => void;
  onPressDecreaseQuantity: (item: ProductType) => void;
};

const CartItem = ({
  item,
  onPressIncreaseQuantity,
  onPressDecreaseQuantity,
}: Props) => {
  return (
    <View>
      <View style={styles.cartItemContainer}>
        {/* // Image */}
        <Image
          source={{
            uri: item.thumbnail,
          }}
          style={styles.cartItemImage}
        />

        {/* // Details */}
        <View style={styles.cartItemDetailsContainer}>
          <Text style={styles.cartItemName}>{item.title}</Text>
          <Text style={styles.cartItemPrice}>${item.price.toString()}</Text>
        </View>

        {/* // Quantity */}
        <View style={styles.cartItemQuanityContainer}>
          <IconButton
            imageSource={ImageLinks.minus}
            onPress={() => onPressDecreaseQuantity(item)}
            imageStyle={styles.minusImage}
            iconButtonContainer={{
              padding: 8,
            }}
          />
          <Text>
            {/* @ts-ignore */}
            {item.quantity}
          </Text>
          <IconButton
            imageSource={ImageLinks.plus}
            onPress={() => onPressIncreaseQuantity(item)}
            imageStyle={styles.plusImage}
            iconButtonContainer={{
              padding: 8,
            }}
          />
        </View>
      </View>

      <View style={styles.cartItemSeparator} />
    </View>
  );
};

export default CartItem;
