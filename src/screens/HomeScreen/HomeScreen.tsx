import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import MainContainer from '@components/MainContainer/MainContainer';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigators/RootNavigator';
import CartIcon from '@components/CartIcon/CartIcon';
import SearchBar from '@components/SearchBar/SearchBar';
import OptionCard from '@components/OptionCard/OptionCard';
import OfferCard from '@components/OfferCard/OfferCard';
import Products from '@components/Products/Products';
import styles from './HomeScreen.styles';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const data = [
  {
    id: 1,
    image:
      'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
    price: 299,
    name: 'Clown Tang.H03',
  },
  {
    id: 2,
    image:
      'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
    price: 299,
    name: 'Clown Tang.H03',
  },
  {
    id: 3,
    image:
      'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
    price: 299,
    name: 'Clown Tang.H03',
  },
  {
    id: 4,
    image:
      'https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg',
    price: 299,
    name: 'Clown Tang.H03',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <MainContainer navigation={navigation}>
      <ScrollView
        style={styles.homeContainer}
        contentContainerStyle={styles.homeContentContainer}>
        <View style={styles.homeTop}>
          <View style={styles.homeTopNameContainer}>
            <Text style={styles.homeTopName}>Hello, Rahul</Text>
            <CartIcon />
          </View>

          <SearchBar />

          <View style={styles.homeBottom}>
            <OptionCard
              textOne="Delivery To"
              textTwo="Green Way 3000, Sylhet"
            />
            <OptionCard textOne="Within" textTwo="1 Hour" />
          </View>
        </View>

        <ScrollView
          style={styles.offers}
          contentContainerStyle={styles.offerContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </ScrollView>

        <Products data={data} navigation={navigation} />
      </ScrollView>
    </MainContainer>
  );
};

export default HomeScreen;
