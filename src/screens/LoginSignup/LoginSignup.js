import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import GlobalHeader from '../../Headers/LoginSignupHeader';

export default function LoginSignup({ navigation, AppState }) {
    const { host, userID, setUserID, noteID, setNoteID, allNotes, setAllNotes } = AppState;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        if(userID) {
            navigation.navigate('AllNotes');
        }
    })

    const handleSignup = async () => {
        axios
            .post(`${host}/api/auth/register`, { email, password })
            .then(async (res) => {
                await setUserID(res.data.user_id);
                await setNoteID(res.data.note_id);
                await setAllNotes(res.data.notes);

                let localUserID = JSON.stringify(userID);
                await AsyncStorage.setItem('@userID', localUserID);
                let localNoteID = JSON.stringify(noteID);
                await AsyncStorage.setItem('@noteID', localNoteID);
                let localNotes = JSON.stringify(allNotes);
                await AsyncStorage.setItem('@notes', localNotes);

                setEmail('');
                setPassword('');

                navigation.navigate('AllNotes');
            })
            .catch(err => {
                alert("Sorry, that email is already in use. Try logging in or registering with another email.")
            })
    }

    const handleLogin = async () => {
        axios
            .post(`${host}/api/auth/login`, { email, password })
            .then(async (res) => {
                await setUserID(res.data.user_id);
                await setNoteID(res.data.note_id);
                await setAllNotes(res.data.notes);

                let localUserID = JSON.stringify(userID);
                await AsyncStorage.setItem('@userID', localUserID);
                let localNoteID = JSON.stringify(noteID);
                await AsyncStorage.setItem('@noteID', localNoteID);
                let localNotes = JSON.stringify(allNotes);
                await AsyncStorage.setItem('@notes', localNotes);

                setEmail('');
                setPassword('');

                navigation.navigate('AllNotes');
            })
            .catch(err => {
                console.log(err);
                alert("Sorry, that email and password did not match out records. Please try again.")
            })
    }

    if(Platform.OS === 'web') {
        return (
            <View style={styles.screen}>
                <Text style={styles.siteConstuctionText}>Site is under construction.</Text>
                <Text style={styles.siteConstuctionText}>You can find the Startup Notes app on the Apple App Store or the Google Play Store.</Text>
                <Text style={styles.siteConstuctionText}>If you have any questions, please email: tj@nativenotify.com</Text>
            </View>
        )
    } else {
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
                        textContentType={'emailAddress'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Password'}
                        value={password}
                        onChangeText={setPassword}
                        multiline={true}
                        textContentType={'password'}
                        secureTextEntry={true}
                    />
                    {showLogin 
                        ? <TouchableOpacity style={styles.saveButton} onPress={handleLogin}>
                            <Text style={styles.saveButtonText}>Login</Text>
                          </TouchableOpacity> 
                        : <TouchableOpacity style={styles.saveButton} onPress={handleSignup}>
                            <Text style={styles.saveButtonText}>Sign Up</Text>
                          </TouchableOpacity>
                    }
                    
                    <TouchableOpacity onPress={() => setShowLogin(!showLogin)}>
                        <Text style={styles.text}>{showLogin ? "Don't have an account yet? Tap here to Sign up." : "Already have an account? Tap here to Log In."}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }

    
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
        minHeight: 100,
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
    },
    siteConstuctionText: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
    }
});