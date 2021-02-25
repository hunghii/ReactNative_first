import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require("../../images/LOGO.png");
const info_logo = require("../../images/info_logo.png");
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo} >
        <Image source={logo} style={styles.logo_image} resizeMode="cover"></Image>
      </View>
      <View style={styles.info}>
        <Image source={info_logo} style={styles.info_logo} resizeMode="cover"></Image>
        <View style={styles.infor_text}>
          <Text style={{fontSize: 30,color:'#2D0C57',fontWeight:'bold'}}>Non-Contact</Text>
          <Text style={{fontSize: 30,color:'#2D0C57',fontWeight:'bold',paddingLeft:20}}>Deliveries</Text>
          <Text style={{fontSize: 18,color:'#9586A8',paddingLeft:20,paddingTop: 20}}>When placing an order, select the option </Text>
          <Text style={{fontSize: 18,color:'#9586A8',paddingLeft:20}}>“Contactless delivery” and the courier will leave</Text>
          <Text style={{fontSize: 18,color:'#9586A8',paddingLeft:20}}>your order at the door.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => Actions.product()}>
            <Text style={styles.buttonText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#A259FF',
  },
  logo:{
    height: '30%'
  },
  logo_image:{
    height: 100,
    width:100,
  },
  info:{
    backgroundColor:'#F6F5F5',
    height:'70%',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    alignItems: 'center',
    paddingTop:20
  },
  info_logo:{
    height: 100,
    width:100,
  },
  infor_text:{
    paddingTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#0BCE83",
    paddingVertical: 16,
    marginTop: 30,
    width:'90%',
    alignItems: "center",
    borderRadius:8
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  dismiss:{
    marginTop: 10,
  }
});

export default LoginScreen;