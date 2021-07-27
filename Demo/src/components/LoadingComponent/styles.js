import {Color} from '../../common/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = {
  LoaderContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  LoaderWrapper: {
    width: wp('30%'),
    height: wp('30%'),
    backgroundColor: Color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: wp('3%'),
  },
};
module.exports = styles;
