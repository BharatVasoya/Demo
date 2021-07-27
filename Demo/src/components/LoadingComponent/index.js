import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {TextComponent} from '..';
import {Color, Constants} from '../../common/styles';
import styles from './styles';

class LoadingComponent extends React.Component {
  render() {
    const btnTextStylesArray = [];
    const {isLoading, children} = this.props;

    btnTextStylesArray.push({
      color: Color.WHITE,
      fontSize: Constants.NORMAL,
    });

    return isLoading ? (
      <View style={styles.LoaderContainer}>
        <View style={styles.LoaderWrapper}>
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color={Color.WHITE}
            style={{marginBottom: hp('1%')}}
          />
          <TextComponent style={btnTextStylesArray} normal regularFont>
            Loading
          </TextComponent>
        </View>
      </View>
    ) : null;
  }
}
export default LoadingComponent;
