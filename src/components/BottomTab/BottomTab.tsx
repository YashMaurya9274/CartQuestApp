import {Image, ImageSourcePropType, Text, View} from 'react-native';
import React from 'react';
import {BACKGROUND_COLOR} from 'src/types/enums';
import styles from './BottomTab.styles';

type Props = {
  focused: boolean;
  imageSourceOutline: ImageSourcePropType;
  imageSourceSolid?: ImageSourcePropType;
  label: string;
  imageTwoColor?: string;
};

const BottomTab = ({
  focused,
  imageSourceOutline,
  imageSourceSolid,
  label,
  imageTwoColor,
}: Props) => {
  const getImageFocusColor = () => {
    if (focused) {
      if (imageTwoColor) {
        return imageTwoColor;
      }
    }
  };

  return (
    <View
      style={[
        styles.bottomTabContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          position: focused ? 'absolute' : 'relative',
          bottom: focused ? 8 : null,
          backgroundColor: focused
            ? BACKGROUND_COLOR.BLACK
            : BACKGROUND_COLOR.LIGHT_GRAY,
          height: focused ? 56 : null,
          width: focused ? 56 : null,
          justifyContent: focused ? 'center' : 'flex-start',
          borderRadius: focused ? 100 : 0,
        },
      ]}>
      <Image
        source={focused ? imageSourceSolid : imageSourceOutline}
        style={[
          styles.bottomTabImage,
          {
            tintColor: getImageFocusColor(),
          },
        ]}
      />

      {!focused && <Text style={styles.bottomTabText}>{label}</Text>}
    </View>
  );
};

export default BottomTab;
