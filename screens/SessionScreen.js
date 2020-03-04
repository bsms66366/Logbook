import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity, DatePickerIOS} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import ModalDropdown from 'react-native-modal-dropdown';

export default function LinksScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  return (

     
    <View style={styles.v_container}>
      <View style={styles.Logo}>
      <View style={{flex: 1, flexDirection: 'row', flexWrap:1}}>
        <Image source={require('../assets/images/ClinicalSkillsLogo4.png')} style={{width: 120, height: 150, }} />  
      </View>
        
        <View style={styles.box}> 
         <ModalDropdown options={['Module 101','Module 102','Module 103','Module 104','Module 201','Module 202','Module 203','Module 204']}
                        defaultValue = {"Select Module"}
                        style = {{ flex: 1,paddingRight:30}}
                        textStyle = {{fontWeight:'bold', textAlign: 'right', fontSize: 20, color:'#F2A007'}}
                        dropdownStyle={{width:190, }}/>

                        <ModalDropdown options={['GP-1','GP-2','GP-3','GP-4','GP-5','GP-6','GP-7','GP-8','GP-9','GP-10']}
                        defaultValue = {"Select Session"}
                        style = {{ flex: 1,paddingRight:30}}
                        textStyle = {{fontWeight:'bold', textAlign: 'right', fontSize: 20, color:'#F2A007'}}
                        dropdownStyle={{width:190, }}/>

          <View style={styles.BoxBorder(height, width)}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx') }>
              <Button title="" style={styles.instructions} onPress={() => {
            WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx')}}/>
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
  height: 400,
  paddingTop: 170,
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
    marginTop: 2,
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