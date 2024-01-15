import {Image} from 'react-native';
import React from 'react';
import MainContainer from '@components/MainContainer/MainContainer';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TabStackParamList} from '@navigators/TabNavigator';
import ImageLinks from '@assets/images';
import styles from './ComingSoonScreen.styles';

export type ComingSoonScreenNavigationProp = NavigationProp<
  TabStackParamList,
  'Categories'
>;

const ComingSoonScreen = () => {
  const navigation = useNavigation<ComingSoonScreenNavigationProp>();
  return (
    <MainContainer navigation={navigation}>
      <Image
        source={ImageLinks.comingSoon}
        style={styles.comingSoonContainer}
      />
    </MainContainer>
  );
};

export default ComingSoonScreen;
