import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {BACKGROUND_COLOR, TEXT_COLOR} from 'src/types/enums';
import ImageLinks from '@assets/images';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image source={ImageLinks.search} style={styles.searchImage} />

      <TextInput
        style={styles.searchInput}
        placeholder="Search Products or store"
        placeholderTextColor={TEXT_COLOR.GRAY}
      />
    </View>
  );
};

export default SearchBar;

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
