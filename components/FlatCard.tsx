import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class FlatCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.HeadingText}> Evehunt </Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.card1]}>
                <Text>Yellow</Text>
            </View>
            <View style={[styles.card,styles.card2]}>
                <Text>Blue</Text>
            </View>
            <View style={[styles.card,styles.card3]}>
                <Text>Red</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    HeadingText:{
        fontSize:24,
        fontWeight:'500',
        paddingHorizontal:10,
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:7,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:7,
        margin:8
    },
    card1:{
    backgroundColor:'#fcba03',
    },
    card2:{
        backgroundColor:'#3003fc',
    },
    card3:{
        backgroundColor:'#fc0324',
    },
    card4:{
        backgroundColor:'#88fc03',
    },
    card5:{
        backgroundColor:'#fcba03',
    },
})
