import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import Checkbox from '../../../components/Checkbox';
import { setToUpdate } from '../../../store/tasks';

const Tasks = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks.data)
  const [category, setCategory] = useState();

  const onTaskUpdate = item => {
    firestore().collection('Tasks').doc(item?.uid).update({
      checked: !item.checked
    })
    .then(() => {
        dispatch(setToUpdate())
    })
  }

  const renderTask = ({ item }) => {
    return (
      <View style={styles.row}>
        <Checkbox checked={item?.checked} onPress={() => onTaskUpdate(item)}/>
        <Text style={[styles.taskText, item?.checked ? styles.checked : {}]} >{item.title}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Home"} />

      <FlatList
        ListHeaderComponent={<Title type="thin">To Do Tasks</Title>}
        data={tasks}
        renderItem={renderTask}
        keyExtractor={item => String(item?.uid)} />

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
