import React from 'react';
import {View, Keyboard, TextInput} from 'react-native';
import {TextComponent} from '..';
import {Color, Constants} from '../../common/styles';
import styles from './styles';

class ToastComponent extends React.Component {
  render() {
    const btnTextStylesArray = [];
    const {isDisplay, children, isSuccess} = this.props;

    btnTextStylesArray.push({
      color: Color.WHITE,
      fontSize: Constants.SMALL,
    });

    return isDisplay ? (
      <View
        style={[
          styles.styleView,
          {backgroundColor: isSuccess ? 'green' : 'tomato'},
        ]}>
        <TextComponent
          containerStyle={{textAlign: 'center'}}
          style={btnTextStylesArray}>
          {children}
        </TextComponent>
      </View>
    ) : null;
  }
}
export default ToastComponent;
