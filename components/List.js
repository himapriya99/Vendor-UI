import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList,  TextInput, Modal, TouchableHighlight ,ScrollView,Button } from 'react-native';
import AddItem from './AddItem';
import Addmenu from './Addmenu';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
export default class List extends Component {
    constructor(props) {
        super(props);
        
        this.state =  {
            //GetMenuItems : GetMenuItems.bind(this),
            data : [
                //{"name":"2 Idly 1 wada with Sambar/Chutney","price":"30","description":"2 Idly 1 wada w Sambar/Chutney"},{"name":"Chole Bhature","price":"43","description":"Chole Bhature"},{"name":"Pongal/Flavoured Rice","price":"30","description":"Pongal/Flavoured Rice"},{"name":"Egg to Order(2 Egg) With Tomato Ketchup","price":"30","description":"Egg to Order(2 Egg) W Tomato Ketchup"}
            ],
      isModalVisible: false,
            inputText: '',
            inputPrice:'',
            editedItem: 0, 
        };
    }
    // setselectvalue = (value) => {
    //     console.log("value from List.js "+this.state.selectedvalue );
    //     this.setState({ selectedvalue: value })
    // }
    // // componentDidMount = ( ) => {
    // //     console.log("value from List.js "+this.state.selectedvalue );
    // //     this.props.parentcallback()
    // //   }
    // handleChange(e){
    //     var {Value} = e.target;
    //     this.setState({
    //       selectedvalue: value
    //     },() => this.props.changeValue(Value));
    //   }
    
    //  GetMenuItems () {
    //     //fetch(`https://limitless-crag-24152.herokuapp.com/Eatery/Dell%206%20Cafeteria/${this.state.selectedvalue}`)
    //      fetch(`https://limitless-crag-24152.herokuapp.com/Eatery/Dell%206%20Cafeteria/${this.props.listname}`)
    //     .then(response => response.json())
    //     .then(json => {
    //     console.log("response from API"+json)
    //     this.setState({
    //        data:json
    //     })
    //     })
    //      }
        //  async componentDidMount() {
        //    console.log("response "+this.props.listname)
        //     await List.GetMenuItems
          
        //    }
        // componentDidUpdate() {
        //     // //     console.log("response "+this.props.listname)
        //        this.GetMenuItems()
              
        //       }
    //      setdatavalue = (value) => {
    //     console.log("value from List.js " );
    //     this.setState({ data: value })
    // }
        // static getDerivedStateFromProps = async (props, state) => {
        static async getDerivedStateFromProps(props, state){
       // componentWillReceiveProps(props) {
          // var temp1 = null
          var json1 =null
            console.log("response "+props.listname)
           await fetch(`https://limitless-crag-24152.herokuapp.com/Eatery/Dell%206%20Cafeteria/${props.listname}`)
        .then(response => response.json())
        .then(json => {
        console.log("response from API"+json)
        json1=json
        //data=json
    })
         console.log("data"+json1)
         if (true) {
            // return {
            //   data: json1,
            // };
             this.setState({
                data:json1
            })
          }
             
     }

    setModalVisible = (bool) => {
        this.setState({ isModalVisible: bool })
    }

    setInputText = (text) => {
        this.setState({ inputText: text })
      
    }

    setInputPrice = (price) => {
        this.setState({ inputPrice: price })
      
    }

    setEditedItem = (id) => {
        this.setState({ editedItem: id })
    }
    // setDeletedItem = (id) => {
    //     this.setState({deleteitem: id})
    // }

    handleEditItem = (editedItem) => {
        const newData = this.state.data.map( item => {
            if (item.id === editedItem ) {
                item.text = this.state.inputText
                item.price= this.state.inputPrice
                return item
            }
            return item
        })
        this.setState({ data: newData })
    }
    // handleDeleteItem = (deleteitem) => {
    //     const newData = this.state.data.splice(item =>{
    //         iitem.text, item.price
    //     })
    //     this.setState({ data: newData })
    // }


    renderItem = ({item}) => (
        <TouchableHighlight onPress={() => {this.setModalVisible(true); this.setInputText(item.name),this.setInputPrice(item.price), this.setEditedItem(item.id)}}
            underlayColor={'#f1f1f1'}> 
            <View style={styles.item} >
                <View style={styles.marginLeft}>
                    <View style={[styles.menu, { backgroundColor: "green"}]}></View>
                    <View style={[styles.menu, { backgroundColor: "green" }]}></View>
                    <View style={[styles.menu, { backgroundColor: "green" }]}></View>
                </View>
                    {/* <Text style={styles.text}> {item.text} </Text> */}
                    <Text style={styles.text}> {item.name} </Text>
                    <Text style={styles.text}> {item.price} </Text>
            </View>
        </TouchableHighlight>
        
    )
    FunctionToOpenSecondActivity = () =>
  {
     this.props.navigation.navigate('Addmenu');
     
  }
    
    render() {
        console.log("Hello"+this.state.data)
        return (
            <View style={styles.contentContainer}>
                {/* setselectvalue = (this.props.Value) */}
                <View style={styles.header}>
                    <Text style={styles.headerText}> Today's Menu </Text>
                </View> 
                <FlatList 
                    data={this.state.data}
                    keyExtractor={(item) => item.toString()} 
                    //keyExtractor={(item, index) => item.toString()}
                    renderItem={this.renderItem}
                    
                   
                />
                <Modal animationType="fade" visible={this.state.isModalVisible} 
                    onRequestClose={() => this.setModalVisible(false)}>
                    <View style={styles.modalView}>
                        <Text style={styles.text}>Change details:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => {this.setState({inputText: text}); console.log('state ', this.state.inputText)}}
                            defaultValue={this.state.inputText}
                            editable = {true}
                            multiline = {false}
                            maxLength = {200}
                        /> 
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(price) => {this.setState({inputPrice: price}); console.log('state ', this.state.inputPrice)}}
                            defaultValue={this.state.inputPrice}
                            editable = {true}
                            multiline = {false}
                            maxLength = {200}
                        /> 
                        <TouchableHighlight onPress={() => {this.handleEditItem(this.state.editedItem); this.setModalVisible(false)}} 
                            style={[styles.touchableHighlight, {backgroundColor: 'green'}]} underlayColor={'#f1f1f1'}>
                            <Text style={styles.text}>Save</Text>
                        </TouchableHighlight>  
                        <TouchableHighlight onPress={() => {this.handleEditItem(this.state.editeditem); this.setModalVisible(false)}} 
                            style={[styles.touchableHighlight, {backgroundColor: 'green'}]} underlayColor={'#f1f1f1'}>
                            <Text style={styles.text}>Delete</Text>
                        </TouchableHighlight> 
                        
                    </View>           
                </Modal> 

                {/* <TouchableHighlight onPress={() => {this.handleEditItem(this.state.addItem); this.setModalVisible(false)}} 
                            style={[styles.touchableHighlight, {backgroundColor: 'green'}]} underlayColor={'#f1f1f1'}>
                            <Text style={styles.text}> + Add Item</Text>
                </TouchableHighlight>  */}
                <View>
                <Button
                         title="Add Item"
                          color="green"
                        onPress={(e) =>{ console.log("ButtonPressed");
                            //this.props.navigation.navigate('Addmenu')
                           this.props.menunav(e)}
                    }
                    
                       // onPress = { this.FunctionToOpenSecondActivity }
          
                       />
                </View>
                
            </View>
        )
    }
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        height: 70,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    contentContainer: {
        backgroundColor: 'white',
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
    },
    marginLeft: {

        marginLeft: 5,
    },
    menu: {
        width: 10,
        height: 2,
        backgroundColor: '#111',
        margin: 2,
        borderRadius: 3,
    },
    text: {
        marginVertical: 30,
        marginVertical: 20,
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    textInput: {
        width: '90%',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        borderColor: 'gray', 
        borderBottomWidth: 2,
        fontSize: 16,
    },
    modalView: {
        flex: 1, 
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableHighlight: {
        backgroundColor: 'white', 
        marginVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
    } 
})