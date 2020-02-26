import React from 'react';
import { ScrollView, StyleSheet, View, Image, Button, Linking } from 'react-native';
import { ExpoLinksView } from '@expo/samples';


const styles = StyleSheet.create({
  BoxBorder: {
    marginTop: 10,
    width:90,
    height:90,
    borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 8,
    borderWidth: '1 px',
    marginRight: 10,
    fontWeight: 'regular',
    fontSize: 12,
  },

moduleText: {
width:100,
color:'#ffffff',
marginTop:'auto',
marginBottom:10,
},

buttonsContainer: {
  marginTop: 10,
   flex: 1, 
  flexWrap: 'wrap',
 flexDirection: 'row', 
 backgroundColor: '#282828',
},

  container: {
   flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },

});


export default function LinksScreen() {
  return (
   /* <ScrollView style={styles.container}> */ 
          <View style={styles.buttonsContainer}>
             <View style={styles.BoxBorder}>
             /*<View style ={styles.moduleText}> */
            <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style ={{width: 90, height: 90}} />  
             /* <Text>First part and </Text>*/
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.BoxBorder}>
            <Image source={require('../assets/images/interfaceIcons_Artboard2.png')} style ={{width: 90, height: 90}} /> 
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.BoxBorder}>
            <Image source={require('../assets/images/interfaceIcons_Artboard3.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.BoxBorder}>
            <Image source={require('../assets/images/interfaceIcons_Artboard4.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.BoxBorder}>
            <Image source={require('../assets/images/interfaceIcons_Artboard5.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.BoxBorder}>
            <Image source={require('../assets/images/interfaceIcons_Artboard6.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.BoxBorder}>
            <Image source={require('../assets/images/interfaceIcons_Artboard7.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.BoxBorder}>
            <Image source={require('../assets/images/interfaceIcons_Artboard9.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.BoxBorder}>
            <Image source={require('../assets/images/interfaceIcons_Artboard19.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.BoxBorder}>
            <Image source={require('../assets/images/interfaceIcons_Artboard11.png')} style ={{width: 90, height: 90}} />  
            </View>
            </View>
            </View>
            </View>
            </View>
            </View>
            </View>
            </View>
            </View>
            </view>
  );
}

LinksScreen.navigationOptions = {
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },


SessionsStack.navigationOptions = {
  tabBarLabel: 'SessionNotes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-link'} />
  ),
};

SessionsStack.path = '';

const SessionsStack = createStackNavigator(
  {
    Sessions: SessionNotes,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Path pots',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SessionNotes.path = '';