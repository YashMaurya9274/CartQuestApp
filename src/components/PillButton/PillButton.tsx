import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './PillButton.styles';

type Props = {
  title: string;
  onPress: () => void;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

const PillButton = ({
  title,
  onPress,
  buttonContainerStyle,
  titleStyle,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.pillButtonCotainer, buttonContainerStyle]}
      onPress={onPress}>
      <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PillButton;
