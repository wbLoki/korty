import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import {
    Button,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

export default function Index() {
    const [user, setUser] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        GoogleSignin.configure({
            iosClientId: "1096567925493-nrsfralu5tdqcg2j480g2hh870i4bjdg.apps.googleusercontent.com",
            webClientId: "1096567925493-ofl8psaj4pvbhvg1e4cv8a7sqbehkl22.apps.googleusercontent.com",
            profileImageSize: 150,
        })
    })

    const signUp = async () => {
        setLoading(true);
        try {
            await auth().createUserWithEmailAndPassword(
                user.email,
                user.password
            );
        } catch (error) {
            console.log(error);
        }
    };

    const signIn = () => {};

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={user.email}
                    onChangeText={(email) => setUser({ ...user, email })}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={user.password}
                    onChangeText={(password) => setUser({ ...user, password })}
                    secureTextEntry
                />
                <Button title='Sign Up' onPress={signUp} />
                <Button title='Login' onPress={signIn} />
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    },
});
