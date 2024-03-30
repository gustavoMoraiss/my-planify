import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, Text } from 'react-native';
import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import { categories } from '../../../constants/categories';
import DateInput from '../../../components/DateInput';
import Button from '../../../components/Button';
import moment from 'moment';

const AddTasks = ({ navigation }) => {

  const [category, setCategory] = useState()
  const [deadLine, setDealine] = useState(new Date())
  const [titleTask, setTitleTask] = useState()


  const handleBack = () => {
    navigation.goBack()
  }

  const onSubmit = () => {

    const todayFormatted = moment(new Date()).format('YYYY-MM-DD')
    const deadlineFormatted = moment(deadLine).format('YYYY-MM-DD')


    if (!titleTask) {
      Alert.alert('Please enter the task tile')
      return;
    }

    if (moment(deadlineFormatted).isBefore(todayFormatted)) {
      Alert.alert('Please enter the future date')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} onPress={handleBack}>
        <Image style={styles.backIcon} source={require('../../../assets/resources/back.png')} />
      </Pressable>

      <Title type="thin">Add New Task</Title>

      <Text style={styles.label}>Describe the task</Text>
      <Input value={titleTask} onChange={setTitleTask} outlined placeholder="Type here..." />

      <Text style={styles.label}>Type</Text>
      <Categories
        categories={categories}
        selectedCategory={category}
        onCategoryPress={setCategory} />

      <Text style={styles.label}>Deadline</Text>
      <DateInput value={deadLine} onChange={setDealine} />

      <Button style={styles.button} type={'blue'} onPress={onSubmit}>Add the Task</Button>
    </SafeAreaView>
  );
};

export default React.memo(AddTasks);
