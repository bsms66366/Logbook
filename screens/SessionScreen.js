import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export default function LinksScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  return (

     
    <View style={styles.v_container}>
      <View style={styles.Logo}>
      <View style={{flex: 1, flexDirection: 'row', flexWrap:1}}>
        <Image source={require('../assets/images/ClinicalSkillsLogo4.png')} style={{width: 170, height: 210, }} />  
      </View>
      
       
        <View style={styles.box}> 
        <View style={styles.BoxBorder(height, width)}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/sessionpage.php') }>
              <Button title="" style={styles.instructions} onPress={() => {
            WebBrowser.openBrowserAsync('https://expo.io')}}/>
            <Text style={{ fontSize: 20, color: '#fff' }}>Attend Session</Text>
          </TouchableOpacity>
        </View>

       
        
        </View>
       
      

       </View>
    </View>

 
  );
}



const styles = StyleSheet.create({

v_container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#026666',
  },

box: {
  width: 900,
  height: 800,
  paddingTop: 250,
  paddingLeft: 20,
  alignItems: 'center',
},

Logo: {
    height: 20,
    alignItems: 'center',
},

IconStyle:{
    width: 80, 
    height:80,
},

BoxBorder: (height, width) => ({
    marginTop: 10,
    width: (width /4)-10, 
    height: '20%',
    borderColor: '#F2F2EB',
    borderStyle:'line',
    borderRadius: 8,
    borderWidth: 4,
    backgroundColor: '#F29F05',
    marginHorizontal: 5,
    alignItems: 'center',
  }),
  
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },

  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: -10,
    textAlign: 'center',
    color: '#F2F2F2',
  },
});