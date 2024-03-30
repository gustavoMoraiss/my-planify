import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../../components/Title';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Home"} />
      <ScrollView>
      <Title type="thin">Daily Tasks:</Title>
        <Text>Home</Text>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
