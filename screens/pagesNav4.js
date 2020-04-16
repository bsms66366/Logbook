import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, Switch, ViewStyle, ReactElement, useState, ScrollView, FlatList, InteractionManager,
  Platform, Dimensions, Animated } from 'react-native';
import PropTypes from 'prop-types';
import * as WebBrowser from 'expo-web-browser';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
//import { List, Checkbox } from 'react-native-paper';
//import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
//import Accordian from './app/Accordian';
//import { Colors } from './app/Colors';
import ModalDropdown from 'react-native-modal-dropdown';
import DropDownItem from "react-native-drop-down-item";
import Accordion from '@dooboo-ui/native-accordion';

//import Geolocation from '@react-native-community/geolocation';
//import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
//import basic react native components
import * as Animatable from 'react-native-animatable';
//import for the animation of Collapse and Expand
import Collapsible from 'react-native-collapsible';
//import for the collapsible/Expandable view
//import Accordion from 'react-native-collapsible/Accordion';
import Constants from 'expo-constants';


//import for the Accordion view
// import all basic components
console.disableYellowBox = true;

import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from 'rn-viewpager';

//import PagerTabIndicator , IndicatorViewPager , PagerTitleIndicator , PagerDotIndicator

//Dummy content to show
//You can also use dynamic data by calling webservice


//css style sheets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  icons: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 16,
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
});


export default class App extends Component {

  static animated;
  static defaultProps = {
    contentVisible: false,
    backgroundColor: 'transparent',
    titleBackground: 'transparent',
    contentBackground: 'transparent',
    underlineColor: '#d3d3d3',
    visibleImage: false,
    invisibleImage: false,
  };

  static propTypes = {
    contentVisible: PropTypes.bool,
    backgroundColor: PropTypes.string,
    titleBackground: PropTypes.string,
    contentBackground: PropTypes.string,
    underlineColor: PropTypes.string,
    visibleImage: PropTypes.any,
    invisibleImage: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      contentVisible: props.contentVisible,
      headerheight: 0,
      contentHeight: 0,
    };
}

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
  }

    

    render() {
      const { backgroundColor, style, header, visibleImage, invisibleImage, children } = this.props;
      const { contentVisible } = this.state;
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
              backgroundColor: '#762157',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Logbook</Text>
             <Text style={{ color: 'white', fontSize: 12, marginLeft: 30 }}>This log book contains details of your afternoon rotations, dress code, and some guidelines e.g. confidentiality. The clinical skills inventory which will be used to record your experiences of clinical skills teaching.</Text> 
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
              backgroundColor: '#026666',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 20 }}>signIn </Text>
          
            //drpodown here:
            <Animated.View style={[
        styles.container,
        {
          height: this.animated,
          backgroundColor: backgroundColor,
        },
        style,
      ]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.onPress}
        >
          <View
            onLayout={ this.onAnimLayout }
          >
            { header }
            <Image source={
              contentVisible
                ? visibleImage
                : invisibleImage
            } style={styles.icons}/>
          </View>
        </TouchableOpacity>
        <View
          style={styles.content}
          onLayout={this.onLayout}
        >
          <View
            style={[
              styles.contentChild,
            ]}
          >
            { children }
          </View>
        </View>
      </Animated.View>           
            <Button title="" onPress={() => {WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx'),alert('Now login to your Eportfolio!');}}/>
          
<TouchableOpacity onPress={this.scanFingerPrint}>
<Image source={require('../assets/images/fingerprint.png')} style={{width: 100, height: 110, marginBottom: 50, marginTop: 50 }} />   
<Text style={{ color: 'white', fontSize: 15, marginLeft: 30, marginBottom: 50}}>Login</Text>
</TouchableOpacity>
          </View>
        </IndicatorViewPager>
</View>
);
  }


runAnimation = () => {
    const { contentVisible, headerHeight, contentHeight } = this.state;
    const initialValue = contentVisible
      ? headerHeight + contentHeight : headerHeight;
    const finalValue = contentVisible
      ? headerHeight : contentHeight + headerHeight;

    this.setState({
      contentVisible: !contentVisible,
    });

    this.animated.setValue(initialValue);
    Animated.spring(
      this.animated,
      {
        toValue: finalValue,
      },
    ).start();
  }

  onAnimLayout = (evt) => {
    const { isMounted, contentHeight } = this.state;
    const { contentVisible } = this.props;
    const headerHeight = evt.nativeEvent.layout.height;
    if (!isMounted && !contentVisible) {
      this.animated = new Animated.Value(headerHeight);
      this.setState({
        isMounted: true,
        headerHeight,
      });
      return;
    } else if (!isMounted) {
      InteractionManager.runAfterInteractions(() => {
        this.animated = new Animated.Value(headerHeight + contentHeight);
      });
    }
    this.setState({ headerHeight, isMounted: true });
  }

  onLayout = (evt) => {
    const contentHeight = evt.nativeEvent.layout.height;
    this.setState({ contentHeight });
  }

  onPress = () => {
    this.runAnimation();
  }
};

       

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={4} />;
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
      {

      text: 'Four',
      },

    ];
    return <PagerTabIndicator tabs={tabs} />;
  }
}

