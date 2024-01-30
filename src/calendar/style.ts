import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';
import {Theme} from '../types';

export default function getStyle(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: appStyle.calendarBackground
    },
    dayContainer: {
      flex: 1,
      alignItems: 'center'
    },
    emptyDayContainer: {
      flex: 1
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      marginVertical: appStyle.weekVerticalMargin,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    yearItem: {
      alignSelf: "center",
      margin: 5,
      padding: 10
    },
    ...(theme['stylesheet.calendar.main'] || {})
  });
}
