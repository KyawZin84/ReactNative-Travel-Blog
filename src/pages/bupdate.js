import { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput,TouchableOpacity,View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { endpoints } from "../components/endpoint";

export default function BookingUpdate(props){
    const [date,setdate] = useState(false);
    const [data,setdata] = useState({})
    const bid = props.route.params.bid;
    useEffect(()=>{
        props.navigation.setOptions({
            title: "Booking Update",
            headerStyle: {
               backgroundColor: '#f61111'
          },
    })
    fetchData = async() => {
        console.log('fetchData call');
        const token = await AsyncStorage.getItem('book-token');
        fetch(`${endpoints.endpoint}/api/booking/${bid}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        }).then( resp => resp.json())
        .then( res=>setdata(res)) 
        .catch( error => console.log(error))
    }
    fetchData();
    },[])

    const updateClick = ()=>{
        fetchData = async() => {
            console.log('fetchData update call');
            const token = await AsyncStorage.getItem('book-token');
            fetch(`${endpoints.endpoint}/api/booking/${bid}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body:JSON.stringify(data)
            }).then( props.navigation.navigate('Bdetail',{"bdata":data}))
            .catch( error => console.log(error))
        }
        fetchData()
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
        setdata(d)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Place</Text>
            <TextInput style={styles.input} value={data.place} onChangeText={(v)=>inputCh('place',v)}/>

            <Text style={styles.label}>Price</Text>
            <TextInput style={styles.input} value={data.price?.toString()} onChangeText={(v)=>inputCh('price',v)}/>

            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} value={data.name} onChangeText={(v)=>inputCh('name',v)}/>

            <Text style={styles.label}>Person</Text>
            <TextInput style={styles.input}  value={data.person} onChangeText={(v)=>inputCh('person',v)}/>

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
            
            <Button title="Update Booking" color="green" onPress={updateClick}></Button>
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