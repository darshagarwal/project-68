import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Fb from './screens/fb';
import In from './screens/in';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
      <StatusBar style="auto" />
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Fb:{screen:Fb},
  In:{screen:In},
})

const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
