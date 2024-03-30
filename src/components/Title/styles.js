import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    color: colors.black,
    marginVertical: 24,
  },
  thin: {
    fontWeight: '300',
    color: colors.purple,
    fontFamily: 'Roboto-Light',
    fontSize: 24
  }
});

export default styles;
