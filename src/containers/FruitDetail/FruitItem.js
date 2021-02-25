import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
export default function FruitItem({item}) {
  return (
    <View style={{ marginBottom: 20,}}>
        <View>
            <View style={{flexDirection: 'row'}}>
                <Image style={styles.itemImage} source={item.images} resizeMode="cover"></Image>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.itemText} onPress={() => Actions.product_info()}>{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                    <View style={{flexDirection: 'row',alignContent:'center',}}>
                        <View style={styles.icon1}>
                            <Icon
                                style={{marginTop:6}}
                                name="hearto"
                                size={25}
                            />
                        </View>
                        <View style={styles.icon2}>
                            <Icon
                                style={{marginTop:6}}
                                name="shoppingcart"
                                size={25}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    items: {
        borderRadius: 24,
        backgroundColor: '#E2CBFF',
        height: 34,
        marginRight: 10,
        alignItems:'center'
      },
    itemText: {
        fontSize: 18, 
        fontFamily:'Semibold',
        color: '#2D0C57',
        margin: 10
    },
    itemPrice: {
        fontSize: 22, 
        fontFamily:'Semibold',
        fontWeight:'bold',
        color: '#2D0C57',
        margin: 3
    },
    itemImage : {
        height: 128,
        width: 177,
    },
    icon1 : {
        width: 78,
        height: 40,
        alignItems:'center',
        alignContent:'center',
        borderRadius:8,
        backgroundColor:'#fff',
        margin: 8
    },
    icon2 : {
        width: 78,
        height: 40,
        alignItems:'center',
        alignContent:'center',
        borderRadius:8,
        backgroundColor:'#0BCE83',
        margin: 8
    }
})