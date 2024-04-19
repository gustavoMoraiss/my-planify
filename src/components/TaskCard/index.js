import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const TaskCard = ({ description, title, onPress, isDone }) => {

 return (
    <TouchableOpacity style={[styles.box, isDone ? styles.selectedItemContainer : {}]} onPress={onPress}>
      <Text style={[styles.title, isDone ? styles.titleChecked: {}]}>{title}</Text>
      <Text style={[styles.subtitle, isDone? styles.subtitleChecked : {}]}>{description}</Text>
    </TouchableOpacity>
  );

};

export default React.memo(TaskCard);
