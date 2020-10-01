import React,{Component,useState} from "react";

import { View, Picker, StyleSheet, Text , Button, Alert} from "react-native";
import List from './List';
import DeprecatedViewPropTypes from "react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes";
class Drop extends Component  {
     //state = {Value:""}
     constructor(props) {
      super(props);
     }
     state = {
      pickerValues:[],
      Value:""
      }
      changeValue(Value){
        this.setState({Value});
      }
     GetMenuTypes = () => {
      fetch('https://limitless-crag-24152.herokuapp.com/Eatery/Dell%206%20Cafeteria')
      .then(response => response.json())
      .then(json => {
      console.log(json)
      this.setState({
      pickerValues:json
      })
      })
      }
      componentDidMount() {
        this.GetMenuTypes()
        }
    //  Gotomenu= () =>{
    //    console.log("Helo")
    //   navigation.navigate('Addmenu')
  
    //  }

  render(){
    let myMenu = this.state.pickerValues.map((Value,myIndex)=>{
      console.log('myValue: ' + Value)
      console.log('myIndex: ' + myIndex)
      return(
        <Picker.Item label={Value} value={Value} key={myIndex}/>
        )
      })
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose a meal:-</Text> 
      <Picker
         selectedValue = {this.state.Value}
        style={{ height: 50, width: 250 }}
        onValueChange={e => { this.setState({Value:e}); }}
       >
        <Picker.Item label="Choose one menu" value="4" />
        {/* <Picker.Item label="Breakfast" value="breakfast" />
        <Picker.Item label="Lunch" value="lunch" />
        <Picker.Item label="Dinner" value="dinner" />
        <Picker.Item label="Specials" value="specials" /> */}
        {myMenu}
      </Picker>
      
      <View style={styles.body}>
           <List listname = {this.state.Value} menunav={this.props.menu}
           />
      </View>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  text:{
    
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
  body: {
    marginTop:10,
    padding:20,
  },
  buttonContainer:{
      flexDirection:'column',
      paddingTop: 5,
      color: 'green',


  },
});

export default Drop;