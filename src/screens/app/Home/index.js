import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../../components/Title';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user.data)

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId', '==', user?.uid)
      .get()
      .then(querySnapshot => {
        console.log('Total tasks: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        });
      })
  }, [user]);

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
