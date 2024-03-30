import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    padding: 24
  },
  backIcon: {
    width: 32,
    height: 32
  },
  label: {
    fontSize: 12,
    color: colors.black,
    marginHorizontal: 24,
    fontFamily: 'Roboto-Medium'
  }
});
export default styles;
