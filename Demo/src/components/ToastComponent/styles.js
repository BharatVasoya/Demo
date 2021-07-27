import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = {
  styleView: {
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'tomato',
    width: '90%',
    bottom: '10%',
    zIndex: 1,
    borderRadius: wp('2%'),
    padding: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
    alignSelf: 'center',
  },
};
module.exports = styles;
