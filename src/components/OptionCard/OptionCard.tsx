import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageLinks from '@assets/images';
import {TEXT_COLOR} from 'src/types/enums';

type Props = {
  textOne: string;
  textTwo: string;
};

const OptionCard = ({textOne, textTwo}: Props) => {
  return (
    <View style={styles.optionCardContainer}>
      <Text style={styles.optionCardTextOne}>{textOne}</Text>
      <View style={styles.lineTwoContainer}>
        <Text style={styles.optionCardTextTwo}>{textTwo}</Text>
        <Image
          source={ImageLinks.chevronDown}
          style={styles.optionCardChevronDown}
        />
      </View>
    </View>
  );
};

export default OptionCard;

const styles = StyleSheet.create({
  optionCardContainer: {
    display: 'flex',
    gap: 4,
  },
  optionCardTextOne: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    opacity: 0.5,
    color: TEXT_COLOR.LIGHT_GRAY,
  },
  lineTwoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  optionCardTextTwo: {
    fontSize: 14,
    fontWeight: '500',
    color: TEXT_COLOR.LIGHT_GRAY,
  },
  optionCardChevronDown: {
    height: 8,
    width: 8,
    objectFit: 'contain',
  },
});
