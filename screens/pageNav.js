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
          style={{ height: 200 }}
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
You will be able to observe your clinical teachers seeing patients and, as you b
         
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
You will be able to observe your clinical teachers seeing patients and, as you b
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