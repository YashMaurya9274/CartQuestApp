/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {BACKGROUND_COLOR} from '../types/enums';
import {RootStackParamList} from './RootNavigator';
import BottomTab from '@components/BottomTab/BottomTab';
import ImageLinks from '@assets/images';
import ComingSoonScreen from '@screens/ComingSoonScreen/ComingSoonScreen';

export type TabStackParamList = {
  Home: undefined;
  Categories: undefined;
  Favourite: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

export type TabNavigatorNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;

function TabNavigator() {
  const navigation = useNavigation<TabNavigatorNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: BACKGROUND_COLOR.LIGHT_GRAY,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          height: 80,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {marginTop: -8},
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return (
              <BottomTab
                focused={focused}
                imageSourceOutline={ImageLinks.homeOutline}
                imageSourceSolid={ImageLinks.homeSolid}
                label={route.name}
              />
            );
          }
          if (route.name === 'Categories') {
            return (
              <BottomTab
                focused={focused}
                imageSourceOutline={ImageLinks.categoryOutline}
                imageSourceSolid={ImageLinks.categorySolid}
                label={route.name}
              />
            );
          }
          if (route.name === 'Favourite') {
            return (
              <BottomTab
                focused={focused}
                imageSourceOutline={ImageLinks.heartOutline}
                imageSourceSolid={ImageLinks.heartOutline}
                label={route.name}
                imageTwoColor="orange"
              />
            );
          }
          if (route.name === 'More') {
            return (
              <BottomTab
                focused={focused}
                imageSourceOutline={ImageLinks.moreVertical}
                imageSourceSolid={ImageLinks.moreVertical}
                label={route.name}
                imageTwoColor="orange"
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={ComingSoonScreen} />
      <Tab.Screen name="Favourite" component={ComingSoonScreen} />
      <Tab.Screen name="More" component={ComingSoonScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
