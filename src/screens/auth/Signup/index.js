import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import {
  Alert,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../../constants/links';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const Signup = ({ navigation }) => {
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState();

  console.log("values", values)

  const goToSigIn = () => {
    navigation.navigate('Signin');
  };

  const onCheckboxPress = () => {
    setAgreed(value => !agreed);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }))
  }

  const onSubmit = () => {

    if (values.password !== values.confirm_password) {
      Alert.alert("Passwords do not match!")
      return
    }

    if (!agreed) {
      Alert.alert("You should agree to the terms.")
      return;
    }

    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        Alert.alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.log(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Join the hub!</Title>
        <Input onChangeText={(val) => onChange(val, "firts_name")} placeholder={'First name'} />
        <Input onChangeText={(val) => onChange(val, "last_name")} placeholder={'Last name'} />
        <Input onChangeText={(val) => onChange(val, "email")} placeholder={'E-mail'} keyboardType="email-address" />
        <Input onChangeText={(val) => onChange(val, "password")} placeholder={'Password'} secureTextEntry />
        <Input onChangeText={(val) => onChange(val, "confirm_password")} placeholder={'Confirm Password'} secureTextEntry />

        <View style={styles.row}>
          <Checkbox checked={agreed} onPress={onCheckboxPress} />
          <Text style={styles.agreeText}>
            I agree to{' '}
            <Text
              style={styles.textLink}
              onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
              Terms and Conditions
            </Text>
            {' and '}
            <Text
              style={styles.textLink}
              onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
              Privacy Policy
            </Text>
          </Text>
        </View>

        <Button onPress={onSubmit} type={'blue'}>Create Account</Button>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already registered? </Text>
          <TouchableOpacity onPress={goToSigIn}>
            <Text style={styles.footerLink}>Sign in!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
