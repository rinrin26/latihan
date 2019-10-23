// Creating the TextInput component (Input.js) 
 
import React from 'react' 
import { View, TextInput, StyleSheet } from 'react-native' 
 
const Masuk = () => (    
     <View style={styles.inContainer}>         
     <TextInput style={styles.input}
      placeholder='What needs to be done?'
       placeholderTextColor='#CACACA'
        selectionColor='#666666' />    
     </View> ) 
 
const styles = StyleSheet.create({    
     inContainer: {         
         marginLeft: 20, 
         marginRight: 20, 
         shadowOpacity: 0.2,
          shadowRadius: 3, 
          shadowColor: '#000000',         
          shadowOffset: { width: 2, height: 2 }     
        },     
        input: {        
             height: 60,         
             backgroundColor: '#ffffff', 
             paddingLeft: 10,
              paddingRight: 10     
            } 
        }) 
 
export default Masuk;