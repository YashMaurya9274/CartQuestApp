import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BACKGROUND_COLOR, TEXT_COLOR} from 'src/types/enums';

type Props = {
  focused: boolean;
  imageSourceOutline: ImageSourcePropType;
  imageSourceSolid?: ImageSourcePropType;
  label: string;
};

const BottomTab = ({
  focused,
  imageSourceOutline,
  imageSourceSolid,
  label,
}: Props) => {
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
        style={styles.bottomTabImage}
      />

      {!focused && <Text style={styles.bottomTabText}>{label}</Text>}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomTabContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  bottomTabImage: {
    width: 24,
    height: 24,
  },
  bottomTabText: {
    color: TEXT_COLOR.GRAY,
    fontSize: 12,
  },
});
