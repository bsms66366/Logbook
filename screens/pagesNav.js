import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
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



export default class App extends Component {
  render() {
    return (



      <View style={{ flex: 1, marginTop: 30 }}>
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
              backgroundColor: '#FFA221',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Login here</Text>
            <Text style={{ color: 'white', fontSize: 15, marginLeft: 30 }}>This log book contains details of your afternoon rotations, dress code, and some guidelines e.g. confidentiality. The clinical skills inventory which will be used to record your experiences of clinical skills teaching.</Text>
            <Image source={require('../assets/images/fingerprint.png')} style={{width: 100, height: 130, }} />
            <Button title="Login" onPress={() => {WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx'),alert('Now login to your Eportfolio!');}}/>
             
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
