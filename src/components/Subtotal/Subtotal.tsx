import {View} from 'react-native';
import React from 'react';
import SubTotalItem from '@components/SubTotalItem/SubTotalItem';
import PillButton from '@components/PillButton/PillButton';
import styles from './Subtotal.styles';
import STRINGS from 'src/constants/strings';

type Props = {
  subTotal: number;
};

const Subtotal = ({subTotal}: Props) => {
  return (
    <View style={styles.subTotalContainer}>
      <SubTotalItem name={STRINGS.SUBTOTAL} price={subTotal} />
      <SubTotalItem name={STRINGS.DELIVERY} price={2.0} />
      <SubTotalItem name={STRINGS.TOTAL} price={subTotal + 2} />

      <PillButton
        buttonContainerStyle={styles.buttonStyle}
        title={STRINGS.PROCEED_TO_CHECKOUT}
        titleStyle={styles.buttonTextStyle}
        onPress={() => {}}
      />
    </View>
  );
};

export default Subtotal;
