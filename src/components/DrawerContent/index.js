import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';

import { Linking, Text } from 'react-native';
import styles from './style';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../constants/links';

function DrawerContent(props) {
    const { navigation } = props;

    const logout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    const onLinkPress = url => {
        Linking.openURL(url);
    };

    return (
        <DrawerContentScrollView {...props}>
            <Text style={styles.link} onPress={() => navigation.navigate('Home')}>Home</Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Tasks')}>Tasks</Text>
            <Text style={styles.link} onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>Privacy Policy</Text>
            <Text style={styles.link} onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>Terms and Condition out</Text>
            <Text style={styles.link} onPress={logout}>Log out</Text>
        </DrawerContentScrollView>
    );
}

export default React.memo(DrawerContent)