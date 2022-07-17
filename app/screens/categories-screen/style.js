import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    fontStyle: 'italic',
  }
});
