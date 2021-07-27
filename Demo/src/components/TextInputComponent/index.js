import React from 'react';
import {View, TouchableOpacity, Keyboard, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {TextComponent} from '../../components';
import {Color, Constants, Matrics} from '../../common/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class TextInputComponent extends React.Component {
  onClick = () => {
    Keyboard.dismiss();
    if (this.props.click) {
      this.props.click();
    }
  };

  render() {
    const btnContainerStylesArray = [];
    const btnTextStylesArray = [];
    const {
      btn_block,
      mtop,
      mbottom,
      mleft,
      mright,
      center,
      borderColor,
      borderRadius,
      textColor,
      textSize,
      style,
      children,
      bordered,
      isMultiline,
      isSecureText,
      placeholder,
      value,
      keyboardType,
      isEditable,
      onChangeText,
      autoCapitalize,
      maxNumber,
    } = this.props;

    btnContainerStylesArray.push({
      paddingHorizontal: wp('2%'),
    });

    const btnWholeStyles = [];
    btnWholeStyles.push({
      marginTop: mtop,
      marginBottom: mbottom,
      marginLeft: mleft,
      marginRight: mright,
    });

    if (btn_block) {
      btnWholeStyles.push({
        width: '100%',
        height: hp('6%'),
      });
    }

    if (center) {
      btnWholeStyles.push({
        alignSelf: 'center',
      });
    }

    if (bordered) {
      btnContainerStylesArray.push({
        borderColor,
        borderWidth: 1,
        borderRadius: wp('2%'),
      });
    }

    btnTextStylesArray.push({
      color: Color.DARK_GREY,
      fontSize: Constants.SMALL,
    });

    return (
      <View style={[style, btnWholeStyles, {borderRadius}]}>
        {children === '' ? null : (
          <TextComponent mbottom={hp('0.5%')} style={btnTextStylesArray}>
            {children}
          </TextComponent>
        )}

        <View style={btnContainerStylesArray}>
          <TextInput
            ref={this.props.txtRef}
            style={{
              height: hp('6%'),
              textAlign: 'left',
              fontSize: Constants.NORMAL,
              color: Color.DARK_GREY,
            }}
            multiline={isMultiline}
            onChangeText={onChangeText}
            secureTextEntry={isSecureText}
            placeholder={placeholder}
            placeholderTextColor={Color.LIGHT_GRAY}
            value={value}
            keyboardType={keyboardType}
            editable={isEditable}
            autoCapitalize={autoCapitalize ? 'none' : null}
            maxLength={maxNumber ? 3 : null}
            selectionColor={Color.PRIMARY}
            onSubmitEditing={this.props.onSubmitEditing}
            returnKeyType={this.props.returnKeyType}
            blurOnSubmit={this.props.returnKeyType === 'next' ? false : true}
          />
        </View>
      </View>
    );
  }
}

TextInputComponent.defaultProps = {
  ...TouchableOpacity.defaultProps,
  textColor: Color.WHITE,
  textSize: Constants.NORMAL,
  btn_block: true,
  borderRadius: wp('3%'),
  mtop: hp('2%'),
  mbottom: 0,
  mleft: 0,
  mright: 0,
  center: false,
  borderColor: Color.PRIMARY,
  bordered: false,

  ...TextInput.defaultProps,
  multiline: false,
  secureTextEntry: false,
  placeholder: '',
  value: '',
  keyboardType: 'default',
  editable: true,
};
TextInputComponent.propTypes = {
  ...TouchableOpacity.propTypes,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  borderColor: PropTypes.string,

  btn_block: PropTypes.bool,
  borderRadius: PropTypes.number,
  mtop: PropTypes.number,
  mbottom: PropTypes.number,
  mleft: PropTypes.number,
  mright: PropTypes.number,
  center: PropTypes.bool,
  bordered: PropTypes.bool,

  ...TextInput.propTypes,
  isMultiline: PropTypes.bool,
  isSecureText: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  isEditable: PropTypes.bool,
};
export default TextInputComponent;
