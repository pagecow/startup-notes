import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

export default function GlobalHeader({ navigation, AppState }) {
    const { setScreenName } = AppState;

    return (
        <View style={styles.headerCont}>
            <TouchableOpacity onPress={() => { navigation.navigate('AllNotes'); setScreenName('AllNotes'); }}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/logo.png')}
                />
            </TouchableOpacity>
            
            <Text style={styles.text}>Startup Notes</Text>

            <Icon name="user" size={35} color="#141414" onPress={() => navigation.navigate('LoginSignup')} />
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