import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { setTasks } from '../../../store/tasks';

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user.data)
  const tasks = useSelector((state) => state.tasks.data)
  const dispatch = useDispatch();

  console.log(' tasks: ', tasks);


  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId', '==', user?.uid)
      .get()
      .then(querySnapshot => {

        const tasksList = []

        querySnapshot.forEach(documentSnapshot => {
          tasksList.push({
            uid: documentSnapshot.id,
            ...documentSnapshot.data() || {}
          })
        });

        dispatch(setTasks(tasksList))
      })
  }, [user, dispatch]);

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
