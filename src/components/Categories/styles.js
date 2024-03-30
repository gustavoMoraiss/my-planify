
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    item: {
        fontSize: 12,
        color: colors.blue,
        fontFamily: 'Roboto-Bold',
        padding: 8,
        paddingHorizontal: 12,
        textTransform: 'capitalize',
    },
    selectedItem: {
        color: colors.blue
    },
    itemContainer: {
        borderWidth: 1,
        marginRight: 8,
        borderColor: colors.blue,
        borderRadius: 8,
        marginBottom: 14,
    },
    selectedItemContainer: {
        backgroundColor: colors.lightGrey,
        borderColor: colors.lightGrey,
    }
});

export default styles;
