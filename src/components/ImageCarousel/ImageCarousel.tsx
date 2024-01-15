/* eslint-disable react-native/no-inline-styles */
import {Image, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {COLOR_CODE} from 'src/types/enums';
import IconButton from '@components/IconButton/IconButton';
import ImageLinks from '@assets/images';
import styles from './ImageCarousel.styles';

const data = [
  {
    id: '1',
    image:
      'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
  },
  {
    id: '2',
    image:
      'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
  },
  {
    id: '3',
    image:
      'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
  },
  {
    id: '4',
    image:
      'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
  },
  {
    id: '5',
    image:
      'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
  },
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  //   @ts-ignore
  const carouselRef = useRef<Carousel>();

  const renderItem = ({item}: any) => (
    <Image
      source={{
        uri: item.image,
      }}
      style={{
        height: 200,
      }}
      resizeMode="cover"
    />
  );

  return (
    <View style={styles.imageCarouselContainer}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={400}
        onSnapToItem={(index: number) => {
          setActiveIndex(index);
        }}
      />

      <IconButton
        imageSource={ImageLinks.favouriteOutline}
        onPress={() => {}}
        iconButtonContainer={styles.favouriteIconContainer}
        imageStyle={styles.favouriteIcon}
      />

      <View style={styles.carouselIndicatorContainer}>
        {[...Array(data.length)].map((_, index) => (
          <TouchableOpacity
            style={[
              styles.carouselIndicator,
              {
                backgroundColor:
                  index === activeIndex ? COLOR_CODE.PRIMARY_YELLOW : '#e6e6e6',
              },
            ]}
            onPress={() => {
              carouselRef.current.snapToItem(index);
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
