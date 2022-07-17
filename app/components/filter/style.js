import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    selected: {
      backgroundColor: colors.white,
      paddingHorizontal: 10,
      flex: 1,
      marginHorizontal: 3,
      borderRadius: 10,
      borderColor: colors.black,
      borderWidth: 1,
      alignItems: 'center',
      paddingVertical: 5,
      justifyContent: 'center',
    },
    non_selected: {
      backgroundColor: colors.black,
      paddingHorizontal: 10,
      marginHorizontal: 3,
      borderRadius: 10,
      paddingVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
  },
  title: {
    selected: {
      fontSize: 10,
      color: colors.black,
      fontWeight: 'bold',
    },
    non_selected: {
      fontSize: 10,
      fontWeight: 'bold',
      color: colors.white,
    },
  },
});
