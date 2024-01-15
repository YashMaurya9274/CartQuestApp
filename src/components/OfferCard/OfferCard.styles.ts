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
    fontSize: 17,
    fontWeight: '400',
  },
  subHeading: {
    color: TEXT_COLOR.WHITE,
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    color: TEXT_COLOR.WHITE,
    fontSize: 12,
    fontWeight: '300',
  },
});

export default styles;
