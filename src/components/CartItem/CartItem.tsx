import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './CartItem.styles';
import IconButton from '@components/IconButton/IconButton';
import ImageLinks from '@assets/images';

const CartItem = () => {
  return (
    <View>
      <View style={styles.cartItemContainer}>
        {/* // Image */}
        <Image
          source={{
            uri: 'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
          }}
          style={styles.cartItemImage}
        />

        {/* // Details */}
        <View style={styles.cartItemDetailsContainer}>
          <Text style={styles.cartItemName}>Bananas</Text>
          <Text style={styles.cartItemPrice}>$7.90</Text>
        </View>

        {/* // Quantity */}
        <View style={styles.cartItemQuanityContainer}>
          <IconButton
            imageSource={ImageLinks.minus}
            onPress={() => {}}
            imageStyle={styles.minusImage}
            iconButtonContainer={{
              padding: 8,
            }}
          />
          <Text>2</Text>
          <IconButton
            imageSource={ImageLinks.plus}
            onPress={() => {}}
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
