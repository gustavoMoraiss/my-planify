import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';

const Tasks = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tasks</Text>
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
