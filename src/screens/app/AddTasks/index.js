import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';

const AddTasks = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AddTasks</Text>
    </SafeAreaView>
  );
};

export default React.memo(AddTasks);
