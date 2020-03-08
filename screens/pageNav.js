//This is an example code for ViewPager//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
// import all basic components
console.disableYellowBox = true;

import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from 'rn-viewpager';
//import PagerTabIndicator , IndicatorViewPager , PagerTitleIndicator , PagerDotIndicator
/**
   * Log out an example event after zooming
   *
   * @param event
   * @param gestureState
   * @param zoomableViewEventObject
   */
  logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
    console.log('');
    console.log('');
    console.log('-------------');
    console.log('Event: ', event);
    console.log('GestureState: ', gestureState);
    console.log('ZoomableEventObject: ', zoomableViewEventObject);
    console.log('');
    console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
  };
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 1 }}>
      


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


<View style={styles.zoomWrapper}>
          <ReactNativeZoomableView
            zoomEnabled={true}
            maxZoom={1.5}
            minZoom={0.5}
            zoomStep={0.25}
            initialZoom={0.9}
            bindToBorders={true}
            onZoomAfter={this.logOutZoomState}
            style={styles.zoomableView}/>
          

            <Text style={{ color: 'white', fontSize: 20, marginBottom: 30 }}>THE BSMS LOGBOOK</Text>
             <Image source={require('../assets/images/ClinicalSkillsLogo3.png')} style={{width: 100, height: 130, }} />
             <Text style={{ color: 'white', fontSize: 15 }}>Swipe to login</Text> 
          </View>
          <View
            style={{
              backgroundColor: '#FF5733',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Introduction</Text>
            <Text style={{ color: 'white', fontSize: 10, marginLeft: 20 }}>Welcome to the clinical practice component of Phase 1 teaching. The aim of your placements in both community and secondary care is to facilitate the development of your communication and examination skills in a protected environment. 
You will be able to observe your clinical teachers seeing patients and, as you become more proficient, you will be allowed to practise some clinical skills under close supervision. This log book contains details of your afternoon rotations, dress code, and some guidelines e.g. confidentiality. 
  This logbook should also be used to record your attendance at clinical sessions, and will be checked at the end of the year for your attendance profile, so please look after it. I would recommend that you take a photograph or copy of the attendance page at regular intervals. If you lose your logbook, there is evidence of your attendance prior to the event. If you do lose it, please contact the Clinical Practice School Office immediately (WatsonSchoolOffice@bsms.ac.ukor telephone: 01273 644768)</Text>
          </View>
          <View
            style={{
              backgroundColor: '#026666',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Press here to login</Text>
            <Text style={{ fontSize: 10, color: '#fff', marginLeft: 20 }}>The acquisition of clinical skills in BSMS will be progressive in both range and depth, in keeping with the overall shape of the curriculum and with the growing academic, professional and personal maturity of the student. The medical school endorses that the maintenance of safe and effective clinical skills requires continuing repetition, reflection, and refinement. </Text>
         
            <Button title="Login" onPress={() => {WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx'),alert('Now login to your Eportfolio!');}}/>
            
            </View></View>
          </ReactNativeZoomableView>    
        </IndicatorViewPager>
        </View>
          </View>
            </View>
        
          
          
   
    );
  }
  </View>
  </View>


  
  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={['One', 'Two', 'Three']} />;
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

zoomWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  zoomableView: {
    padding: 10,
    backgroundColor: '#fff',
  }