import {Image, Text, View} from 'react-native';
import React from 'react';
import ImageLinks from '@assets/images';
import styles from './OptionCard.styles';

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
