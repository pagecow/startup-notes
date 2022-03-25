import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import { OpenSans_300Light, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigation from '../AppNavigation/AppNavigation';

export default function AppState() {
    const [userID, setUserID] = useState(0);
    const [noteID, setNoteID] = useState(0);
    const [allNotes, setAllNotes] = useState([]);
    const [note, setNote] = useState({});
    const [chosenNoteID, setChosenNoteID] = useState(0);
    const [screenName, setScreenName] = useState('AllNotes');

    const AppState = {
        userID, setUserID,
        noteID, setNoteID,
        allNotes, setAllNotes,
        note, setNote,
        chosenNoteID, setChosenNoteID,
        screenName, setScreenName
    };

    let [fontsLoaded] = useFonts({
        FredokaOne_400Regular, OpenSans_300Light, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold
    });

    useEffect(async () => {
        try {
            const localNoteID = await AsyncStorage.getItem('@noteID');
            console.log("localNoteID: ", localNoteID);
            if(localNoteID !== null) {
                setNoteID(Number(localNoteID));
            } else {
                await AsyncStorage.setItem('@noteID', '0');
            }

            const localNotes = await AsyncStorage.getItem('@notes');
            console.log("localNotes: ", localNotes);
            if(localNotes !== null) {
                setAllNotes(JSON.parse(localNotes));
            }
        } catch(e) {
            console.log(e);
        }
    }, []);

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <AppNavigation AppState={AppState} />
    }
}