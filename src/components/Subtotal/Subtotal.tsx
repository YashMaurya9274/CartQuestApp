import {View} from 'react-native';
import React from 'react';
import SubTotalItem from '@components/SubTotalItem/SubTotalItem';
import PillButton from '@components/PillButton/PillButton';
import styles from './Subtotal.styles';

type Props = {
  subTotal: number;
};

const Subtotal = ({subTotal}: Props) => {
  return (
    <View style={styles.subTotalContainer}>
      <SubTotalItem name="Subtotal" price={subTotal} />
      <SubTotalItem name="Delivery" price={2.0} />
      <SubTotalItem name="Total" price={subTotal + 2} />

      <PillButton
        buttonContainerStyle={styles.buttonStyle}
        title="Proceed to Checkout"
        onPress={() => {}}
      />
    </View>
  );
};

export default Subtotal;
