import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { setTasks } from '../../../store/tasks';
import StatusCard from '../../../components/StatusCard';

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user.data)
  const toUpdate = useSelector((state) => state.tasks.toUpdate)
  const tasks = useSelector((state) => state.tasks.data)
  const dispatch = useDispatch();

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
  }, [user, toUpdate, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Home"} />
      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
        <View style={styles.row}>
          <StatusCard label="High Priority" count={3}/>
          <StatusCard label="Due Dealine" count={3} type="error"/>
          <StatusCard label="Quick Win" count={3}/>
        </View>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
