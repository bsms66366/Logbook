import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
//import Icon from "react-native-vector-icons/MaterialIcons";
//import Accordian from './app/Accordian'
//import { Colors } from './app/Colors';
//import DropDownItem from "react-native-drop-down-item";
//import Accordion from '@dooboo-ui/native-accordion';
//import { AccordionList } from "accordion-collapse-react-native";



//import Geolocation from '@react-native-community/geolocation';
//import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

// import all basic components
console.disableYellowBox = true;

import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from 'rn-viewpager';
//import PagerTabIndicator , IndicatorViewPager , PagerTitleIndicator , PagerDotIndicator




/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  underline: {
    width: '100%',
    height: 1,
    position: 'absolute',
    top: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentChild: {
    padding: 12,
  },
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  contentTxt: {
    color: 'black',
    marginLeft: 8,
    fontSize: 12,
  },
  contentFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 12,
  },
})*/



export default class App extends Component {

  scanFingerPrint = async () => {
    try {
      let results = await LocalAuthentication.authenticateAsync();
      if (results.success) {
       let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('Permission to access location was denied'
      );
    }

    let location = await Location.getCurrentPositionAsync({});
    alert (JSON.stringify(location));
        WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx'),alert('Now login to your Eportfolio!');
      } else {
        this.setState({
          failedCount: this.state.failedCount + 1,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };




/*const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
*/
  render() {
    return (



      <View style={{ flex: 1, marginTop: 0 }}>
        {/*Example of Dot Indicator*/}
        <IndicatorViewPager
          style={{ height: 450 }}
          indicator={this._renderDotIndicator()}>
          {/*_renderDotIndicator() will return the PagerDotIndicator*/}
          <View
            style={{
              backgroundColor: '#C70039',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>THE BSMS LOGBOOK</Text>
            <Image source={require('../assets/images/ClinicalSkillsLogo3.png')} style={{width: 100, height: 130, }} />
          </View>
          <View
            style={{
              backgroundColor: '#FF5733',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Introduction</Text>
             <Text style={{ color: 'white', fontSize: 12, marginLeft: 30 }}>Welcome to the clinical practice component of Phase 1 teaching. The aim of your placements in both community and secondary care is to facilitate the development of your communication and examination skills in a protected environment. You will be able to observe your clinical teachers seeing patients and, as you become more proficient, you will be allowed to practise some clinical skills under close supervision.</Text> 

          </View>
          <View
            style={{
              backgroundColor: '#026666',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Dress code</Text>
             <Text style={{ color: 'white', fontSize: 12, marginLeft: 30 }}>You should always dress smartly when in a clinical environment and when meeting patients. Please note that this includes examinations which occur in, or simulate, the clinical environment such as the OCSEs.</Text> 
          </View>
          
          <View
            style={{
              backgroundColor: '#FFA221',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          
            <Text style={{ color: 'white', fontSize: 15, marginLeft: 30 }}>This log book contains details of your afternoon rotations, dress code, and some guidelines e.g. confidentiality. The clinical skills inventory which will be used to record your experiences of clinical skills teaching.</Text>
 <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text>FORWARD</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text>Aaron Bennet</Text>
        </ListItem>
        <ListItem>
          <Text>Claire Barclay</Text>
        </ListItem>
        <ListItem last>
          <Text>Kelso Brittany</Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
    <Collapse>
      <CollapseHeader>
        <Separator bordered>
          <Text>FORWARD</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <ListItem >
          <Text>Aaron Bennet</Text>
        </ListItem>
        <ListItem>
          <Text>Claire Barclay</Text>
        </ListItem>
        <ListItem last>
          <Text>Kelso Brittany</Text>
        </ListItem>
      </CollapseBody>
    </Collapse>
            <Button title="" onPress={() => {WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx'),alert('Now login to your Eportfolio!');}}/>   
<TouchableOpacity onPress={this.scanFingerPrint}>
<Image source={require('../assets/images/fingerprint.png')} style={{width: 100, height: 130, }} />   
<Text>login here</Text>
</TouchableOpacity>


          </View>
        </IndicatorViewPager>
</View>
);
  }




  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }
  _renderTabIndicator() {
    let tabs = [
      {
        text: 'One',
      },
      {
        text: 'Two',
      },
      {
        text: 'Three',
      },
    ];
    return <PagerTabIndicator tabs={tabs} />;
  }
}