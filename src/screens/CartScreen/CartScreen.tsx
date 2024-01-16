/* eslint-disable react-hooks/exhaustive-deps */
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainContainer from '@components/MainContainer/MainContainer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigators/RootNavigator';
import {useNavigation} from '@react-navigation/native';
import {BACKGROUND_COLOR, STATUS_BAR_CONTENT_STYLE} from 'src/types/enums';
import BackIcon from '@components/BackIcon/BackIcon';
import CartItem from '@components/CartItem/CartItem';
import Subtotal from '@components/Subtotal/Subtotal';
import styles from './CartScreen.styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteCartItem,
  selectCartItems,
  updateCartItems,
} from 'src/slices/cartItemsSlice';
import ImageLinks from '@assets/images';
import STRINGS from 'src/constants/strings';

export type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;

const CartScreen = () => {
  const navigation = useNavigation<CartScreenNavigationProp>();
  const cartItems = useSelector(selectCartItems);
  const [items, setItems] = useState<ProductType[]>([]);
  const [subTotal, setSubTotal] = useState(0);

  const dispatch = useDispatch();

  const findItemQuantities = (item: ProductType) => {
    const itemQuanities = cartItems?.filter(itm => itm.id === item.id);
    return itemQuanities!.length;
  };

  const createSetFromArray = (array: ProductType[]) => {
    // @ts-ignore
    const set = new Set(array.map(JSON.stringify));
    // @ts-ignore
    return Array.from(set).map(JSON.parse);
  };

  const groupCartItems = () => {
    let tempItems = cartItems;

    tempItems = tempItems!.map(item => {
      return {...item, quantity: findItemQuantities(item)};
    });

    const itemsSet = createSetFromArray(tempItems);

    setItems(itemsSet);
  };

  const calculateSubtotal = () => {
    let subTotalPrice = 0;
    cartItems!.forEach(item => {
      subTotalPrice += item.price;
    });

    setSubTotal(subTotalPrice);
  };

  useEffect(() => {
    if (cartItems !== null) {
      groupCartItems();
      calculateSubtotal();
    }
  }, [cartItems]);

  const increaseItemQuantity = (item: ProductType) => {
    const newItem = item;
    // @ts-ignore
    delete newItem.quantity;
    dispatch(updateCartItems(newItem));
  };

  const dereaseItemQuantity = (item: ProductType) => {
    const index = cartItems?.findIndex(itm => itm.id === item.id);
    dispatch(deleteCartItem(index));
  };

  return (
    <MainContainer
      navigation={navigation}
      statusBarBgColor={BACKGROUND_COLOR.WHITE}
      barTextStyle={STATUS_BAR_CONTENT_STYLE.DARK}>
      <ScrollView style={styles.cartScreenContainer}>
        <View style={styles.cartTop}>
          <BackIcon />
          <Text style={styles.cartHeading}>
            {STRINGS.SHOPPING_CART} ({cartItems ? cartItems.length : 0})
          </Text>
        </View>

        {items.length === 0 && (
          <Image source={ImageLinks.emptyCart} style={styles.emptyCartImage} />
        )}

        <View>
          {items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onPressIncreaseQuantity={increaseItemQuantity}
              onPressDecreaseQuantity={dereaseItemQuantity}
            />
          ))}
        </View>

        {items.length > 0 && (
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>{STRINGS.EDIT}</Text>
          </TouchableOpacity>
        )}

        {subTotal > 0 && (
          <Subtotal
            subTotal={subTotal}
            // eslint-disable-next-line react-native/no-inline-styles
            subTotalContainerStyle={{
              marginTop: items?.length! <= 2 ? 150 : 40,
            }}
          />
        )}
      </ScrollView>
    </MainContainer>
  );
};

export default CartScreen;
