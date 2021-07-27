import {Color} from '../../common/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = {
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    alignItem: 'center',
  },
  stylePopup: {
    width: wp('85%'),
    flex: 1,
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
  },
};
module.exports = styles;
