import React, {Component} from "react";
import {Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import Separator from "../components/separator";
import Avatar from "../components/avatar";

class Home extends Component{
    render(){
        const bio = {
            "name" : "Kahil",
            "fullName" : "Kahil Akbar Bayu Adityo",
            "nim" : "1203210038",
            "classes" : "IF-01-01",
        }
        const social = {
            "email" : "kahil.akbar@gmail.com",
            "github" : "https://github.com/KahilAkbr",
            "linkedin" : "https://www.linkedin.com/in/kahil-akbar-534684298/",
            "insta" : "https://www.instagram.com/kahilakbar/"
        }

        return(
            <View style={{flex: 1,backgroundColor: '#00897B'}}>
                <Separator height={15}/>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/ITTS.png')}
                        style={[styles.imageLogo, {marginLeft:25}]}
                    />
                    <Image
                        source={require('../assets/IF.png')}
                        style={[styles.imageLogo, {marginRight:25}]}
                    />
                </View>
                <Separator height={15}/>
                <Text style={styles.titleText}>
                    {bio.name}'s Profile
                </Text>
                <Avatar
                    source={require('../assets/avatar.jpeg')}
                />
            </View>
        );
    }
}

export default Home

const styles = StyleSheet.create({
    imageLogo:{
        maxWidth: 60,
        maxHeight: 60,
        resizeMode: 'contain'
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    titleText:{
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: 25,
        color: '#AA0002'
    }
    
})