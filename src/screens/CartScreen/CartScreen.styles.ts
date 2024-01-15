import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, COLOR_CODE, TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  cartScreenContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.WHITE,
  },
  cartTop: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    padding: 20,
  },
  cartHeading: {
    fontSize: 16,
    fontWeight: '400',
    color: TEXT_COLOR.BLACK,
  },
  editButton: {
    marginLeft: 'auto',
    marginTop: 10,
    paddingRight: 15,
  },
  editText: {
    color: COLOR_CODE.PRIMARY,
    fontSize: 12,
    fontWeight: '500',
  },
  emptyCartImage: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
  },
});

export default styles;
