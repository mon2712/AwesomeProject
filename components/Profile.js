import React, {Component} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import { Button, SearchBar, Avatar } from 'react-native-elements'

class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={styles.contSafe}>
                <View  style={styles.contImag}>
                    <Avatar
                        xlarge
                        rounded
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        />
                </View>
                <View style={[styles.contImag, styles.contBut]}>
                         <Button
                    buttonStyle = {styles.contButton}
                    title='Agregar mascota' 
                    raised  
                    icon={{name: 'add'}} 
                    onPress={this._handleHelpPress}/>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    contSafe:{
        flex: 1,
        flexDirection: 'column'
    },
    contImag:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contButton:{
        backgroundColor: '#4d2600' 
    },
    contBut:{
        justifyContent: 'flex-start'
    }
})

export {Profile};