import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import MainContainer from '@components/MainContainer/MainContainer';
import {RootStackParamList} from '@navigators/RootNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
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

export type ProductDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

const ProductDetailsScreen = () => {
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

        <View style={styles.productImagesContainer}>
          <ImageCarousel />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>$34.70</Text>
          <Text style={styles.productDiscount}>$22.04 OFF</Text>
        </View>

        <View style={styles.buttons}>
          <PillButton
            title="Add to Cart"
            onPress={() => {}}
            buttonContainerStyle={styles.addToCartButton}
            titleStyle={styles.addToCartText}
          />
          <PillButton
            title="Buy Now"
            buttonContainerStyle={styles.buyNowButton}
            titleStyle={styles.buyNowText}
            onPress={() => {}}
          />
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

export default ProductDetailsScreen;
