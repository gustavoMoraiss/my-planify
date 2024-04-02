import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import getStyles from './styles.js';

const StatusCard = ({ label, count, type }) => {
  const navigation = useNavigation()
  const styles = getStyles(type)

  const onPress = () => {
    navigation.navigate('Tasks')
  }

  return (
    <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
      <Text style={styles.label} >{label}</Text>
      <Text style={styles.count} >{count}</Text>
    </Pressable>
  );
};

export default React.memo(StatusCard);
