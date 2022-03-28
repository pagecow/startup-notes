import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Keyboard, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import GlobalFooter from '../../Footers/GlobalFooter';

export default function Note({ navigation, AppState }) {
    const { userID, noteID, chosenNoteID, note, allNotes, setAllNotes } = AppState;
    const [noteTitle, setNoteTitle] = useState(note.noteTitle);
    const [noteText, setNoteText] = useState(note.noteText);
    const [showFooter, setShowFooter] = useState(true);

    let allNotesCopy = allNotes;

    let objIndex = allNotes.findIndex((obj => obj.noteID == chosenNoteID));
    console.log("Chosen note object: ", allNotes[objIndex]);

    useEffect(() => {
        handleUpdate();

        Keyboard.addListener("keyboardDidShow", () => setShowFooter(false));
        Keyboard.addListener("keyboardDidHide", () => setShowFooter(true));
    })

    const handleUpdate = async () => {
        console.log("Before update: ", allNotes[objIndex]);
        allNotesCopy[objIndex].noteTitle = noteTitle;
        allNotesCopy[objIndex].noteText = noteText;
        console.log("After update: ", allNotesCopy[objIndex]);

        await setAllNotes(allNotesCopy);

        let localNotes = JSON.stringify(allNotes);
        await AsyncStorage.setItem('@notes', localNotes);

        axios
            .post(`${host}/api/notes`, { userID, noteID, allNotes })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <KeyboardAvoidingView 
            style={styles.screen}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollViewCont} keyboardShouldPersistTaps={'always'}>
                    <TextInput 
                        style={styles.noteTitle}
                        placeholder={'Note Title'}
                        value={noteTitle}
                        onChangeText={setNoteTitle}
                        multiline={true}
                    />
                    <TextInput 
                        style={styles.noteText}
                        placeholder={'Note Text'}
                        value={noteText}
                        onChangeText={setNoteText}
                        multiline={true}
                   />
                </ScrollView>
            </View>
            {showFooter ? <GlobalFooter AppState={AppState} navigation={navigation} /> : null}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    body: {
        flex: 9,
        width: '100%',
        paddingTop: '6%',
        paddingLeft: '6%',
        paddingRight: '6%',
    },

    noteTitle: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 24,
    },
    noteText: {
        fontFamily: 'OpenSans_400Regular',
        marginTop: 10,
        fontSize: 16,
        color: '#000',
    },
    scrollViewCont: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    saveButtonCont: {
        flex: 1,
        width: '100%',
        paddingLeft: '6%',
        paddingRight: '6%',
        marginTop: 5
    },
    saveButton: {
        backgroundColor: '#02394A',
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
    }
});