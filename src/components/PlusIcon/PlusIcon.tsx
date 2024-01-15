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
};

const PlusIcon = ({containerStyle, plusTextStyle}: Props) => {
  return (
    <TouchableOpacity style={[styles.plusIconContainer, containerStyle]}>
      <Text style={[styles.plusText, plusTextStyle]}>+</Text>
    </TouchableOpacity>
  );
};

export default PlusIcon;
