import moment from 'moment';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import Button from '../../../components/Button';
import Categories from '../../../components/Categories';
import DateInput from '../../../components/DateInput';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import { categories } from '../../../constants/categories';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setToUpdate } from '../../../store/tasks';

const AddTasks = ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.data)
  const [title, setTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [category, setCategory] = useState();
  const [deadline, setDeadline] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const onSubmit = () => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
    if (!title) {
      Alert.alert('Please enter the task title');
      return;
    }
    if (moment(deadlineFormatted).isBefore(today)) {
      Alert.alert('Please enter future date');
      return;
    }

    setLoading(true);
    console.log('user', user)
    firestore()
      .collection('Tasks')
      .add({
        title,
        deadline,
        category,
        taskDescription,
        checked: false,
        userId: user?.uid
      })
      .then(() => {
        setLoading(false);
        dispatch(setToUpdate());
        navigation.navigate('Tasks');
        setTitle('');
setTaskDescription('');
        setDeadline(new Date());
        setCategory(null);
      })
      .catch(e => {
        console.log('error when adding task :>> ', e);
        setLoading(false);
        Alert.alert(e.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} hitSlop={8} onPress={handleBack}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/resources/back.png')}
        />
      </Pressable>

      <ScrollView>
        <Title type="thin">Add New Task</Title>

        <Text style={styles.label}>Title Task</Text>
        <Input
          value={title}
          onChangeText={setTitle}
          outlined
          placeholder="Type here..."
        />

        <Text style={styles.label}>Deadline</Text>
        <DateInput value={deadline} onChange={setDeadline} />

        <Text style={styles.label}>Type</Text>
        <Categories
          categories={categories}
          selectedCategory={category}
          onCategoryPress={setCategory}
        />



        <Text style={styles.label}>Describe the task</Text>
        <Input
          value={taskDescription}
          onChangeText={setTaskDescription}
          outlined
          placeholder="Type here..."
          multiline={true}
          numberOfLines={4}
        />

        <Button style={styles.button} type="blue" onPress={onSubmit} isLoading={loading}>
          Add the Task
        </Button>

      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AddTasks);