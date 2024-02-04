import React from 'react'
import { Text, StyleSheet, View, Linking, Image, TouchableOpacity } from 'react-native'

export default function ActionCards(){
  function openWeb(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
    
    return (
      <View>
        <Text style={styles.headingText}> Blog Card </Text>
        <View style={[styles.Card]}>
            <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
            Hey
            </Text>
            </View>
            <Image 
            source={require("../assets/img1.jpg")}
            style={styles.cardImage}
            />
        <View style={styles.cardBody}>
        <Text numberOfLines={3}>
        Ensure that the path provided in the uri property 
        of the Image component is correct. In your case,
         you have used '../../assets/img1.jpg'.
          Make sure that the image file is located at that exact path relative to the component file.
        </Text>
        </View>
        <View style={styles.footerContainer}>
        <TouchableOpacity
        onPress={()=>openWeb('https://reactnative.dev/docs/linking#openurl')}
        >
            <Text style={styles.follow}>Read More</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={()=>openWeb('https://reactnative.dev/docs/linking#openurl')}
        >
            <Text style={styles.follow}>Follow Me</Text>
        </TouchableOpacity>
        </View>
       
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        marginHorizontal:16,
        fontSize:24,
    fontWeight:'500',
    },
    Card:{
        width:350,
        // height:450,
        marginHorizontal:16
    },
    headerText:{
        fontSize:16,
        fontWeight:'500'
    },
    headerContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center'
    },
    cardImage:{
        height:300,
        width:350
    },
    cardBody:{
        padding:3
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
       
        justifyContent:'space-evenly'

    },
    follow:{
        marginTop:20,
        color:'#E71C23',
        backgroundColor:'#000000',
        padding:7,
        borderRadius:4
    }
})
