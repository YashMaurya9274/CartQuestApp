import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ImageLinks from '@assets/images';
import {BACKGROUND_COLOR} from 'src/types/enums';
import {useNavigation} from '@react-navigation/native';

const BackIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backContainer}>
      <Image source={ImageLinks.chevronLeft} style={styles.backImage} />
    </TouchableOpacity>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  backContainer: {
    backgroundColor: BACKGROUND_COLOR.DEFAULT,
    padding: 12,
    borderRadius: 100,
  },
  backImage: {
    height: 10,
    width: 10,
    objectFit: 'contain',
  },
});
