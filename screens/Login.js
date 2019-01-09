import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking
  } from 'react-native';
import { Button } from 'react-native-elements'
import { WebBrowser } from 'expo';


export default class Login extends React.Component{
    render(){
        var Url = "http://digitalclasstest.com.mx/CEC_DC/";
        return(
            <View style={styles.container}>
                <ImageBackground style={{width: '100%', height: '100%'}}source={require('../assets/images/tienda.png')}>
                <View style={[styles.boxContainer, styles.contText]}>
                    <Text style={styles.contText}>¿Buscas accesorios para tu mascota?</Text>
                </View>
                <View style={[styles.boxContainer, styles.contText]}>
                    <Text style={styles.contText}>¿Quieres comprar comida para tu perro?</Text>
                </View>
               <View style={styles.boxContainer}>
                <Button
                    buttonStyle = {styles.contButton}
                    title='Ir a la tienda en linea' 
                    raised  
                    icon={{name: 'pets'}} 
                    onPress={this._handleHelpPress}/>
               </View>
               </ImageBackground>
            </View>
           
                
        )
    }
    _handleHelpPress = () => {
        WebBrowser.openBrowserAsync("http://digitalclasstest.com.mx/CEC_DC/");
      };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',

    },
    boxContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25, 
        color: 'white'
    },
    contButton:{
        backgroundColor: '#4d2600' 

    }
  });