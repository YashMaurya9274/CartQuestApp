import {StyleSheet} from 'react-native';
import {TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  bottomTabContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  bottomTabImage: {
    width: 24,
    height: 24,
  },
  bottomTabText: {
    color: TEXT_COLOR.GRAY,
    fontSize: 12,
  },
});

export default styles;
