import React from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'

export default function ContactList () {
  const contact=[
    {
        uid:4,
        name:"jyoti ranjan",
        msg:"hey what's up",
        imageurl:'data:image/jpeg;base64,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',

    },
    {
        uid:5,
        name:"jyoti ranjan2",
        msg:"hey what's up",
        imageurl:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        
    },
    {
        uid:6,
        name:"Pritish",
        msg:"hey what's up",
        imageurl:"data:image/jpeg;base64,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",
    },
    {
        uid:7,
        name:"jyoti ranjan",
        msg:"hey what's up",
        imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iXzFixmUVuIZtUXfNUlIDxWFuxQAAo9L9YNTAj0JA2z6dqcCBuvtKz-bgRUhwWdyi6E&usqp=CAU",
    }
  ]
    return (
      <View>
        <View style={styles.herderContainer}>
        <Text style={styles.headingText}> Contacts </Text>
        </View>
        <ScrollView style={styles.container}>
            
        {contact.map(({uid,name,imageurl,msg})=>(
            <View key={uid} style={styles.userCard}>
            <Image
            source={{uri:imageurl}}
            style={styles.userImage}
            />
            {/* <Text>{uid}</Text> */}
            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userMsg}>{msg}</Text>
            </View>
            

            </View>
        ))}
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    herderContainer:{
        marginTop:40
    },
    headingText:{
        fontSize:24,
        fontWeight:'500',
        paddingHorizontal:10,
    },
    container:{
        padding:10
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:2,
        backgroundColor:'#8B78E6',
        padding:3,
        borderRadius:5
    },
    userImage:{
        height:50,
        width:50,
        borderRadius:100,
        marginRight:10,
    
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        textTransform:'capitalize',
        color:'#FFFFFF'
    },
    userMsg:{
        fontSize:12,
        color:'#FFFFFF'

    }
})
