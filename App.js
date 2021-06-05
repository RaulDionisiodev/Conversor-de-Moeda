import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './Form';
import Header from './Header'
import { RootSiblingParent } from 'react-native-root-siblings'

export default function App() {
  return (
    <>
      <RootSiblingParent> 
        <Header />
        <Form></Form>
        <View style={styles.container}> 
        </View>
      </RootSiblingParent> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue'
  },
});
