import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

export default function LoginSignupHeader({ navigation, AppState }) {
    const { userID, setUserID, setNoteID, setAllNotes, setScreenName } = AppState;

    const handleLogout = () => {
        setUserID(0);
        AsyncStorage.removeItem('@userID');
        setNoteID(0);
        AsyncStorage.removeItem('@noteID');
        setAllNotes([]);
        AsyncStorage.removeItem('@notes');
        navigation.navigate('LoginSignup');
    }

    return (
        <View style={styles.headerCont}>
            <Image
                style={styles.logo}
                source={require('../assets/images/logo.png')}
            />
            
            <Text style={styles.text}>Startup Notes</Text>

            {userID > 0
                ? <Icon2 name="logout" size={25} color="#141414" onPress={handleLogout} />
                : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    headerCont: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        paddingTop: StatusBar.currentHeight,
    },

    logo: {
        height:25,
        width:25
    },
    text: {
        fontFamily: 'FredokaOne_400Regular',
        fontSize: 15,
        color: '#141414',
    }
});