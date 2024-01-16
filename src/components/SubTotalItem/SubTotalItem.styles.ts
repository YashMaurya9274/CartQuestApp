import {StyleSheet} from 'react-native';
import {TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: TEXT_COLOR.GRAY_1,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Manrope-Medium',
  },
  price: {
    color: TEXT_COLOR.BLACK,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Manrope-SemiBold',
  },
});

export default styles;
