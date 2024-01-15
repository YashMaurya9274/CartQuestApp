import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  textIconContainer: {
    backgroundColor: BACKGROUND_COLOR.DEFAULT,
    padding: 12,
    borderRadius: 100,
  },
  textSymbol: {
    height: 10,
    width: 10,
    objectFit: 'contain',
  },
});

export default styles;
