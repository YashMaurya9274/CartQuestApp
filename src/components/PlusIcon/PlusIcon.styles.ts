import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  plusIconContainer: {
    backgroundColor: BACKGROUND_COLOR.PRIMARY_DARK,
    height: 20,
    width: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: TEXT_COLOR.WHITE,
    marginBottom: 2,
  },
});

export default styles;
