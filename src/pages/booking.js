import { useEffect, useState } from "react";
import { Alert, Button, Modal, StyleSheet, Text, TextInput,TouchableOpacity,View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
//npm install react-native-modern-datepicker --save
import AsyncStorage from '@react-native-async-storage/async-storage';
import { endpoints } from "../components/endpoint";

export default function Booking(props){
    const pname = props.route.params.place;
    const price = props.route.params.price;
    const [date,setdate] = useState(false);
    const [data,setdata] = useState({'place':pname,'price':price,'name':'','person':"",'date':""})
    

    useEffect(()=>{
        props.navigation.setOptions({
            title: "Booking",
            headerStyle: {
               backgroundColor: '#f61111'
          },
    })
    },[])

    const BookingClick = ()=>{
        fetchData = async() => {
            console.log('fetchData call');
            const token = await AsyncStorage.getItem('book-token');
            fetch(`${endpoints.endpoint}/api/booking/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(data)
            }).then( resp => resp.json())
            .then( props.navigation.navigate('Bookinglist'))
            .catch( error => console.log(error))
        }
        if(data.name=="" || data.person=="" || data.date==""){
            Alert.alert("Please Fill  all name,person and date!")
        }else{
            fetchData();
        }
    }

    const dateopen = ()=>{
        setdate(true)
    }

    const inputCh = (name,value)=>{
        let t = {...data}
        t[name]=value
        setdata(t)
    }
    const selectedDate = (v)=>{
        setdate(false);
        let d = {...data}
        d["date"]=v.toString();
        setdata(d);
    }


    return(
        <View style={styles.container}>
            {props.route.params.bupdate?(
                <>
                <Text style={styles.label}>Place</Text>
            <TextInput style={styles.input} value={data.place} />

            <Text style={styles.label}>Price</Text>
            <TextInput style={styles.input} value={data.price} />
            </>
            ):(
            <>
                <Text style={styles.label}>Place</Text>
            <TextInput style={styles.input} value={pname} />

            <Text style={styles.label}>Price</Text>
            <TextInput style={styles.input} value={price.toString()} />
            </>
            )}

            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} value={data.name} onChangeText={(v)=>inputCh('name',v)}/>

            <Text style={styles.label}>Person</Text>
            <TextInput style={styles.input}  value={data.person} 
            keyboardType = 'number-pad' onChangeText={(v)=>inputCh('person',v)}/>

            <Text style={styles.label}>Date</Text>
            <Text style={styles.datetext}>{data.date}</Text>
            <TouchableOpacity style={{marginBottom:20}}>
                <Button onPress={dateopen} title="Pick Date"/>
            </TouchableOpacity>
            <Modal animationType="slide" visible={date}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <DatePicker mode="calendar" onDateChange={(v)=>selectedDate(v)} />
                    </View>
                </View>
            </Modal>
            <Button title="Booking" color="green" onPress={BookingClick}></Button>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:20,
        backgroundColor:"skyblue",
        height:"100%",
    },
    input:{
        width:250,
        height:30,
        borderRadius:10,
        backgroundColor:'white',
        padding:5,
        paddingLeft:20,
        marginLeft:50,
        marginBottom:15,
    },
    label:{
        fontSize:20,
        paddingRight:30,
        textAlign:"center",
        marginBottom:15,
    },
    inputview:{
        marginBottom:10,
        flexDirection: 'row',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        width:'90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      datetext:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
      }
})