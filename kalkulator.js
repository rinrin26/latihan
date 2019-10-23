import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Alert
} from 'react-native';

class buatNama extends Component{
   
    render(){
        
        return(
            <View>              
                   <Text        
                   onPress={this.props.ganti}>              
                 {this.props.nama}      
                   </Text>
         </View>
        );
    }
    

}

class kalkulator extends Component {
    constructor(props) {
    super(props)
    this.state = {
    angka1: '',
    angka2: '',
    nama: 'Rinrin'
}
}
ganti(){
    this.setState({
    nama: 'Karmila'
    })
}
tambah(){
    Alert.alert('Hasil',(this.state.angka1 + this.state.angka2).toString());
}
kurang(){
    Alert.alert('Hasil',(this.state.angka1 - this.state.angka2).toString());
}
bagi(){
    Alert.alert('Hasil',(this.state.angka1 / this.state.angka2).toString());
}
kali(){
    Alert.alert('Hasil',(this.state.angka1 * this.state.angka2).toString());
}


render(){
    return(
        <View style={styleh.container}>
            <buatNama                
            ganti={() => this.ganti()}                
             nama={this.state.nama}
              /> 
                
               
        <View style={styleh.empty} />
        <Text extstyle={styleh.welcome}> masukan angka yang ingin dihitung : </Text>
        <View style={styleh.his} />

        <TextInput
        style={styleh.textInputStyle}
        placeholder="masukan angka ke 1"
        returnKeyLabel={"next"}
        onChangeText={(text) => this.setState({ angka1: (text) })}
        keyboardType='numeric'
        />
        
        <TextInput
        style={styleh.textInputStyle}
        placeholder="masukan angka ke-2"
        returnKeyLabel={"next"}
        onChangeText={(text) => this.setState({ angka2: (text) })}
        keyboardType='numeric'
        />
    <View style={styleh.tampung}>
        <View style={styleh.klikStyle}>
            <Button
            onPress={() => this.tambah()}
            styles={styleh.buttonStyle}
            color = "green"
            title=" + " />
        </View>
         <View style={styleh.klikStyle}>
            <Button
            onPress={() => this.kurang()}
            styles={styleh.buttonStyle}
            color = "brown"
            title=" - " />
        </View>
         <View style={styleh.klikStyle}>
            <Button
            onPress={() => this.bagi()}
            styles={styleh.buttonStyle}
            color = "grey"
            title=" / " />
        </View>
         <View style={styleh.klikStyle}>
            <Button
            onPress={() => this.kali()}
            styles={styleh.buttonStyle}
            color = "pink"
            title=" * " />
        </View>
        </View>
        <View style={styleh.empty}/>
        
    </View>

    );
}
}


const {width,height} = Dimensions.get('window')
const styleh = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    marginLeft: 16,
    marginRight:16
  },
  welcome:{
      fontSize : 22,
      fontFamily : 'Roboto',
      fontWeight: 'bold'
  },
  tampung:{
      flexDirection: 'row'
  },
  buttonStyle: {
   width: '30%'
},
  empty: {
    flex:1 
  },
  his:{
    borderBottomWidth:1,
    borderBottomColor:'rgba(100,100,100,0.4)',
    width : width,
    marginBottom: 10
  },
  klikStyle: { 
      flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center'

  }
  
  });


export default kalkulator;