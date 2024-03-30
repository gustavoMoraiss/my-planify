import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles.js';

const Button = ({style, children, onPress, type}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, type === 'blue' ? styles.blueBg : {}, style]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
