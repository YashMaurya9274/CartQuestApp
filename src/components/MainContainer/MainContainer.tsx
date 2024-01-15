import {SafeAreaView, StatusBar, StyleProp, ViewStyle} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {COLOR_CODE, STATUS_BAR_CONTENT_STYLE} from '../../types/enums';
import styles from './MainContainer.styles';

type Props = {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  navigation: any;
  statusBarBgColor?: string;
  barTextStyle?: STATUS_BAR_CONTENT_STYLE;
};

const MainContainer = ({
  children,
  containerStyle,
  navigation,
  statusBarBgColor,
  barTextStyle,
}: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView style={[styles.mainContainer, containerStyle]}>
      <StatusBar
        barStyle={barTextStyle || 'default'}
        backgroundColor={statusBarBgColor || COLOR_CODE.PRIMARY}
      />

      {children}
    </SafeAreaView>
  );
};

export default MainContainer;
