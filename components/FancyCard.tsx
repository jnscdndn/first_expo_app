import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}> TextInComponent </Text>
        <View style={[styles.card,styles.elevated]}>
        <Image 
        source={require(
          "../assets/img1.jpg"
    )}
        style={styles.cardIamge}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Car</Text>
            <Text style={styles.cardLable}>pink city</Text>
            <Text style={styles.cardDesc}>
            my project dont do nothing much
            </Text>
            <Text style={styles.cardFooter}>15 mins Away</Text>
        </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'500',
    paddingHorizontal:10,
  },
  card:{
    width:350,
    height:360,
    borderRadius:7,
    marginVertical:12,
    marginHorizontal:16,
    backgroundColor:'#25CCF7',
    borderTopLeftRadius:150

    
  },
  elevated:{},
  cardIamge:{
    height:200,
    width:350,
    marginBottom:16,
    borderTopLeftRadius:80
  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardTitle:{
    fontSize:22,
    marginBottom:4,
    fontWeight:'bold'
  },
  cardFooter:{

  },
  cardDesc:{

  },
  cardLable:{}
})
