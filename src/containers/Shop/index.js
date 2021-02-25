import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button, 
  Switch
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
const walk = require('../../images/walking.png')
const bike = require('../../images/bike.png')
const drone = require('../../images/drone.png')
const Shop = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
        <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
          <View
            style={{
              backgroundColor: '#fff',
              height: 80,
              shadowColor: '#000',
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity:  0.4,
              shadowRadius: 3,
              elevation: 5,
            }} 
          >

            <View style={{flexDirection:'row',paddingTop:40,}}>
              <Icon name="left" size={20} color="#2D0C57" onPress={() => Actions.product_info()} /> 
              <Text style={{color:'#2D0C57', fontSize:17,marginLeft: 140,fontWeight:'Semibold'}}>Checkout</Text>
            </View>
              
          </View>
        </View>
        <View style={{padding: 20}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 22, fontWeight: 'bold',color:'#2D0C57'}}>Payment method</Text> 
                <TouchableOpacity onPress={() => Actions.credit()}><Text style={{color:'#7203FF',fontSize: 15,marginTop: 5}} >CHANGE</Text></TouchableOpacity> 
            </View>
            <View style={{flexDirection:'row',marginTop: 20 }}>
              <Icon name="creditcard" size={24} color="#2D0C57" onPress={() => Actions.product_info()} /> 
              <Text style={{marginLeft:20, fontSize: 17, color: '#9586A8'}}>**** **** **** 4747</Text>
            </View>


            <View style={{flexDirection:'row', justifyContent: 'space-between',marginTop: 30 }}>
                <Text style={{fontSize: 22, fontWeight: 'bold',color:'#2D0C57'}}>Delivery options</Text> 
                <TouchableOpacity><Text style={{color:'#7203FF',fontSize: 15,marginTop: 5}}>CHANGE</Text></TouchableOpacity> 
            </View>
            <View style={{flexDirection:'row',marginTop: 30 }}>
              <Icon name="home" size={24} color="#2D0C57" onPress={() => Actions.product_info()} /> 
              <View style={{marginLeft:20, fontSize: 17, color: '#9586A8', height: 128, }}>
                    <Text style={styles.textInfo}>Alexandra Smith</Text>
                    <Text style={styles.textInfo}>Cesu 31 k-2 5.st, SIA Chili</Text>
                    <Text style={styles.textInfo}>Riga</Text>
                    <Text style={styles.textInfo}>LV–1012</Text>
                    <Text style={styles.textInfo}>Latvia</Text>
              </View>
              
            </View>

            <View style={{flexDirection:'row', justifyContent: 'space-between',marginTop: 30 }}>
                <Text style={{fontSize: 22, fontWeight: 'bold',color:'#2D0C57'}}>Delivery options</Text> 
                <TouchableOpacity><Text style={{color:'#7203FF',fontSize: 15,marginTop: 5}}>CHANGE</Text></TouchableOpacity> 
            </View>
            <View>
              <View style={{flexDirection:'row',marginTop: 30 }}>
                  <Image source={walk} style={styles.walk} resizeMode = "contain" ></Image>
                  <Text style={{marginLeft:20, fontSize: 17, color: '#9586A8',  }}>I’ll pick it up myself</Text>
              </View>
              <View style={{flexDirection:'row',marginTop: 30 }}>
                  <Image source={bike} style={styles.walk} resizeMode = "contain" ></Image>
                  <Text style={{marginLeft:20, fontSize: 17, color: '#9586A8', }}>By courier</Text>
              </View>
              <View style={{flexDirection:'row',marginTop: 30 }}>
                  <Image source={drone} style={styles.walk} resizeMode = "contain" ></Image>
                  <Text style={{marginLeft:20, fontSize: 17, color: '#9586A8', }}>By Drone</Text>
              </View>
            </View>

            <View style={{flexDirection:'row', justifyContent: 'space-between',marginTop: 30 }}>
                <Text style={{fontSize: 22, fontWeight: 'bold',color:'#2D0C57'}}>Non-contact-delivery</Text> 
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  size={30}
                />
            </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInfo: {
      marginLeft:20,
     fontSize: 17, 
     color: '#9586A8', 
  },
  walk: {
    height: 24,
    width: 24
  }
  
});

export default Shop;