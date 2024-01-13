import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR_CODE, TEXT_COLOR} from 'src/types/enums';
import ImageLinks from '@assets/images';

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

const styles = StyleSheet.create({
  offerCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 16,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 118,
    width: 230,
  },
  offerCardImage: {
    height: 68,
    width: 68,
  },
  heading: {
    color: TEXT_COLOR.WHITE,
    fontSize: 17,
    fontWeight: '400',
  },
  subHeading: {
    color: TEXT_COLOR.WHITE,
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    color: TEXT_COLOR.WHITE,
    fontSize: 12,
    fontWeight: '300',
  },
});
