import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import HomePage from './pages/HomePage';
import React from 'react';
import { useFonts } from 'expo-font';

AppRegistry.registerComponent('main', () => App);

export default function App() {
  const [fontLoaded,fontError] = useFonts({
    "Poppins": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  })

  if (!fontLoaded&& !fontError){
    return null;
  }
  return (
    <View style={styles.container}>
      <HomePage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
