import React from 'react'
import { TouchableOpacity , Text,  View, StyleSheet } from 'react-native'

const NumberButton = ( props ) => {
    return (
        <View>
            <TouchableOpacity 
                onPress={
                    ()=>props.onPress?props.onPress(props.value):null
                } 
                style={
                    buttonStyle.default
                } 
                >
                <Text style={buttonStyle.defaultText} >
                    {props.value}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default NumberButton

const buttonStyle = StyleSheet.create({
    default : {
        backgroundColor: '#bbbbbb',
        borderRadius: 10,
        margin: 10,
        padding: 7,
        minWidth: 70
    },
    defaultText:{
        textAlign : 'center',
        fontSize : 25,
        fontWeight: 'bold'
    },
    secondary : {
        backgroundColor : 'blue'
    }
})