import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
import { Actions } from 'react-native-router-flux';
export default function ProductItem({item}) {
  return (
    <TouchableOpacity style={{ marginBottom: 20,}} onPress ={() => Actions.fruit_detail()}>
      <View style={styles.items}>
        <Image style={styles.itemImage} source={item.images} resizeMode="cover"></Image>
        <Text style={styles.itemText}  >{item.title}</Text>
        <Text style={styles.itemCount}>({item.count})</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    items: {
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        width: 177,
        height: 211,
      },
    itemText: {
        fontSize: 18, 
        fontWeight: 'bold',
        fontFamily:'Roboto',
        color: '#2D0C57',
        marginBottom:15,
        paddingLeft: 15
    },
    itemCount:{
        color: '#9586A8',
        fontSize: 12,
        paddingLeft: 15 
    },
    itemImage : {
        height: 140,
        width: 177
    }
})