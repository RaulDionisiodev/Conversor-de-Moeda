import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Coins from './coins';


function Form() {

    const [valor, setvalor] = useState("")
    const [origem, setOrigem] = useState("")
    const [destino, setDestino] = useState("")
    
    async function handleButtonEuroPress(){
        try{
            let response = await fetch(`https://economia.awesomeapi.com.br/last/${origem}-${destino}`)
            let responseJson = await response.json();
            let name = `${origem}${destino}`
            let compra = responseJson[name].bid;
            let venda = responseJson[name].ask;
            let totalCompra = valor * compra;
            let totalvenda = valor * venda;
            alert(`Valor para Compra: ${formataValor(totalCompra)} \n Valor para venda: ${formataValor(totalvenda)}`);
        }catch (error) {
            console.error(error);
            alert(`Por favor tente novamente`)
        }
    }

    function formataValor(valor) {
     return `$ ${valor.toFixed(2)}`
    }

    const placeholderOrigem = {
        label: 'De:',
        value: null,
        color: 'Black',
      };

      const placeholderDestino = {
        label: 'Para:',
        value: null,
        color: 'black',
      };

      const pick =  
        Coins.map(({label, value, index}) => {
            return(
                <Picker.Item label={label} value={value} key={value} />
            )
        })

     return(
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} onChangeText={text => setvalor(text)} placeholder="Digite o valor" keyboardType={'numeric'} />
        
        <Picker
            selectedValue={origem}
            placeholder={placeholderOrigem}
            onValueChange={(value) =>{
                setOrigem(value)
                console.log(value)
            }
            }>
                <Picker.Item label="De: " value='' key='origem' />
                {pick}
        </Picker>
        <Picker
            selectedValue={destino}
            onValueChange={(value) =>
                setDestino(value)
            }>
                <Picker.Item label="Para: " value='' key='destino' />
                {pick}
        </Picker>

          <TouchableOpacity style={styles.button} onPress={handleButtonEuroPress}>
            <Text style={styles.buttonText}>Converter</Text>
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
    },
    select: {
        backgroundColor: 'rgb(60, 179, 113)',
    }

});

export default Form;