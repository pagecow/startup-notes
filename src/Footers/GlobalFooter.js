import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

export default function GlobalFooter({ navigation, AppState }) {
    const { host, userID, noteID, setNoteID, allNotes, setAllNotes, setChosenNoteID, screenName, setScreenName } = AppState;

    const newNoteID = noteID + 1;

    const handleCreateNote = async () => {
        const newNote = { noteID: newNoteID, noteTitle: '', noteText: '' };

        await AsyncStorage.setItem('@noteID', `${newNoteID}`);
        await setChosenNoteID(newNoteID);
        await setAllNotes((currentNotes) => [newNote, ...currentNotes]);
        await setNoteID(newNoteID);

        let localNotes = JSON.stringify(allNotes);
        await AsyncStorage.setItem('@notes', localNotes);

        axios
            .post(`${host}/api/notes`, { userID, noteID, allNotes })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        navigation.navigate('CreateNote');
        setScreenName('CreateNote');
    }

    const handleGoHome = async () => {
        navigation.navigate('AllNotes');
        setScreenName('AllNotes');
    }

    return (
        <View style={styles.footerCont}>
            <Icon 
                name={screenName === 'AllNotes' ? "notebook" : "notebook-outline"} 
                size={27} 
                color={screenName === 'AllNotes' ? "#02394A" : "#141414"} 
                onPress={handleGoHome} />
            <Icon2 
                name={screenName === 'CreateNote' ? "md-create" : "md-create-outline"} 
                size={30} 
                color={screenName === 'CreateNote' ? "#02394A" : "#141414"} 
                onPress={handleCreateNote}/>
        </View>
    );
}

const styles = StyleSheet.create({
    footerCont: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 0.75,
        borderTopColor: '#d8d8d8',
    }
});