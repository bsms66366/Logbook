//This is an example code for ViewPager//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image } from 'react-native';
// import all basic components
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
            <Text style={{ color: 'white', fontSize: 10, marginLeft: 20 }}>Welcome to the clinical practice component of Phase 1 teaching. The aim of your placements in both community and secondary care is to facilitate the development of your communication and examination skills in a protected environment. You will be able to observe your clinical teachers seeing patients and, as you become more proficient, you will be allowed to practise some clinical skills under close supervision. This log book contains details of your afternoon rotations, dress code, and some guidelines e.g. confidentiality. Towards the back of this booklet, you will find the clinical skills inventory which can be used to record your experiences of clinical skills teaching.This logbook should also be used to record your attendance (final pages) at clinical sessions, and will be checked at the end of the year for your attendance profile, so please look after it. I would recommend that you take a photograph or copy of the attendance page at regular intervals. If you lose your logbook, there is evidence of your attendance prior to the event. If you do lose it, please contact the Clinical Practice School Office immediately (WatsonSchoolOffice@bsms.ac.ukor telephone: 01273 644768).</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFC300',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Three</Text>
          </View>
        </IndicatorViewPager>

      </View>
    );
  }

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