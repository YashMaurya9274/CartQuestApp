import {StyleSheet} from 'react-native';
import {TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  optionCardContainer: {
    display: 'flex',
    gap: 4,
  },
  optionCardTextOne: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    opacity: 0.5,
    color: TEXT_COLOR.LIGHT_GRAY,
    fontFamily: 'Manrope',
  },
  lineTwoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  optionCardTextTwo: {
    fontSize: 14,
    fontWeight: '500',
    color: TEXT_COLOR.LIGHT_GRAY,
    fontFamily: 'Manrope',
  },
  optionCardChevronDown: {
    height: 8,
    width: 8,
    objectFit: 'contain',
  },
});

export default styles;
