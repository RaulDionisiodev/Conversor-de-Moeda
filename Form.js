import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Picker from 'react-native-picker-select';

function Form() {

    const [valor, setvalor] = useState("")
    
    function handleButtonEuroPress(){
        let total = valor * 6.78;
       alert( "Valor convertido: " + total);
    }

    function handleButtonDolarPress(){
        let total = valor * 5.75;
       alert( "Valor convertido: " + total);
    }

     return(
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} onChangeText={text => setvalor(text)} placeholder="Digite o valor" keyboardType={'numeric'} />
          <TouchableOpacity style={styles.button} onPress={handleButtonDolarPress}>
            <Text style={styles.buttonText}>Converter para Dolar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleButtonEuroPress}>
            <Text style={styles.buttonText}>Converter para Euro</Text>
         </TouchableOpacity>
         </View>
     );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    inputContainer: {
        margin: 20,
        alignItems: 'stretch',
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch',
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'green',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default Form;