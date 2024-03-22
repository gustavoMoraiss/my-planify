import React, {useState} from 'react';
import {
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

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);

  const goToSigIn = () => {
    navigation.navigate('Signin');
  };

  const onCheckboxPress = () => {
    setAgreed(value => !agreed);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder={'First name'} />
      <Input placeholder={'Last name'} />
      <Input placeholder={'E-mail'} keyboardType="email-address" />
      <Input placeholder={'Password'} secureTextEntry />
      <Input placeholder={'Confirm Password'} secureTextEntry />

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

      <Button type={'blue'}>Create Account</Button>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Already registered? </Text>
        <TouchableOpacity onPress={goToSigIn}>
          <Text style={styles.footerLink}>Sign in!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
