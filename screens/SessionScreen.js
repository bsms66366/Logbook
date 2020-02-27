import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export default function LinksScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  return (

     
    <View style={styles.v_container}>
      <View style={styles.Logo}>
        <Image source={require('../assets/images/ClinicalSkillsLogo4.png')} style={{width: 170, height: 210, }} />  
      </View>
      <View style={{flex: 1, flexDirection: 'row', flexWrap:1}}>
       
        <View style={styles.box}> 
        <View style={styles.BoxBorder(height, width)}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/sessionpage.php') }>
            <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style ={styles.IconStyle} /> 
              <Button title="Module 102" style={styles.titleText} onPress={() => {
            WebBrowser.openBrowserAsync('https://expo.io')}}/>
          </TouchableOpacity>
        </View>

        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://expo.io') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard2.png')} style ={styles.IconStyle} />  
        <Button title="Module 103" style={styles.titleText} onPress={() => {
          WebBrowser.openBrowserAsync('https://expo.io')}}/>
          </TouchableOpacity>
        </View>
        
        </View>
       
      

       </View>
    </View>

 
  );
}



const styles = StyleSheet.create({

box: {
  width: 900,
  height: 800,
  paddingTop: 50,
  paddingLeft: 20,
  justifyContent: 'center',
},

Logo: {
    height: 20,
    alignItems: 'center',
},

IconStyle:{
    width: 90, 
    height:90,
},

BoxBorder: (height, width) => ({
    marginTop: 10,
    width: (width /4)-10, 
    height: '20%',
    borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  }),

v_container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#282828',
  },

  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#bcba40',
  },
});