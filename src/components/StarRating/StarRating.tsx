import {Image, View} from 'react-native';
import React from 'react';
import ImageLinks from '@assets/images';
import styles from './StarRating.styles';

type Props = {
  rating: number;
};

const StarRating = ({rating}: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({length: fullStars}, () => (
    <Image source={ImageLinks.starFull} style={styles.star} />
  ));

  if (hasHalfStar) {
    stars.push(<Image source={ImageLinks.starHalf} style={styles.star} />);
  }

  return <View style={styles.starsContainer}>{stars}</View>;
};

export default StarRating;
