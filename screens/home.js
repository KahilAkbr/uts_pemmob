import React, {Component} from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity, Linking} from "react-native";
import {Separator, Button, Avatar} from "../components/custom-component";
import {Divider} from 'react-native-paper';

class Home extends Component{
    navigateToNews = () => {
        this.props.navigation.navigate('News')
    }
    render(){
        const bio = {
            "name" : "Kahil",
            "fullName" : "Kahil Akbar Bayu Adityo",
            "nim" : "1203210038",
            "classes" : "IF-01-01",
        }
        const social = {
            "wa" : "https://wa.me/6289665855184",
            "github" : "https://github.com/KahilAkbr",
            "linkedin" : "https://www.linkedin.com/in/kahil-akbar-534684298/",
            "insta" : "https://www.instagram.com/kahilakbar/"
        }

        return(
            <View style={{flex: 1, flexDirection:'column'}}>
                <Separator height={15}/>

                <View style={[styles.logoContainer, {flex:1}]}>
                    <Image
                        source={require('../assets/ITTS.png')}
                        style={[styles.imageLogo, {marginLeft:25}]}
                    />
                    <Image
                        source={require('../assets/IF.png')}
                        style={[styles.imageLogo, {marginRight:25}]}
                    />
                </View>

                <Separator height={10}/>

                <View style={{flex:4}}>
                    <Avatar
                        source={require('../assets/avatar.jpeg')}
                    />
                    <Separator height={5}/>
                    <Text style={styles.titleText}>
                        {bio.name}'s Profile
                    </Text>
                </View>

                <View style={[styles.bioContainer,{flex:5}]}>
                    <View style={styles.bioTitle}>
                        <View style={styles.bioTitlePart}>
                            <Text style={styles.bioTitleContent}>
                                Nama Lengkap
                            </Text>
                        </View>
                        <Divider bold={'true'} style={{marginLeft:15}}/>
                        <View style={styles.bioTitlePart}>
                            <Text style={styles.bioTitleContent}>
                                NIM
                            </Text>
                        </View>
                        <Divider bold={'true'} style={{marginLeft:15}}/>
                        <View style={styles.bioTitlePart}>
                            <Text style={styles.bioTitleContent}>
                                Kelas
                            </Text>
                        </View>
                        <Divider bold={'true'} style={{marginLeft:15}}/>
                    </View>
                    <View style={styles.bioData}>
                        <View style={styles.bioDataPart}>
                            <Text style={styles.bioDataContent}>
                                {bio.fullName}
                            </Text>
                        </View>
                        <Divider bold={'true'} style={{marginRight:15}}/>
                        <View style={styles.bioDataPart}>
                            <Text style={styles.bioDataContent}>
                                {bio.nim}
                            </Text>
                        </View>
                        <Divider bold={'true'} style={{marginRight:15}}/>
                        <View style={styles.bioDataPart}>
                            <Text style={styles.bioDataContent}>
                                {bio.classes}
                            </Text>
                            <Divider bold={'true'} style={{marginRight:15}}/>
                        </View>
                    </View>
                </View>

                <Separator height={15}/>

                <View style={{flex:2}}>
                    <Text style={styles.socialText}>
                        Connect With Me:
                    </Text>
                    <Separator height={15}/>
                    <View style={styles.socialLayout}>
                        <TouchableOpacity onPress={() => Linking.openURL(social.github)}>
                            <Image
                                source={require('../assets/github.png')}
                                style={styles.socialLogo}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL(social.linkedin)}>
                            <Image
                                source={require('../assets/linkedin.png')}
                                style={styles.socialLogo}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL(social.insta)}>
                            <Image
                                source={require('../assets/instagram.png')}
                                style={styles.socialLogo}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL(social.wa)}>
                            <Image
                                source={require('../assets/wa.png')}
                                style={styles.socialLogo}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flex:1, justifyContent:'flex-end', paddingBottom:20}}>
                    <Button 
                        text="News List"
                        onPress={this.navigateToNews}
                    />
                </View>
            </View>
        );
    }
}

export default Home

const styles = StyleSheet.create({
    imageLogo:{
        maxWidth: 50,
        maxHeight: 50,
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
        fontFamily: 'monospace',
        fontSize: 22,
        color: '#000000',
        fontWeight : 'bold',
    },
    bioContainer:{
        maxHeight: 200,
        flexDirection: 'row',
    },
    bioTitle: {
        flex: 2,
    },
    bioData: {
        flex: 5,
    },
    bioTitlePart:{
        flex:1,
    },
    bioDataPart:{
        flex:1,
    },
    bioTitleContent:{
        flex:1,
        fontSize:18,
        fontFamily: 'monospace',
        textAlignVertical: 'center',
        marginLeft:20,
    },
    bioDataContent:{
        flex:1,
        fontSize:18,
        fontFamily: 'monospace',
        textAlignVertical: 'center',
        marginLeft:20,
        marginRight:20,
    },
    socialText:{
        fontSize:15,
        fontWeight:'bold',
        textAlign: 'center'
    },
    socialLayout:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    socialLogo:{
        maxWidth: 45,
        maxHeight: 45,
        resizeMode: 'contain'
    },
})