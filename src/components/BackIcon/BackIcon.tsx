import React from 'react';
import ImageLinks from '@assets/images';
import {useNavigation} from '@react-navigation/native';
import IconButton from '@components/IconButton/IconButton';

const BackIcon = () => {
  const navigation = useNavigation();

  return (
    <IconButton
      imageSource={ImageLinks.chevronLeft}
      onPress={() => navigation.goBack()}
    />
  );
};

export default BackIcon;
