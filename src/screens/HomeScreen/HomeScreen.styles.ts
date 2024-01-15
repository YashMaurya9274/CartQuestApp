import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, COLOR_CODE, TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.WHITE,
  },
  homeContentContainer: {
    paddingBottom: 20,
  },
  homeTop: {
    display: 'flex',
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLOR_CODE.PRIMARY,
    gap: 25,
  },
  homeTopNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeTopName: {
    color: TEXT_COLOR.LIGHT_GRAY,
    fontSize: 22,
    fontWeight: '600',
  },
  homeBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  offers: {
    maxHeight: 150,
  },
  offerContainer: {
    padding: 18,
    gap: 15,
    alignItems: 'center',
    paddingTop: 40,
  },
});

export default styles;
