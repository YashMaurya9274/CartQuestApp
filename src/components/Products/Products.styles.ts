import {StyleSheet} from 'react-native';
import {TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  productsContainer: {
    padding: 15,
  },
  productsRecommended: {
    fontSize: 30,
    fontWeight: '400',
    color: TEXT_COLOR.BLACK,
    fontFamily: 'Manrope',
  },
  productsListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },
});

export default styles;
