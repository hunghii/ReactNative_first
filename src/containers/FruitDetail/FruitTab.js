import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
export default function FruitTab({item}) {
  return (
    <View style={{ marginBottom: 20,}}>
        <TouchableOpacity style={styles.items}>
            <Text style={styles.itemText}>{item.description} ({item.count})</Text>
        </TouchableOpacity>
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
        fontSize: 14, 
        fontFamily:'Roboto',
        color: '#6C0EE4',
        margin: 10
    },
    itemImage : {
        height: 140,
        width: 177
    }
})