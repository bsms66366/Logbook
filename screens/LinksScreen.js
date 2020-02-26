import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text, Button, Dimensions, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export default function LinksScreen() {
  var {height, width} = Dimensions.get('window');
  console.log (height, width)
  return (

    <View style={styles.v_container}>
      <View style={styles.Logo}>
        <Image source={require('../assets/images/bsmsLogo[blu].png')} style={{width: 200, height: 90, }} />  
      </View>
      <View style={{flex: 1, flexDirection: 'row', flexWrap:1}}>
        
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
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/sessionpage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard3.png')} style ={styles.IconStyle} />  
        <Button title="Module 104" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/sessionpage.php')}}/>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/pathpage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard4.png')} style ={styles.IconStyle} />
          <Button title="Module 201" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/sessionpage.php')}}/>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_101706_1&cmp_tab_id=_255687_1&editMode=true&mode=cpview') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard5.png')} style ={styles.IconStyle} />  
        <Button title="Module 202" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_101706_1&cmp_tab_id=_255687_1&editMode=true&mode=cpview')}}/>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://studentcentral.brighton.ac.uk/webapps/blackboard/execute/modulepage/view?course_id=_101707_1&cmp_tab_id=_255689_1&editMode=true&mode=cpview') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard6.png')} style ={styles.IconStyle} />  
        <Button title="Module 204" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/sessionpage.php')}}/>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}>
        <TouchableOpacity onPress = {() => WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/pathpage.php') }>
          <Image source={require('../assets/images/interfaceIcons_Artboard7.png')} style ={styles.IconStyle} />
          <Button title="PA Program" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://tools.brighton.ac.uk/medical-school/AnatomyInterface/admin/papage.php')}}/>
    </TouchableOpacity>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Image source={require('../assets/images/interfaceIcons_Artboard20.png')} style ={styles.IconStyle} />  
       <Button title="Post graduate" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('')}}/>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Image source={require('../assets/images/interfaceIcons_Artboard21.png')} style ={styles.IconStyle} />  
        <Button title="Textbooks" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://www.clinicalkey.com/#!/browse/book/3-s2.0-C20150000041')}}/>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Image source={require('../assets/images/interfaceIcons_Artboard11.png')} style ={styles.IconStyle} />  
        <Button title="Videos" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://blogs.brighton.ac.uk/bsmsvideos/wp-login.php?privacy=1&redirect_to=http%3A%2F%2Fblogs.brighton.ac.uk%2Fbsmsvideos%2F')}}/>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Image source={require('../assets/images/interfaceIcons_Artboard19.png')} style ={styles.IconStyle} />  
        <Button title="feedback" style={styles.titleText} onPress={() => {
    WebBrowser.openBrowserAsync('https://universityofsussex.eu.qualtrics.com/jfe/form/SV_egtaH07LwYrxuvP')}}/>
        </View> 
       </View>
    </View>
 
  );
}



const styles = StyleSheet.create({

box: {
  width: 900,
  paddingTop: 50,
  paddingLeft: 20,
  justifyContent: 'center',
},

Logo: {
    height: 80,
    alignItems: 'center',
},

IconStyle:{
    width: 120, 
    height:120,
},

BoxBorder: (height, width) => ({
    marginTop: 10,
    width: (width /4)-30, 
    height: '30%',
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