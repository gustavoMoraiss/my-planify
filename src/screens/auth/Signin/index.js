import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import auth from '@react-native-firebase/auth';
import styles from './styles';

const Signin = ({ navigation }) => {
  const goTosignUp = () => {
    navigation.navigate('Signup');
  };

  const [values, setValues] = useState()
  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }))
  }

  const onSubmit = () => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {

      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else {
          Alert.alert(error.message)
        }
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>
      <Input onChangeText={(val) => onChange(val, "email")} placeholder={'E-mail'} keyboardType="email-address" />
      <Input onChangeText={(val) => onChange(val, "password")} placeholder={'Password'} secureTextEntry />
      <Button onPress={onSubmit} >Login</Button>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Not registered? </Text>
        <TouchableOpacity onPress={goTosignUp}>
          <Text style={styles.footerLink}>Sign up!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Signin);
