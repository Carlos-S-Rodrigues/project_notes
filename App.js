import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [state , setState] = useState ('read');
  const [note, setNote] = useState ('My note aaaaaaaaaaaaaaaaaaaa');

  if(state == 'read'){
  return (
    <View style={{flex:1}}>
      <StatusBar style="light"/>
      
      <View style={styles.header}><Text style ={{textAlign: 'center', color: 'white', fontSize: 25}}>That's My note</Text></View>

      <View style= {{padding:30}}><Text style={styles.note}>{note}</Text></View>

      <TouchableOpacity onPress={()=> setState('loading') } style={styles.btnNote}><Text style={styles.btnNoteTxt}>+</Text></TouchableOpacity>
    </View>
  );

  }else if(state == "loading"){
    return(
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />

        <View style={styles.header}><Text style={{ textAlign: 'center', color: 'white', fontSize: 25 }}>That's My note</Text></View>

        <TouchableOpacity onPress={()=> setState('read')} style={styles.btnSave}><Text style={styles.btnSaveTxt}>Save</Text></TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    header:{
      width:'100%',
      padding:17,
      backgroundColor: '#070'
    },
    note:{
      fontSize: 20,
    },
    btnNote:{
      position: 'absolute',
      right: 40,
      bottom:20,
      width:50,
      height: 50,
      backgroundColor: '#070',
      borderRadius:10,
    },
    btnNoteTxt:{
      color:'white',
      position: 'relative',
      textAlign: 'center',
      top:10,
      fontSize:20,
    },
    btnSave:{
      position: 'absolute',
      right: 40,
      bottom: 20,
      width: 50,
      height: 50,
      backgroundColor: '#070',
      borderRadius: 10,
    },
    btnSaveTxt:{
      color: 'white',
      position: 'relative',
      textAlign: 'center',
      top: 13,
      fontSize: 15,
    }

});
