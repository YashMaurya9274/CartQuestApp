import {View} from 'react-native';
import React from 'react';
import SubTotalItem from '@components/SubTotalItem/SubTotalItem';
import PillButton from '@components/PillButton/PillButton';
import styles from './Subtotal.styles';

const Subtotal = () => {
  return (
    <View style={styles.subTotalContainer}>
      <SubTotalItem name="Subtotal" price={35.96} />
      <SubTotalItem name="Delivery" price={2.0} />
      <SubTotalItem name="Total" price={37.96} />

      <PillButton
        buttonContainerStyle={styles.buttonStyle}
        title="Proceed to Checkout"
        onPress={() => {}}
      />
    </View>
  );
};

export default Subtotal;
