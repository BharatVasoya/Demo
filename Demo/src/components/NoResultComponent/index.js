import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {TextComponent} from '../../components';
import {Color} from '../../common/styles';

const NoResultView = ({text}) => {
  return (
    <View style={styles.noResultViewStyle}>
      <TextComponent color={Color.GREY} children={text} />
    </View>
  );
};

//----- STYLESHEET FOR COMPONENT -------//

const styles = StyleSheet.create({
  noResultViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultTextStyle: {
    fontSize: wp('3%'),
    color: '#484848',
  },
});

export default NoResultView;
