import React from 'react';
import { Image, Pressable, SafeAreaView, Text } from 'react-native';
import styles from './styles';

const AddTasks = ({ navigation }) => {

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} onPress={handleBack}>
        <Image style={styles.backIcon} source={require('../../../assets/resources/back.png')} />
      </Pressable>
    </SafeAreaView>
  );
};

export default React.memo(AddTasks);
