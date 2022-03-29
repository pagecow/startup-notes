import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useForceUpdate from 'use-force-update';
import axios from 'axios';

import GlobalHeader from '../../Headers/GlobalHeader';
import GlobalFooter from '../../Footers/GlobalFooter';

import Icon from 'react-native-vector-icons/Feather';

export default function AllNotes({ navigation, AppState }) {
    const { host, userID, noteID, allNotes, setAllNotes, setChosenNoteID, setNote, setScreenName } = AppState;

    const forceUpdate = useForceUpdate();
    useIsFocused();

    const handlePress = async (noteObj) => {
        await setChosenNoteID(noteObj.noteID);
        await setNote(noteObj);
        navigation.navigate('Note');
        setScreenName('CreateNote');
    }

    const confirmAlert = (noteObj) => {
        Alert.alert(
            "Wait! Do you want to delete your note forever?",
            "This cannot be undone!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Yes, delete my note forever", onPress: () => handleDelete(noteObj) }
            ]
        );
    }

    const handleDelete = async (noteObj) => {
        console.log("handleDelete triggered");
        let allNotesCopy = allNotes;
        let objIndex = allNotes.findIndex((obj => obj.noteID == noteObj.noteID));

        await allNotesCopy.splice(objIndex, 1);

        await setAllNotes(allNotesCopy);
        
        let localNotes = JSON.stringify(allNotes);
        await AsyncStorage.setItem('@notes', localNotes);

        axios
            .post(`${host}/api/notes`, { userID, noteID, allNotes })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        forceUpdate();
    }

    
    return (
        <View style={styles.screen}>
            <GlobalHeader navigation={navigation} AppState={AppState} />
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollViewCont}>
                    { allNotes.map((e, i) => {
                        return (
                            <View key={i} style={styles.noteCont}>
                                <Icon
                                    style={styles.deleteButton} 
                                    name="x-circle" 
                                    onPress={() => confirmAlert(e)} 
                                />
                                <TouchableOpacity  
                                    onPress={() => handlePress(e)}
                                >
                                    <Text 
                                        style={styles.noteTitle}
                                        numberOfLines={1}
                                    >{e.noteTitle}</Text>
                                    <Text 
                                        style={styles.noteText} 
                                        numberOfLines={1}
                                    >{e.noteText}</Text>
                                </TouchableOpacity>
                                
                            </View>
                            
                        )
                    }) }
                </ScrollView>
            </View>
            <GlobalFooter AppState={AppState} navigation={navigation} />
        </View>
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
        flex: 8,
        width: '100%',
        paddingLeft: '2%',
        paddingRight: '2%',
        backgroundColor: '#f4f4f4',
    },

    noteCont: {
        marginTop: 0,
        marginBottom: 15,
        marginLeft: '0.5%',
        marginRight: '0.5%',
        padding: 15,
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
    },
    deleteButton: {
        position: 'absolute',
        right: 8,
        top: 8,
        zIndex: 10,
        fontSize: 14,
        color: '#990000'
    },
    noteTitle: {
        width: '90%',
        fontFamily: 'OpenSans_600SemiBold',
        marginBottom: 5,
        fontSize: 14,
    },
    noteText: {
        fontFamily: 'OpenSans_300Light',
        marginTop: 2,
        fontSize: 14,
    },
    scrollViewCont: {
        paddingTop: 20,
        paddingBottom: 200
    }
});