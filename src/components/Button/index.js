import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles.js';

const Button = ({children, onPress, type}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, type === 'blue' ? styles.blueBg : {}]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
