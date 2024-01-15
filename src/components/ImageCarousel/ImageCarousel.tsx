/* eslint-disable react-native/no-inline-styles */
import {Image, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {COLOR_CODE} from 'src/types/enums';
import IconButton from '@components/IconButton/IconButton';
import ImageLinks from '@assets/images';
import styles from './ImageCarousel.styles';

type Props = {
  images: string[];
  favourite: boolean;
  addOrRemoveFavourite: () => void;
};

const ImageCarousel = ({images, favourite, addOrRemoveFavourite}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  //   @ts-ignore
  const carouselRef = useRef<Carousel>();

  const renderItem = ({item}: {item: string}) => (
    <Image
      key={item}
      source={{
        uri: item,
      }}
      style={{
        height: 250,
      }}
      resizeMode="stretch"
    />
  );

  return (
    <View style={styles.imageCarouselContainer}>
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={400}
        onSnapToItem={(index: number) => {
          setActiveIndex(index);
        }}
      />

      <IconButton
        imageSource={
          favourite ? ImageLinks.favouriteSolid : ImageLinks.favouriteOutline
        }
        onPress={addOrRemoveFavourite}
        iconButtonContainer={styles.favouriteIconContainer}
        imageStyle={styles.favouriteIcon}
      />

      <View style={styles.carouselIndicatorContainer}>
        {[...Array(images.length)].map((_, index) => (
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
