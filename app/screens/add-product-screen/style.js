import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingHorizontal: 20,
  },
  description: {
    height: 100,
  },
  category: {
    color: colors.black,
  },
  button: {
    marginTop: 20,
  },
});
