import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    color: colors.black,
    marginVertical: 12,
  },
  thin: {
    fontWeight: '300',
    color: colors.purple,
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    paddingHorizontal: 24
  }
});

export default styles;
