import React, {useEffect, useState} from "react"
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { endpoints } from "./endpoint";

function Login(props){

  const [ user, setUser ] = useState({})

  const inputChanged = (name, value) => {
    let newUser = user;
    newUser[name] = value;
    setUser(newUser)
  }

  const clickLogin  = () =>  {
    console.log("login")
    fetch(`${endpoints.endpoint}/auth/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then( resp => resp.json())
    .then( res => {
        if (res.token) {
          console.log(res.token)
          props.navigation.navigate("bottomtab"); 
          AsyncStorage.setItem('book-token', res.token),
          AsyncStorage.setItem('refresh',"false"); 
        } else {
          Alert.alert("Username & Password Invalid !");
        }
    }).catch( error => Alert.alert(error.message))
  }

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/icon.png")} />
   
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            onChangeText={value => inputChanged('username', value)}
          />
   
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={value => inputChanged('password', value)}
          />
   
          <TouchableOpacity style={styles.login} onPress={clickLogin}>
            <Text style={{ color: 'white'}}> Login </Text>
          </TouchableOpacity>
      </View>
    );
  }


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: 100,
    height: 100
  },
  inputText: {
    height: 50,
    padding: 10,
    height: 45,
    width: "80%",
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#714B67', 
    borderWidth: 2
  },
  signup: {
    height: 20,
    marginBottom: 20,
  },
  login: {
    width: "70%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#714B67",
  },

});

export default Login;
