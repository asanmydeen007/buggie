import React, { useState} from 'react';
import * as Progress from 'react-native-progress';

import {
  Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Middleware from './Middleware';
import { useSelector } from 'react-redux';

export default function Header({handlenavigation}) {
  const data= useSelector((state)=>state.wordArray);
  // Restart Button Function
  const restart = ()=>{
   console.log(data);
  }
  

let appreciationText ;
let bar ;
let count=0;
data.map(word=>word.visible=== true ? count++ : null)

if (count === 1) {
  appreciationText = "Good Effort";
  bar = 0.2
} else if (count === 2) {
  appreciationText = "Keep Going";
  bar = 0.4;
} else if (count === 3) {
  appreciationText = "Amazing";
  bar = 0.6;
} else if (count === 4) {
  appreciationText = "Excellent"
  bar = 0.8
} else if (count === 5) {
  appreciationText = "Rising Star";
  bar = 1;
  Alert.alert(
    "CONGRALUTIONS",
    "",
    [
      { text: "RESTART", onPress: restart,style: "cancel" },
      {text:"NEXT LEVEL ", onPress: handlenavigation,style:"cancel"}//Onpress function is in HomeScreen
    ]
  );
} else if (count > 5) {
  appreciationText = "Ultimate"
  bar = 1
} 
else {
  appreciationText="Lets Start";
  bar=0;
}

    return (
      <SafeAreaView style={styles.Header}>
      <View style={styles.heading}>
          <Text style={styles.appreciation}>{appreciationText}
          </Text> 
      </View>
      <Progress.Bar progress={bar} width={310} height={15} color={'#548CA8'}/>
       <Middleware/>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  One: {
    fontSize : 30,
     color:'#334257',
     fontWeight: '700',
    textTransform:'uppercase',

  },
  heading:{
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  appreciation:{
    fontFamily: 'Readex Pro',
    fontWeight: '700',
    fontSize : 30,
    color:'#334257',
    width:'100%',
    textAlign:'center',
    paddingTop:5,
    paddingBottom:10,
}
});
