import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Text } from 'react-native';
import Onboarding from './screens/auth/Onboarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    console.log("user", user)

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    if (user) {

        const logout = () => {
            auth()
                .signOut()
                .then(() => console.log('User signed out!'));
        }

        return (
            <>
                <Text style={{ height: 22, margin: 12, }}>Weeeeeelcome</Text>
                <Text onPress={logout}>logout</Text>
            </>)
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
};

export default React.memo(Routes);
