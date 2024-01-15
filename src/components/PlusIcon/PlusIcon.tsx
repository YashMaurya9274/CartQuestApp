import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './PlusIcon.styles';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  plusTextStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};

const PlusIcon = ({containerStyle, plusTextStyle, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.plusIconContainer, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.plusText, plusTextStyle]}>+</Text>
    </TouchableOpacity>
  );
};

export default PlusIcon;
