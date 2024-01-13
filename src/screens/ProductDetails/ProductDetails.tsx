import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MainContainer from '@components/MainContainer/MainContainer';
import {RootStackParamList} from '@navigators/RootNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {
  BACKGROUND_COLOR,
  COLOR_CODE,
  STATUS_BAR_CONTENT_STYLE,
  TEXT_COLOR,
} from 'src/types/enums';
import CartIcon from '@components/CartIcon/CartIcon';
import BackIcon from '@components/BackIcon/BackIcon';

export type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

const ProductDetails = () => {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();

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

        <Text style={styles.productName}>iPhone 9</Text>

        <Text style={styles.productBrand}>Apple</Text>

        {/* TODO: Stars and Review */}

        {/* TODO: Carousel, heart */}

        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>$34.70</Text>
          <Text style={styles.productDiscount}>$22.04 OFF</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
            <Text style={[styles.buttonText, styles.addToCartText]}>
              Add to Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
            <Text style={[styles.buttonText, styles.buyNowText]}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productDetails}>
          <Text style={styles.productDetailsTitle}>Details</Text>
          <Text style={styles.productDetailsDesc}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam quis risus eget urna mollis ornare vel eu leo.
          </Text>
        </View>
      </ScrollView>
    </MainContainer>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  productDetailsContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.WHITE,
  },
  productDetailsContentContainer: {
    paddingBottom: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  productName: {
    fontSize: 50,
    fontWeight: '300',
    color: TEXT_COLOR.BLACK,
    marginLeft: 20,
  },
  productBrand: {
    fontSize: 50,
    fontWeight: '800',
    color: TEXT_COLOR.BLACK,
    marginLeft: 20,
    marginTop: -10,
  },
  priceContainer: {
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: COLOR_CODE.PRIMARY,
  },
  productDiscount: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: COLOR_CODE.PRIMARY,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 100,
    color: TEXT_COLOR.WHITE,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25,
  },
  button: {
    width: '45%',
    padding: 18,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  addToCartButton: {
    backgroundColor: BACKGROUND_COLOR.WHITE,
    borderWidth: 1,
    borderColor: COLOR_CODE.PRIMARY,
  },
  addToCartText: {
    color: COLOR_CODE.PRIMARY,
  },
  buyNowButton: {
    backgroundColor: COLOR_CODE.PRIMARY,
  },
  buyNowText: {
    color: TEXT_COLOR.WHITE,
  },
  productDetails: {
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 4,
  },
  productDetailsTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: TEXT_COLOR.BLACK,
  },
  productDetailsDesc: {
    fontSize: 16,
    fontWeight: '400',
    color: TEXT_COLOR.GRAY,
  },
});
