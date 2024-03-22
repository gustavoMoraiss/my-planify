import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.purple,
    width: 17,
    height: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  innerSquare: {
    width: 9.5,
    height: 9.5,
    backgroundColor: colors.purple,
  },
  checkedBox: {
    borderWidth: 2,
  },
});

export default styles;
