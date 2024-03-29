import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import PlusIcon from '../../../components/PlusIcon';

const Tasks = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Home"} />
      <ScrollView>
      <Text>Tasks</Text>
      </ScrollView>
      <PlusIcon/>
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
