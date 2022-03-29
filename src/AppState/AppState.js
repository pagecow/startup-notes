import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import { OpenSans_300Light, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigation from '../AppNavigation/AppNavigation';

export default function AppState() {
    const host = 'https://startupnotes.app';

    const [userID, setUserID] = useState(0);

    const [noteID, setNoteID] = useState(0);
    const [allNotes, setAllNotes] = useState([]);
    const [note, setNote] = useState({});
    const [chosenNoteID, setChosenNoteID] = useState(0);

    const [screenName, setScreenName] = useState('AllNotes');

    const AppState = {
        host,
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
            const localUserID = await AsyncStorage.getItem('@userID');
            console.log("localUserID: ", localUserID);
            if(localUserID !== null) {
                setUserID(Number(localUserID));
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