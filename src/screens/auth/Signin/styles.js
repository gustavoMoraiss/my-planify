import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
  },
  footerText: {
    color: colors.grey,
    fontSize: 15,
    textAlign: 'center',
  },
  footerLink: {
    color: colors.purple,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styles;
