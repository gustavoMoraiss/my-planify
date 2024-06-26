import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {

  const navigation = useNavigation()

  const openDrawer = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.container} >
      <Pressable onPress={openDrawer} hitSlop={8}>
        <Image style={styles.icon} source={require('../../assets/resources/menu.png')} />
      </Pressable>
      <Text style={styles.title} >{title}</Text>
      <View style={styles.icon} />
    </View>
  );
};

export default React.memo(Header);
