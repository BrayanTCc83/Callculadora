/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

import NumberButton from "./components/numberButton"

const Calculadora = () => {
  const [process, setProcess] = useState("0")
  const [lastResult, setLastResult] = useState("0")
  const set = (value) => {
    let prev = process === 0 ? value : `${process}${value}`
    setProcess(prev)
  }
  const del = () => {
    let res=process
    let real = process.length > 1 ? res.substr(0, process.length-1) : 0
    setProcess(real)
  }
  const getResult = () =>{
    let values = process.split(/[*+/-]/g)
    let operations = process.split(/[0-9]*/g).filter((elem)=>elem!="")
    let result = values[0]
    for(let i=1; i<operations.length+1; i++){
      switch(operations[i-1]){
        case "*":
          result*=Number(values[i])
          break;
        case "-":
          result-=Number(values[i])
          break;
        case "+":
          result+=Number(values[i])
          break;
        case "/":
          result/=Number(values[i])
          break;
      }
    }
    setLastResult(result)
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={calculadora.maquetation} >
          <Text style={calculadora.title} >Calculadora con React Native</Text>
          <View style={calculadora.result} >
            <Text style={calculadora.text} >{process}</Text>
            <Text style={calculadora.text} >{lastResult}</Text>
          </View>
          <View style={calculadora.buttonsArea} >
            <NumberButton value="7" onPress={set} />
            <NumberButton value="8" onPress={set} />
            <NumberButton value="9" onPress={set} />
            <NumberButton value="*" onPress={set} />
            <NumberButton value="4" onPress={set} />
            <NumberButton value="5" onPress={set} />
            <NumberButton value="6" onPress={set} />
            <NumberButton value="/" onPress={set} />
            <NumberButton value="1" onPress={set} />
            <NumberButton value="2" onPress={set} />
            <NumberButton value="3" onPress={set} />
            <NumberButton value="-" onPress={set} />
            <NumberButton value="Del" onPress={del} />
            <NumberButton value="." onPress={set} />
            <NumberButton value="0" onPress={set} />
            <NumberButton value="+" onPress={set} />
          </View>
            <NumberButton value="=" onPress={getResult} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Calculadora;

const calculadora = StyleSheet.create({
  maquetation : {
    display: 'flex',
  },
  result : {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical : 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  text:{
    fontSize : 25,
    alignSelf: 'flex-end'
  },
  buttonsArea : {
    flex: 2,
    display: 'flex',
    flexDirection : 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#3399dd'
  }
})