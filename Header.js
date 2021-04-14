import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
 
function Header() {
  return (
    <View style={styles.container}>
       <Text>Conversor de moeda</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      paddingBottom: 20,
      backgroundColor: 'rgb(60, 179, 113)',
      alignItems: 'center',
    }
  
  });
 
export default Header;