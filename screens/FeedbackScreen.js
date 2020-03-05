import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export default function LinksScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  return (

    <View style={styles.v_container}>
      <View style={styles.Logo}>
        <Image source={require('../assets/images/BSMS_logo_2015_WO.png')} style={{width: 250, height: 50, }} />  
      </View>
      <View style={{flex: 1, flexDirection: 'column', flexWrap:1}}>

        <View style={styles.welcomeImage}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://universityofsussex.eu.qualtrics.com/jfe/form/SV_egtaH07LwYrxuvP') }>
          <Image source={require('../assets/images/feedback.png')} style ={styles.IconStyle} />  
        <Button title="feedback" style={styles.titleText}/>
        </TouchableOpacity>
        </View> 
       </View>
    </View>
 
  );
}



const styles = StyleSheet.create({

box: {
  width: 900,
  paddingTop: 80,
  paddingLeft: 20,
  justifyContent: 'center',
},

Logo: {
    height: 80,
    alignItems: 'center',
},

IconStyle:{
    width: 120, 
    height: 90,
},

welcomeImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 10,

  },

/*BoxBorder: (height, width) => ({
    marginTop: 10,
    width: (width /4)-40, 
    height: '50%',
    //borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  }),*/

v_container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#026666',
  },

  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#bcba40',
  },
});