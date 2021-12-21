import React ,{useEffect, useState}from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RoundBtn from './RoundBtn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import {deleteAction,undoAction} from '../redux/action';

export default function BelowContent({wordArray,setwordArray}) {
    const data= useSelector((state)=>state.wordArray);
    // console.log(data[1])
    const dispatch =useDispatch();

    return (
        <>
        

        <TouchableOpacity onPress={()=>dispatch(undoAction())} style={style.undoContainer} >
                <FontAwesome5 name={'history'} style={style.undo} size={20} color={'#334257'}/>
                </TouchableOpacity>
                {  data.map((word,index)=>
                <View key={index}  style={style.container}>
                {word.visible  ? 
                <View style={style.row}>

                    <Text style={style.word}>{word.wordName}</Text>
                    <RoundBtn style={[style.number]} text={word.length}/> 

                    <TouchableOpacity onPress={()=>dispatch(deleteAction(word.id))}>
                    <Text  style={style.delete}>
                        <FontAwesome5 name={'trash'} size={20} color={'#334257'}/>
                    </Text>
                    </TouchableOpacity>
                </View> : <View/>}
                </View>
         )}
        </>
    )
}
const style = StyleSheet.create({
    undoContainer:{
        flex:1,
        paddingTop:20,

        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    container:{
        width:'100%',
    },row:{
        width:'100%',
        padding:5,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        color:'#334257',
    },word:{
        fontSize:30,
        textTransform:"capitalize",
        borderBottomWidth: 2,
        borderBottomColor:"#334257",
        borderStyle:'solid',
        paddingBottom:10,
        width:'50%',
        color:'#334257'

    },numberDelete:{
        flexDirection:'row',
        width:"30%",
        justifyContent:'space-around'
    },
    
})