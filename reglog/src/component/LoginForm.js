import React, {Component} from 'react';
import {
    StyleSheet,  
      TouchableOpacity,
     Image
 } from 'react-native';

 import {     
     Item, 
     Input,
     Form,
     View,
     Label,
     Button,Thumbnail,
     Text
     } from 'react-native' ;
 
import BgImage from './src/img/hijau.jpg';
import Logo from './src/img/logo.png';

class LoginForm extends Component{
    // constructor(props){
    //     super(props)

    // }

    render(){
        return(
           
        < View style ={styles.container}>
           
                <Image style={styles.bgImagestyle} source{...BgImage}/>
                <View style={styles.LogoStyle}>
                <Thumbnail square large source{...Logo}/>
                <Text style={styles.textLogoStyle} > logo </Text>
                </View>
                <Form style = {styles.formloginStyle}>
                    <Item floatingLabel>
                    <label>
                        <Text style={styles.inputStyle}> Username </Text>
                    </label>
                    </Item>
                    <Item floatingLabel>
                        <label>
                            <Text style= {styles.inputStyle}> password</Text> 
                        </label>
                        <input style={styles.inputStyle} secureTextEntrys {...true} />
                    </Item>
                </Form>
                <Button block info style={styles.footerBoxStyle}>
                    <Text> Sign in</Text>
                </Button>
                <View style ={styles.signup}>
                    <TouchableOpacity>
                        <Text style={styles.signupStyle}>
                            ddonts
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
       
    )};
 }


const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    bgImagestyle:{
        flex : 1,
        resizeMode: 'cover',
        justifyContent:'center',
        alignItems: 'center',
        position:'absolute',
        width:'100%',
        height: '100%'

    },
    logoStyle:{
        marginTop: 70,
        marginBottom: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogoStyle: {
        fontSize: 15,
        color : 'black'
    },
    formLoginStyle:{
        marginTop: -30,
        paddingLeft: 10,
        paddingRight: 30

    },
    inputStyle:{
        color : 'black',
        marginBottom: 6,
        fontSize:14
    },
    footerBoxStyle:{
        marginTop: 26,
        paddingTop: 10,
        marginLeft: 16,
        marginRight: 16

    },
    signup:{
        marginTop:25,
        alignItems: 'center'
    },
    signupStyle:{
        color:'black',
        fontSize: 12
    }


})

export default LoginForm;