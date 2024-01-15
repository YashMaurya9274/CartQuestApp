import {StyleSheet} from 'react-native';
import {COLOR_CODE, TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  pillButtonCotainer: {
    backgroundColor: COLOR_CODE.PRIMARY,
    width: 200,
    padding: 18,
    borderRadius: 20,
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: TEXT_COLOR.WHITE,
  },
});

export default styles;
