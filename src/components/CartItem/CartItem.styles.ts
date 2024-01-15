import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  cartItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  cartItemImage: {
    height: 30,
    width: 30,
    objectFit: 'cover',
    borderRadius: 5,
    marginBottom: 2,
  },
  cartItemDetailsContainer: {
    marginLeft: 20,
    gap: 3,
  },
  cartItemName: {
    fontSize: 14,
    fontWeight: '500',
    color: TEXT_COLOR.BLACK,
  },
  cartItemPrice: {
    fontSize: 14,
    fontWeight: '400',
    color: TEXT_COLOR.BLACK,
  },
  cartItemQuanityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 10,
  },
  minusImage: {
    height: 20,
    width: 20,
  },
  plusImage: {
    height: 20,
    width: 20,
  },
  cartItemSeparator: {
    height: 1,
    backgroundColor: BACKGROUND_COLOR.GRAY,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default styles;
