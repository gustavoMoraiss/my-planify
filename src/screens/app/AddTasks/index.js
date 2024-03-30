import React from 'react';
import { Image, Pressable, SafeAreaView, Text } from 'react-native';
import styles from './styles';
import Title from '../../../components/Title';

const AddTasks = ({ navigation }) => {

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} onPress={handleBack}>
        <Image style={styles.backIcon} source={require('../../../assets/resources/back.png')} />
      </Pressable>
      <Title type="thin">Add New Task</Title>
    </SafeAreaView>
  );
};

export default React.memo(AddTasks);
