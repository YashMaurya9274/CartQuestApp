import {Image, TextInput, View} from 'react-native';
import React from 'react';
import {TEXT_COLOR} from 'src/types/enums';
import ImageLinks from '@assets/images';
import styles from './SearchBar.styles';
import STRINGS from 'src/constants/strings';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image source={ImageLinks.search} style={styles.searchImage} />

      <TextInput
        style={styles.searchInput}
        placeholder={STRINGS.SEARCH_PRODUCTS_ON_STORE}
        placeholderTextColor={TEXT_COLOR.GRAY}
      />
    </View>
  );
};

export default SearchBar;
