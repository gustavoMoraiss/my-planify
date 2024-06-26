import React, { useEffect, useState } from 'react';
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
import Categories from '../../../components/Categories';
import { categories } from '../../../constants/categories';
import TaskCard from '../../../components/TaskCard';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.data)
  const [category, setCategory] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (category && category !== 'all') {
      const filteredCategory = tasks?.filter(task => task?.category === category)
      setFilteredTasks(filteredCategory)
    } else {
      setFilteredTasks(tasks)
    }
  }, [category, tasks])

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
      <TaskCard title={item.title} description={item.taskDescription} onPress={() => onTaskUpdate(item)} isDone={item?.checked}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Tasks"} />

      <FlatList
        ListHeaderComponent={<View style={{ marginBottom: 24 }}>
          <Title type="thin">To Do Tasks</Title>
          <Categories
            categories={[{ label: 'All', value: 'all' }, ...categories]}
            selectedCategory={category}
            onCategoryPress={setCategory} />
        </View>}
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={item => String(item?.uid)} />

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
