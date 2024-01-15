import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  productContainer: {
    position: 'relative',
    width: '46%',
    backgroundColor: BACKGROUND_COLOR.DEFAULT,
    borderRadius: 12,
    height: 180,
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  productDetailsLeft: {
    gap: 2,
  },
  productPrice: {
    fontSize: 14,
    color: TEXT_COLOR.BLACK,
    fontWeight: '600',
  },
  productName: {
    fontSize: 12,
    color: TEXT_COLOR.GRAY_1,
    fontWeight: '400',
    marginBottom: 5,
  },
  favouriteIconContainer: {
    position: 'absolute',
    top: 14,
    left: 14,
  },
  favouriteImage: {
    height: 20,
    width: 20,
    objectFit: 'contain',
  },
});

export default styles;
