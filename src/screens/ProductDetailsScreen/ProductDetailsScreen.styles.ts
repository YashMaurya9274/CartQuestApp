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
    maxWidth: 320,
  },
  productBrand: {
    fontSize: 50,
    fontWeight: '800',
    color: TEXT_COLOR.BLACK,
    marginLeft: 20,
    marginTop: -10,
    maxWidth: 320,
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
  },
  addToCartButton: {
    backgroundColor: BACKGROUND_COLOR.WHITE,
    borderWidth: 1,
    borderColor: COLOR_CODE.PRIMARY,
    width: '45%',
  },
  addToCartText: {
    color: COLOR_CODE.PRIMARY,
  },
  buyNowButton: {
    width: '45%',
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

export default styles;
