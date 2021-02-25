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
import Icon from 'react-native-vector-icons/AntDesign';
const product_inf = require("../../images/ProductInf.png");
const ProductInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo} >
        <Image source={product_inf} style={styles.logo_image} resizeMode="cover"></Image>
      </View>

      <View style={styles.info}>
          <Text style={styles.header}>Boston Lettuce</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.price}>1.10 </Text>
            <Text style={styles.unit}>€ / piece</Text>
          </View>
          <Text style={styles.count}>~ 150 gr / piece</Text>
          <View>
            <Text style={styles.headerItem}>Spain</Text>
            <Text style={styles.textItem}> Lettuce is an annual plant of the daisy family, Asteraceae. 
            It is most often grown as a leaf vegetable, 
            but sometimes for its stem and seeds. 
            Lettuce is most often used for salads, 
            although it is also seen in other kinds of food, 
            such as soups, 
            sandwiches and wraps; it can also be grilled.</Text>
          </View>
          <View style={{flexDirection: 'row',alignContent:'center',}}>
            <TouchableOpacity  onPress={() => Actions.shop()}>
              <View style={styles.icon1}>
                  <Icon
                      style={{marginTop:15}}
                      name="hearto"
                      size={25}
                  />
              </View>
            </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => Actions.shop()}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="shoppingcart"
                    size={25}
                    style={{color: '#ffff', marginRight: 10}}
                  />
                  <Text style={styles.buttonText}>ADD TO CARD</Text>
                </View>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    height: '30%'
  },
  logo_image:{
    height: 358,
    width:414,
  },
  info:{
    backgroundColor:'#F6F5F5',
    height:'70%',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:20
  },
  info_logo:{
    height: 100,
    width:100,
  },
  header:{
    fontFamily: 'SF Pro Display',
    fontWeight: 'bold',
    lineHeight: 41,
    fontSize: 30,
    color: '#2D0C57',
    paddingBottom: 20,
  },
  price:{
    fontFamily: 'SF Pro Text',
    fontWeight: 'bold',
    lineHeight: 41,
    fontSize: 32,
    color: '#2D0C57'
  },
  unit:{
    fontFamily: 'SF Pro Text',
    lineHeight: 41,
    fontSize: 24,
    color: '#9586A8'
  },
  infor_text:{
    paddingTop: 20,
    alignItems: 'center',
  },
  
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  dismiss:{
    marginTop: 10,
  },
  count: {
    color:'#06BE77',
    fontSize: 17,
    paddingBottom: 30
  },
  headerItem: {
    fontSize: 22,
    color: '#2D0C57',
    fontWeight:'bold',
  },
  textItem:{
    fontSize: 17,
    color:'#9586A8',
  },
  icon1 : {
    width: 78,
    height: 56,
    alignItems:'center',
    alignContent:'center',
    borderRadius:8,
    backgroundColor:'#fff',
    marginTop: 30,

    marginRight: 30
  },
  button: {
    backgroundColor: "#0BCE83",
    paddingVertical: 16,
    marginTop: 30,
    width: 275,
    height: 56,
    alignItems: "center",
    borderRadius:8
  },
});

export default ProductInfo;