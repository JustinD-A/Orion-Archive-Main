import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import HomeScreen from './HomeScreen';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Component } from 'react';


function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri:
          'https://www.clipartkey.com/mpngs/m/117-1174303_orion-the-hunter-drawing-orion-drawings-illustration-orion.png',
      }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/e/e0/Orion_logo.png',
          }}
        />
        <Text>Relive Past Events</Text>
      </View>
      <View style={styles.loginButton}>
        <Text>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
  },
});

export default WelcomeScreen;