import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR_CODE} from 'src/types/enums';
import ImageLinks from '@assets/images';
import styles from './OfferCard.styles';

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
        <Text style={styles.heading}>Get</Text>
        <Text style={styles.subHeading}>50% OFF</Text>
        <Text style={styles.description}>On first 03 order</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OfferCard;
