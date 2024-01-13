import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {BACKGROUND_COLOR, TEXT_COLOR} from 'src/types/enums';

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

const styles = StyleSheet.create({
  plusIconContainer: {
    backgroundColor: BACKGROUND_COLOR.PRIMARY_DARK,
    height: 20,
    width: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: TEXT_COLOR.WHITE,
    marginBottom: 2,
  },
});
