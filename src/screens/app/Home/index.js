import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Home"} />
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
