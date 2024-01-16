import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  subTotalContainer: {
    backgroundColor: BACKGROUND_COLOR.LIGHT_GRAY,
    marginTop: 40,
    marginHorizontal: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 35,
    gap: 15,
  },
  buttonStyle: {
    width: '100%',
    marginTop: 20,
  },
  buttonTextStyle: {
    fontFamily: 'Manrope-SemiBold',
  },
});

export default styles;
