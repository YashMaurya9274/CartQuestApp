import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './IconButton.styles';

type Props = {
  onPress: () => void;
  imageSource: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  iconButtonContainer?: StyleProp<ViewStyle>;
};

const IconButton = ({
  onPress,
  imageSource,
  imageStyle,
  iconButtonContainer,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.textIconContainer, iconButtonContainer]}>
      <Image source={imageSource} style={[styles.textSymbol, imageStyle]} />
    </TouchableOpacity>
  );
};

export default IconButton;
