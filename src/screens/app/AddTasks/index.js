import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, Text } from 'react-native';
import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import { categories } from '../../../constants/categories';
import DateInput from '../../../components/DateInput';

const AddTasks = ({ navigation }) => {

  const [category, setCategory] = useState()
  const [deadLine, setDealine] = useState(new Date())


  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} onPress={handleBack}>
        <Image style={styles.backIcon} source={require('../../../assets/resources/back.png')} />
      </Pressable>

      <Title type="thin">Add New Task</Title>

      <Text style={styles.label}>Describe the task</Text>
      <Input outlined placeholder="Type here..." />

      <Text style={styles.label}>Type</Text>
      <Categories
        categories={categories}
        selectedCategory={category}
        onCategoryPress={setCategory} />

      <Text style={styles.label}>Deadline</Text>
      <DateInput value={deadLine} onChange={setDealine}/>
    </SafeAreaView>
  );
};

export default React.memo(AddTasks);
