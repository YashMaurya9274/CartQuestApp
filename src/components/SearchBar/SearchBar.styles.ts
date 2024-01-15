import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, TEXT_COLOR} from 'src/types/enums';

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR.PRIMARY_DARK,
    padding: 15,
    gap: 8,
    paddingHorizontal: 25,
    borderRadius: 100,
  },
  searchImage: {
    height: 18,
    width: 18,
  },
  searchInput: {
    padding: 0,
    width: 230,
    color: TEXT_COLOR.WHITE,
  },
});

export default styles;
