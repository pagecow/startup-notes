import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Keyboard, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GlobalHeader from '../../Headers/GlobalHeader';

export default function LoginSignup({ navigation, AppState }) {
    const { userID, setUserID } = AppState;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = async () => {
        console.log("Before update: ", allNotes[objIndex]);
        allNotesCopy[objIndex].email = email;
        allNotesCopy[objIndex].password = password;
        console.log("After update: ", allNotesCopy[objIndex]);

        await setAllNotes(allNotesCopy);

        let localNotes = JSON.stringify(allNotes);
        await AsyncStorage.setItem('@notes', localNotes);
    }

    return (
        <KeyboardAvoidingView 
            style={styles.screen}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <GlobalHeader navigation={navigation} AppState={AppState} />
            <View style={styles.body}>
                {showLogin ? <Text style={styles.headerText}></Text> : <Text style={styles.headerText}>Sign up to automatically save your notes to the cloud. Automatically sync and access your files across devices.</Text>}
                <TextInput 
                    style={styles.inputs}
                    placeholder={'Email'}
                    value={email}
                    onChangeText={setEmail}
                    multiline={true}
                />
                <TextInput 
                    style={styles.inputs}
                    placeholder={'Password'}
                    value={password}
                    onChangeText={setPassword}
                    multiline={true}
                />
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>{showLogin ? 'Login' : 'Sign Up'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowLogin(!showLogin)}>
                    <Text style={styles.text}>{showLogin ? "Don't have an account yet? Tap here to Sign up." : "Already have an account? Tap here to Log In."}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    body: {
        flex: 9,
        width: '100%',
        paddingLeft: '6%',
        paddingRight: '6%',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },

    headerText: {
        height: '20%',
        fontFamily: 'OpenSans_700Bold',
        fontSize: 18,
        marginTop: 30,
        textAlign: 'center'
    },
    inputs: {
        width: '100%',
        fontFamily: 'OpenSans_700Bold',
        fontSize: 14,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 0.75,
        borderColor: '#d8d8d8',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        borderRadius: 8,
        marginBottom: 10
    },
    password: {
        fontFamily: 'OpenSans_400Regular',
        marginTop: 10,
        fontSize: 16,
        color: '#000'
    },
    saveButton: {
        width: '100%',
        backgroundColor: '#02394A',
        marginTop: 5,
        marginBottom: 15,
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    saveButtonText: {
        color: '#fff',
        fontFamily: 'FredokaOne_400Regular',
        fontSize: 16
    },
    text: {
        fontFamily: 'OpenSans_400Regular',
    }
});