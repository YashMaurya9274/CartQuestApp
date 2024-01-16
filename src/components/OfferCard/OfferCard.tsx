import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR_CODE} from 'src/types/enums';
import ImageLinks from '@assets/images';
import styles from './OfferCard.styles';
import STRINGS from 'src/constants/strings';

type Props = {
  bgColor?: string;
};

const OfferCard = ({bgColor}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.offerCardContainer,
        {
          backgroundColor: bgColor || COLOR_CODE.PRIMARY_YELLOW,
        },
      ]}>
      <Image source={ImageLinks.galleryOutline} style={styles.offerCardImage} />

      <View>
        <Text style={styles.heading}>{STRINGS.GET}</Text>
        <Text style={styles.subHeading}>{STRINGS.OFF_50}</Text>
        <Text style={styles.description}>{STRINGS.ON_FIRST_3_ORDER}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OfferCard;
