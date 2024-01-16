import {View, Text, Image, Animated} from 'react-native';
import React, {useRef} from 'react';
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
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  const removeItem = () => {
    // @ts-ignore
    if (item.quantity === 1) {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 600, // Set the duration of the animation in milliseconds
        useNativeDriver: true, // Make sure to set useNativeDriver to false for opacity animations
      }).start(() => {
        // Callback function to be executed after the animation is complete
        onPressDecreaseQuantity(item);
      });
    } else {
      onPressDecreaseQuantity(item);
    }
  };

  return (
    <Animated.View
      style={{
        opacity: fadeAnimation,
      }}>
      <View style={styles.cartItemContainer}>
        <Image
          source={{
            uri: item.thumbnail,
          }}
          style={styles.cartItemImage}
        />

        <View style={styles.cartItemDetailsContainer}>
          <Text style={styles.cartItemName}>
            {item.title.length > 22
              ? `${item.title.slice(0, 22)}...`
              : item.title}
          </Text>
          <Text style={styles.cartItemPrice}>${item.price.toString()}</Text>
        </View>

        <View style={styles.cartItemQuanityContainer}>
          <IconButton
            imageSource={ImageLinks.minus}
            onPress={removeItem}
            imageStyle={styles.minusImage}
            iconButtonContainer={{
              padding: 8,
            }}
          />
          <Text style={styles.itemQuantity}>
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
    </Animated.View>
  );
};

export default CartItem;
