import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SafeAreaView, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {getCountryDataWatcher} from '../../store/action';

// import components
import styles from './styles';
import {Color, Constants} from '../../common/styles';
import {
  ButtonComponent,
  TextInputComponent,
  ToastComponent,
  LoadingComponent,
} from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      message: '',
      isDisplay: false,
      isLoading: false,
      isSuccess: false,
    };
  }

  componentDidMount() {}

  //-----GET COUNTRY DATA API CALLING... ------//
  getCountryData() {
    this.startLoading();
    const param = {
      country: this.state.searchString,
    };

    this.props.getCountryDataWatcher(
      param,
      response => {
        if (response?.status) {
          this.displayToast('No data found', false);
        } else {
          this.props.navigation.navigate('Details', {
            countryData: response[0],
          });
        }
        this.stopLoading();
      },
      error => {
        this.stopLoading();
      },
    );
  }

  startLoading() {
    this.setState({isLoading: true});
  }

  stopLoading() {
    this.setState({isLoading: false});
  }

  displayToast(message, isSuccess) {
    this.setState({message: message, isDisplay: true, isSuccess: isSuccess});
    setTimeout(() => this.setState({message: '', isDisplay: false}), 4000);
  }

  render() {
    const {searchString, isSuccess, isDisplay, isLoading} = this.state;
    return (
      <SafeAreaView style={[styles.container, {alignItems: 'center'}]}>
        <LoadingComponent children={'Loading...'} isLoading={isLoading} />
        <View
          style={{
            flexDirection: 'column',
            width: wp('90%'),
            alignItems: 'center',
          }}>
          <TextInputComponent
            txtRef={ref => (this.txtPassRef = ref)}
            onChangeText={text => this.setState({searchString: text})}
            value={searchString}
            placeholder={'Country'}
            children={'Enter country'}
            bordered
            pleft={wp('2%')}
            borderColor={Color.GREY}
          />

          <ButtonComponent
            click={() => {
              if (searchString === '') {
                this.displayToast('Please add country name', false);
              } else {
                this.getCountryData();
              }
            }}
            borderRadius={hp('5%')}
            backgroundColor={searchString !== '' ? Color.GREEN : Color.GREY_40}
            textColor={Color.WHITE}
            mtop={hp('5%')}
            textSize={Constants.NORMAL}
            children="Submit"
          />
        </View>
        <ToastComponent
          children={this.state.message}
          isDisplay={isDisplay}
          isSuccess={isSuccess}
        />
      </SafeAreaView>
    );
  }
}

//---- Connect to props functions and values -----//
function mapStateToProps({getCountryDataReducer}) {
  const {getCountryDataError, getCountryDataLoader, getCountryDataData} =
    getCountryDataReducer;
  return {getCountryDataError, getCountryDataLoader, getCountryDataData};
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCountryDataWatcher,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
