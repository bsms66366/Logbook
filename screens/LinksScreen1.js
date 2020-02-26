import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const styles = StyleSheet.create({
  BoxBorder: {
    marginTop: 10,
    width: 90,
    height: 90,
    borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 8,
    borderWidth: '1 px',
    marginHorizontal: 5,
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
            <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 90, height: 90, borderColor:'#bcba40', borderStyle:'dotted', borderWidth: '1 px'}}>
            <Image source={require('../assets/images/interfaceIcons_Artboard2.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 90, height: 90, borderColor:'#bcba40', borderStyle:'dotted', borderWidth: '1 px'}}>
            <Image source={require('../assets/images/interfaceIcons_Artboard3.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 90, height: 90, borderColor:'#bcba40', borderStyle:'dotted', borderWidth: '1 px'}}>
            <Image source={require('../assets/images/interfaceIcons_Artboard4.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 90, height: 90, borderColor:'#bcba40', borderStyle:'dotted', borderWidth: '1 px'}}>
            <Image source={require('../assets/images/interfaceIcons_Artboard5.png')} style ={{width: 90, height: 90}} />  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 90, height: 90, borderColor:'#bcba40', borderStyle:'dotted', borderWidth: '1 px'}}>
            <Image source={require('../assets/images/interfaceIcons_Artboard6.png')} style ={{width: 90, height: 90}} />  
            </View>
            </View>
            </View>
            </View>
            </View>
            </View>
            </View>
);
}

LinksScreen.navigationOptions = {
  title: 'welcome to the Anatomy Lab Interface',
};

});