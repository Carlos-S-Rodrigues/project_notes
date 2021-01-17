import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';

export default function App() {

  const [state , setState] = useState ('read');
  const [note , setNote] = useState ('');

  useEffect(()=>{
    (async () =>{
        try{
          const noteRead = await AsyncStorage.getItem('note');
          setNote(noteRead);
        }catch(error){}
    })();

  },[])

  setData = async() => {
    try{
      await AsyncStorage.setItem('note', note)

    }catch(error){

    }
    alert('Saved!');

  }

  function newTxt(){
    setState('read');
    setData();
  }



  if(state == 'read'){
  return (
    <View style={{flex:1}}>
      <StatusBar style="light"/>
      
      <View style={styles.header}><Text style ={{textAlign: 'center', color: 'white', fontSize: 25}}>That's my note</Text></View>
      {

      (note != '')?
      <View style= {{padding:30}}><Text style={styles.note}>{note}</Text></View>
      :
          <View style={{ padding: 30}}><Text style={{opacity: 0.3}}>You have no notes...</Text></View>
      }
      <TouchableOpacity onPress={()=> setState('loading')} style={styles.btnNote}>
        {

        (note == '')?
        <Text style={styles.btnNoteTxt}>New</Text>
        :
        <Text style={styles.btnNoteTxt}>Edit</Text>
        }
        
        </TouchableOpacity>
    </View>
  );

  }else if(state == "loading"){
    return(
      <View style={{ flex: 1 }}>
        <StatusBar style="light"/>

        <View style={styles.header}><Text style={{ textAlign: 'center', color: 'white', fontSize: 25 }}>That's My note</Text></View>

        <TextInput autoFocus={true} style={{height: 400, marginRight:15, marginLeft: 15, marginTop:15, textAlignVertical:'top'}} onChangeText={(text)=>setNote(text)} multiline={true} numberOfLines={10} value={note}></TextInput> 
        
        <TouchableOpacity onPress={()=> newTxt()} style={styles.btnSave}><Text style={styles.btnSaveTxt}>Save</Text></TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    header:{
      width:'100%',
      padding:20,
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
      top:13,
      fontSize:15,
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
