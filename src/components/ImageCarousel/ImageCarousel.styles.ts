import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  imageCarouselContainer: {
    position: 'relative',
  },
  carouselIndicatorContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  carouselIndicator: {
    height: 4,
    width: 22,
    borderRadius: 100,
  },
  favouriteIconContainer: {
    position: 'absolute',
    backgroundColor: BACKGROUND_COLOR.WHITE,
    borderRadius: 18,
    padding: 15,
    right: 10,
    top: 10,
  },
  favouriteIcon: {
    height: 20,
    width: 20,
  },
});

export default styles;
