import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const getStyles = StyleSheet.create({
  box: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 22,
    marginHorizontal: 24,
    marginBottom: 12
  },
  title: {
    color: colors.purple,
    fontSize: 16,
    fontFamily: 'Roboto-Medium'
  }, titleChecked: {
    color: colors.purple,
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    textDecorationLine: 'line-through'
  },
  subtitle: {
    color: 'rgba(64, 53, 114, 0.5)',
    fontSize: 12,
    marginTop: 8
  },
  subtitleChecked: {
    color: 'rgba(64, 53, 114, 0.5)',
    fontSize: 12,
    marginTop: 8,
    textDecorationLine: 'line-through'
  },
  selectedItemContainer: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 15,
    padding: 22,
    marginHorizontal: 24,
    marginBottom: 12,
    borderColor: colors.blue,
  }

});

export default getStyles;
