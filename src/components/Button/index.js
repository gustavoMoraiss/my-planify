import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import colors from '../../constants/colors.js';

const Button = ({ style, children, onPress, type, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, type === 'blue' ? styles.blueBg : {}, style]}>
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={styles.buttonText}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(Button);
