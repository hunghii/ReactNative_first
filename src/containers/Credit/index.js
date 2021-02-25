import React,{useState} from 'react';
import { StyleSheet, View, Text, FlatList,TextInput, ScrollView,Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
card = require('../../images/Card.png')
camera = require('../../images/camera.png')
const Credit = () => {
    const [card, setCard] = useState()
    const _onChange = () => form => console.log(form);
  return (
    <View style={styles.container}>
      <Icon name="left" size={20} color="#2D0C57" style={{paddingTop:20,marginBottom:20}} onPress={() => Actions.login()} /> 
      <Text style={{color:'#2D0C57', fontSize:30, fontWeight:'bold',marginBottom:20}}>Credit / Debit card</Text>
      {/* <View style={{alignSelf:'center'}}>
        <Image source={card} style={styles.card} resizeMode = 'cover' ></Image>
      </View> */}
      <CreditCardInput style={styles.card}  onChange={_onChange()} />
      <View style={{alignSelf:'center'}}>
        <Image source={camera} style={styles.camera} resizeMode = 'center' ></Image>
      </View>
      <Text style={{color:'#9586A8',fontSize: 14,marginTop: 15,}}>Name on card</Text>
      <TextInput
        style={{ height: 48, borderColor: '#D9D0E3', borderWidth: 1,marginTop: 8,borderRadius: 8 }}
        onChangeText={text => onChangeText(text)}
        />
        <Text style={{color:'#9586A8',fontSize: 14,marginTop: 20,}}>Card number</Text>
        <TextInput
            style={{ height: 48, borderColor: '#D9D0E3', borderWidth: 1,marginTop: 8,borderRadius: 8 }}
            onChangeText={text => onChangeText(text)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5F5',
    padding:20,
    color: '#F6F5F5'
  },
  card:{
    width: 500,
    height: 260,
  },
  camera:{
    width: 34,
    height: 29,
    marginTop:20
  }
});

export default Credit;