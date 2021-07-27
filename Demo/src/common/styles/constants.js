import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const constants = {
  download: 1,
  install: 2,
  launch: 3,
  watch_video: 4,
  pause_video: 5,
  finish_video: 6,
  react_on_mindful_mission_nudge: 7,
  start_survey: 8,
  finish_survey: 9,
  likes_mission: 10,
  view_journey_content: 11,
  journey_completed: 12,
  view_on_demand_videos: 13,
  attended_live_events: 14,
  completed_mindful_mission: 15,

  LARGE: hp('3%'),
  EXTRA_LARGE: hp('3.3%'),
  NORMAL: hp('2.4%'),
  SMALL: hp('2%'),
  EXTRA_SMALL: hp('1.7%'),
  XXXLARGE: hp('4%'),
};
export default constants;
