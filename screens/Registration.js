//Registration

import React, { Component } from 'react';
import{ View,Text,Button, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { AccordionList } from "accordion-collapse-react-native";
import * as LocalAuthentication from 'expo-local-authentication';
import * as Location from 'expo-location';


export default class App extends React.Component {

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


  state = {
    data : [
      {
        title: 'Module',
        data: [
          {
            "name": "gp1",
            "postcode": "BN1 4DZ",
            "price": 13
          },
          {
            "name": "something food 2",
            "ingredients": "something",
            "price": 13
          }
        ]
      },
      {
        title: 'hot food',
        data: [
          {
            "name": "something food",
            "ingredients": "something",
            "price": 13
          },
          {
            "name": "something food 2",
            "ingredients": "something",
            "price": 13
          }
        ]
      },
    ],
  }

 // ?add css style here

  renderHead = (item) => {


    return(
        <Text style={{ fontSize: 18, fontWeight: '600' }}>
          {item.title}
        </Text>
    );
  }

  renderBody = (item) => {
    return (
      <View style={{padding:10, backgroundColor: '#e3e3e3'}}>
        {item.data.map(something => (
          <Text>{something.name}</Text>
        ))}
      </View>
    );
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <AccordionList
            list={data}
            header={this.renderHead}
            body={this.renderBody}
          />
      </View>
    );
  }
}


//or add css style here:
//<View style={styles.welcomeContainer}>
<View style={{backgroundColor: '#FFA221', justifyContent: 'center', alignItems: 'center'}}>
          
            <Text style={{ color: 'white', fontSize: 15, marginLeft: 30 }}>This log book contains details of your afternoon rotations, dress code, and some guidelines e.g. confidentiality. The clinical skills inventory which will be used to record your experiences of clinical skills teaching.</Text>
            
            <Button title="" onPress={() => {WebBrowser.openBrowserAsync('https://www.nhseportfolios.org/Anon/Login/Login.aspx'),alert('Now login to your Eportfolio!');}}/>
          
<TouchableOpacity onPress={this.scanFingerPrint}>
<Image source={require('../assets/images/fingerprint.png')} style={{width: 100, height: 130 }} />   
<Text>login here</Text>
</TouchableOpacity>
 </View>
  //</View>
const styles = StyleSheet.create({
  container: {
    flex: 1,    
},
});

/*styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,  
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 1,
  },
});*/

