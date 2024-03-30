import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  outlinedInput: {
    borderRadius: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    borderColor: colors.grey,
    marginHorizontal: 24,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: colors.grey,
    fontFamily: 'Roboto-Light',
    fontSize: 16
  },
  icon: {
    width: 16,
    icon: 16,
    marginRight: 8,
    marginHorizontal: 24
  }
});

export default styles;
