import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightGrey,
    color: colors.grey,
    fontFamily: 'Roboto-Light',
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: 10,
    marginVertical: 12,
    fontSize: 16,
  },
  outlinedInput: {
    borderRadius: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: 24
  }
});

export default styles;
