import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function DisplayWord({word,deleteLetter}) {

    return (
        <View style={styles.container}>
            <Text style={styles.typedWord}>{word}</Text>
            <TouchableOpacity  onPress={deleteLetter} >
                <Text style={styles.delete}>
                <FontAwesome5 name={'backspace'} size={20} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:68,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:5
    },
    typedWord:{
        borderBottomWidth:2,
        borderBottomColor:'#334257',
        fontSize:25,
        width:'100%',
        color:"#334257",textAlign:'left'
    },
    delete:{
        color:"#334257",  
        fontSize:30,
        bottom:10,right:30
    }
})