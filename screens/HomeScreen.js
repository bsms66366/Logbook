import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/BSMS_logo_2015_WO.png')
                : require('../assets/images/splash.png')

            }
            style={styles.welcomeImage}
          />         
<Text style={styles.getStartedText}>BSMS dress code</Text>
<Text style={{ color: 'white', fontSize: 10, marginLeft: 20 }}>Working  in  a  clinical  environment  and  meeting  patients  will  bring  you  into  contact  with  many  different  people. The BSMS dress code has been designed to ensure:•Patients feel confident they are being seen by a team of professionals.•All  patients  and  visitors  feel  their  beliefs  are  respected.  Age  group,  ethnic  origin  and  religion  can  influence patients’ views on dress and it is important not to cause unnecessary offence or upset.•The dangers of infection are minimised.
The Dress Code below is based on the following principles:•To reduce risk of cross-infection (e.g. improved hand hygiene);•To avoid an unintentional injury to patients (e.g. from wristwatches or jewellery);•To reduce likelihood of injury to students (e.g. assault –   neck chains);•To respect the cultural values or beliefs of patients, visitors and staff; •To promote public confidence.You  should  always  dress  smartly  when  in  a  clinical  environment  and  when  meeting  patients.    Please  note  that this includes examinations which occur in, or simulate, the clinical environment such as the OCSEs. As a general rule, men should wear a shirt with smart trousers. Please note that, due to the risk of infection, ties may need to be removed during direct contact with patients. Women should wear a blouse/smart top with trousers or a skirt or a smart dress. During clinical work, short sleeves are preferred but, if necessary, long sleeves may be rolled up neatly.The following rules must always be followed whenever working with patients:•You must wear your identification badge at all times and ensure that it can be seen.•Jewellery  should  be  kept  to  a  minimum.  Dangling  earrings  and  facial  piercing  are  not  appropriate.    You may be required to cover or remove other jewellery.•Wrist watches should not be worn when in direct physical contact with patients.•Shoes should be neat and clean with a closed toe. Comfortable footwear is important but trainers are not acceptable.•Dress must be tidy and presentable.•Hair should be tied back.•Very short skirts, low cut tops or cropped tops are unacceptable.•Your face must be fully visible for the purposes of recognition and communication with patients and staff.  Head dresses worn as part of religious observance must not cover the face.•Nail varnish and false nails should not be worn.A  visible  photo  identity  name  badge  should  be  worn  and  clearly  displayed  at  all  times.    For  students  in  direct  patient  contact  only  the  clip-on  style  should  be  worn  to  reduce  contamination.  It  is  good  infection  control practice to clean ID badges daily to remove contaminants (as with phones and pens).The GP you are working with or member of his/her staff is within their rights to ask you to leave if they do not consider your appearance to be acceptable, and this will be recorded as an absence.If you are in any doubt what you should wear in the GP’s surgery it is best to ask the doctor in charge for advice.A full and more detailed version of the BSMS Dress Code can be found in Annex D of the BMBS Student Handbook on studentcentral..</Text>

        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText></MonoText>
          </View>

          <Text style={styles.getStartedText}>


          </Text>
        </View>
      </ScrollView>
      </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
     
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#026666',
  },
  developmentModeText: {
    marginBottom: 10,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 1,
  },
  welcomeImage: {
    width: 290,
    height: 160,
    resizeMode: 'contain',
    marginTop: 5,
    marginLeft: -10,
    marginBottom: 1,

  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(255,255,255, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 50,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#00627f',
  },
});
