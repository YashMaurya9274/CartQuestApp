/* eslint-disable react-hooks/exhaustive-deps */
import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainContainer from '@components/MainContainer/MainContainer';
import {RootStackParamList} from '@navigators/RootNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  BACKGROUND_COLOR,
  STATUS_BAR_CONTENT_STYLE,
  TEXT_COLOR,
} from 'src/types/enums';
import CartIcon from '@components/CartIcon/CartIcon';
import BackIcon from '@components/BackIcon/BackIcon';
import ImageCarousel from '@components/ImageCarousel/ImageCarousel';
import styles from './ProductDetailsScreen.styles';
import PillButton from '@components/PillButton/PillButton';
import {updateCartItems} from 'src/slices/cartItemsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavouriteItems,
  deleteFavouriteItem,
  selectFavouriteItems,
} from 'src/slices/favouritesSlice';
import StarRating from '@components/StarRating/StarRating';
import STRINGS from 'src/constants/strings';

export type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

const ProductDetailsScreen = () => {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();
  const route = useRoute<ProductDetailsRouteProp>();
  const {product} = route.params;
  const dispatch = useDispatch();
  const favouriteItems = useSelector(selectFavouriteItems);
  const [favourite, setFavourite] = useState(false);
  const reviews = 110;

  const checkFavourite = (id: number) => {
    if (favouriteItems && favouriteItems.includes(id)) {
      return true;
    }
    return false;
  };

  const discountPrice = (
    product.price *
    (product.discountPercentage / 100)
  ).toFixed(2);

  useEffect(() => {
    setFavourite(checkFavourite(product.id));
  }, [favouriteItems]);

  const addToFavourite = () => {
    dispatch(addFavouriteItems(product.id));
  };

  const removeFromFavourite = () => {
    if (favouriteItems) {
      const index = favouriteItems.indexOf(product.id);
      dispatch(deleteFavouriteItem(index));
    }
  };

  const addOrRemoveFavourite = () => {
    if (favourite) {
      removeFromFavourite();
    } else {
      addToFavourite();
    }
  };

  return (
    <MainContainer
      navigation={navigation}
      statusBarBgColor={BACKGROUND_COLOR.WHITE}
      barTextStyle={STATUS_BAR_CONTENT_STYLE.DARK}>
      <ScrollView
        style={styles.productDetailsContainer}
        contentContainerStyle={styles.productDetailsContentContainer}>
        <View style={styles.header}>
          <BackIcon />
          <CartIcon
            cartIconStyle={{
              tintColor: TEXT_COLOR.BLACK,
            }}
          />
        </View>

        <Text style={styles.productName}>{product.title}</Text>

        <Text style={styles.productBrand}>{product.brand}</Text>

        <View style={styles.ratingAndReviewContainer}>
          <StarRating rating={product.rating} />
          <Text style={styles.reviews}>
            {reviews} {STRINGS.REVIEWS}
          </Text>
        </View>

        <View style={styles.productImagesContainer}>
          <ImageCarousel
            images={product.images}
            favourite={favourite}
            addOrRemoveFavourite={addOrRemoveFavourite}
          />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>${product.price.toString()}</Text>
          <Text style={styles.productDiscount}>
            ${discountPrice.toString()} {STRINGS.OFF}
          </Text>
        </View>

        <View style={styles.buttons}>
          <PillButton
            title={STRINGS.ADD_TO_CART}
            onPress={() => dispatch(updateCartItems(product))}
            buttonContainerStyle={styles.addToCartButton}
            titleStyle={styles.addToCartText}
          />
          <PillButton
            title={STRINGS.BUY_NOW}
            buttonContainerStyle={styles.buyNowButton}
            titleStyle={styles.buyNowText}
            onPress={() => {}}
          />
        </View>

        <View style={styles.productDetails}>
          <Text style={styles.productDetailsTitle}>{STRINGS.DETAILS}</Text>
          <Text style={styles.productDetailsDesc}>{product.description}</Text>
        </View>
      </ScrollView>
    </MainContainer>
  );
};

export default ProductDetailsScreen;
