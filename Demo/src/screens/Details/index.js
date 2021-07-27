import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SafeAreaView, View, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SvgUri from 'react-native-svg-uri';

import {getWeatherDataWatcher} from '../../store/action';

// import components
import styles from './styles';
import {Color, Constants} from '../../common/styles';
import {
  ButtonComponent,
  TextComponent,
  ToastComponent,
  LoadingComponent,
} from '../../components';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      weatherData: null,
      message: '',
      isDisplay: false,
      isLoading: false,
      isSuccess: false,
    };
  }

  componentDidMount() {}

  //-----GET WEATHER DATA API CALLING... ------//
  getWeatherData() {
    this.startLoading();
    const param = {
      city: this.state.searchString,
    };

    this.props.getWeatherDataWatcher(
      param,
      response => {
        this.setState({weatherData: response.current});
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
    const {
      searchString,
      isSuccess,
      isDisplay,
      isLoading,
      message,
      weatherData,
    } = this.state;
    const {countryData} = this.props.route.params;

    return (
      <SafeAreaView style={[styles.container, {alignItems: 'center'}]}>
        <LoadingComponent children={'Loading...'} isLoading={isLoading} />
        <View
          style={{
            flexDirection: 'column',
            width: wp('90%'),
          }}>
          <View style={{flexDirection: 'column'}}>
            <TextComponent small color={Color.GREY_40} children={'Capital'} />
            <TextComponent color={Color.BLACK} children={countryData.capital} />
          </View>

          <View style={{flexDirection: 'column', marginTop: hp('2%')}}>
            <TextComponent
              small
              color={Color.GREY_40}
              children={'Population'}
            />
            <TextComponent
              color={Color.BLACK}
              children={countryData.population}
            />
          </View>

          <View style={{flexDirection: 'column', marginTop: hp('2%')}}>
            <TextComponent small color={Color.GREY_40} children={'latlng'} />
            <TextComponent
              color={Color.BLACK}
              children={`${countryData.latlng[0]} , ${countryData.latlng[1]}`}
            />
          </View>

          <View style={{flexDirection: 'column', marginTop: hp('2%')}}>
            <TextComponent small color={Color.GREY_40} children={'Flag'} />

            <SvgUri
              width={wp('15%')}
              height={wp('15%')}
              source={{
                uri: countryData.flag,
              }}
            />
          </View>

          <View style={{alignSelf: 'center', marginVertical: hp('2%')}}>
            <ButtonComponent
              click={() => {
                this.setState({searchString: countryData.capital}, () => {
                  this.getWeatherData();
                });
              }}
              borderRadius={hp('5%')}
              backgroundColor={Color.GREEN}
              textColor={Color.WHITE}
              textSize={Constants.NORMAL}
              children="Capital Weather"
            />
          </View>

          {weatherData === null ? null : (
            <View style={{}}>
              <View style={{flexDirection: 'column'}}>
                <TextComponent
                  small
                  color={Color.GREY_40}
                  children={'Temperature'}
                />
                <TextComponent
                  color={Color.BLACK}
                  children={weatherData.temperature}
                />
              </View>

              <View style={{flexDirection: 'column', marginTop: hp('2%')}}>
                <TextComponent
                  small
                  color={Color.GREY_40}
                  children={'Weather'}
                />
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={{
                    flexGrow: 1,
                  }}>
                  {weatherData.weather_icons.map((icons, index) => {
                    return (
                      <Image
                        resizeMode={'contain'}
                        source={{uri: icons}}
                        style={{
                          width: wp('12%'),
                          height: wp('12%'),
                          borderRadius: wp('1%'),
                          marginRight: wp('5%'),
                        }}
                      />
                    );
                  })}
                </ScrollView>
              </View>

              <View style={{flexDirection: 'column', marginTop: hp('2%')}}>
                <TextComponent
                  small
                  color={Color.GREY_40}
                  children={'Wind speed'}
                />
                <TextComponent
                  color={Color.BLACK}
                  children={weatherData.wind_speed}
                />
              </View>

              <View style={{flexDirection: 'column', marginTop: hp('2%')}}>
                <TextComponent
                  small
                  color={Color.GREY_40}
                  children={'Precip'}
                />
                <TextComponent
                  color={Color.BLACK}
                  children={weatherData.precip}
                />
              </View>
            </View>
          )}
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
function mapStateToProps({getWeatherDataReducer}) {
  const {getWeatherDataError, getWeatherDataLoader, getWeatherDataData} =
    getWeatherDataReducer;
  return {getWeatherDataError, getWeatherDataLoader, getWeatherDataData};
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getWeatherDataWatcher,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Details);
