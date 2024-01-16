import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, COLOR_CODE, TEXT_COLOR} from 'src/types/enums';

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
    maxWidth: 330,
    fontFamily: 'Manrope-Light',
  },
  productBrand: {
    fontSize: 50,
    color: TEXT_COLOR.BLACK,
    marginLeft: 20,
    marginTop: -10,
    maxWidth: 330,
    fontFamily: 'Manrope-ExtraBold',
  },
  productImagesContainer: {
    marginTop: 15,
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
    fontFamily: 'Manrope-Regular',
  },
  productDiscount: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: COLOR_CODE.PRIMARY,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 100,
    color: TEXT_COLOR.WHITE,
    fontFamily: 'Manrope-Regular',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  ratingAndReviewContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 10,
  },
  reviews: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Manrope-Regular',
  },
  addToCartButton: {
    backgroundColor: BACKGROUND_COLOR.WHITE,
    borderWidth: 1,
    borderColor: COLOR_CODE.PRIMARY,
    width: '45%',
  },
  addToCartText: {
    color: COLOR_CODE.PRIMARY,
    fontFamily: 'Manrope-SemiBold',
  },
  buyNowButton: {
    width: '45%',
  },
  buyNowText: {
    color: TEXT_COLOR.WHITE,
    fontFamily: 'Manrope-SemiBold',
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
    fontFamily: 'Manrope-Regular',
  },
  productDetailsDesc: {
    fontSize: 16,
    fontWeight: '400',
    color: TEXT_COLOR.GRAY,
    fontFamily: 'Manrope-Regular',
  },
});

export default styles;
