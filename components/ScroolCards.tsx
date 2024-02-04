import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class ScroolCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.HeadingText}> Services </Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.elevated1]}>
                <Text>
                    Scroll
                </Text>
            </View>
            <View style={[styles.card, styles.elevated2]}>
                <Text>
                   Me 
                </Text>
            </View>
            <View style={[styles.card, styles.elevated3]}>
                <Text>
                    To
                </Text>
            </View>
            <View style={[styles.card, styles.elevated4]}>
                <Text>
                    Scroll
                </Text>
            </View>
            <View style={[styles.card, styles.elevated5]}>
                <Text>
                    More...
                </Text>
            </View>
            <View style={[styles.card, styles.elevated6]}>
                <Text>
                    😂😂
                </Text>
            </View>
        </ScrollView>
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
        padding:8,

    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        margin:7,
        borderRadius:100,
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#FFFFFF'
    },
    elevated1:{
        backgroundColor:'#a817d4',
    },
    elevated2:{
        backgroundColor:'#3017d4',
    },
    elevated3:{
        backgroundColor:'#17bbd4',
    },
    elevated4:{
        backgroundColor:'#17d41e',
    },
    elevated5:{
        backgroundColor:'#c7d417',
    },
    elevated6:{
        backgroundColor:'#d43717',
    },
    elevated7:{
        backgroundColor:'#b30713',
    },
})
