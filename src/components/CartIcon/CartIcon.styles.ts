import {StyleSheet} from 'react-native';
import {COLOR_CODE, TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  cartContainer: {
    position: 'relative',
    marginRight: 4,
  },
  cartImage: {height: 20, width: 20, objectFit: 'contain'},
  cartNumberContainer: {
    backgroundColor: COLOR_CODE.PRIMARY_YELLOW,
    position: 'absolute',
    height: 26,
    width: 26,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 8,
    left: 8,
    borderWidth: 3,
  },
  cartNumerText: {
    color: TEXT_COLOR.WHITE,
    fontWeight: '600',
    fontSize: 12,
    marginBottom: 1,
    borderRadius: 100,
  },
});

export default styles;
