import {StyleSheet} from 'react-native';
import {TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  offerCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 16,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 118,
    width: 230,
  },
  offerCardImage: {
    height: 68,
    width: 68,
  },
  heading: {
    color: TEXT_COLOR.WHITE,
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Manrope',
  },
  subHeading: {
    color: TEXT_COLOR.WHITE,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Manrope-Bold',
  },
  description: {
    color: TEXT_COLOR.WHITE,
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Manrope',
  },
});

export default styles;
