import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text,TouchableOpacity,View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { endpoints } from "../components/endpoint";

export default function Bdetail(props){
    const bid= props.route.params.bid;
    const bdata = props.route.params.bdata;

    useEffect(()=>{
        props.navigation.setOptions({
            title:"Booking Detail",
            headerStyle:{
                backgroundColor:"yellow"
            }
        })
        // fetchData = async() => {
        //     console.log('fetchData detail call');
        //     const token = await AsyncStorage.getItem('book-token');
        //     fetch(`${endpoints.endpoint}/api/booking/${bid}/`, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Token ${token}`
        //         },
        //     }).then( resp => resp.json())
        //     .then( res=>setbdata(res)) 
        //     .catch( error => console.log(error))
        // }
        // fetchData();
    },[])

    const bdeleteclick =(id)=>{
        fetchData = async() => {
            console.log('delete call');
            const token = await AsyncStorage.getItem('book-token');
            fetch(`${endpoints.endpoint}/api/booking/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
            })
            .then( props.navigation.navigate('Bookinglist'))
            .catch( error => console.log(error))
        }
        fetchData();
    }

    const bupdateclick =(id)=>{
        props.navigation.navigate('Bupdate',{"bid":id})
    }
    
    return(
        <ScrollView style={{height:"100%",backgroundColor:"skyblue"}}>
        <View style={styles.container}>
            <Text style={styles.header}>{bdata.name}</Text>
            <Text style={styles.label}>Place : <Text style={styles.value}>{bdata.place}</Text></Text>
            <Text style={styles.label}>Date : <Text style={styles.value}>{bdata.date}</Text></Text>
            <Text style={styles.label}>Price : <Text style={styles.value}>{bdata.price}KS for each person</Text></Text>
            <Text style={styles.label}>Person : <Text style={styles.value}>{bdata.person}</Text></Text>
            <Text style={styles.label}>Total : <Text style={styles.value}>{bdata.price * bdata.person} KS</Text></Text>
        </View>
        <View style={{flexDirection:"row",marginLeft:"20%"}}>
            <TouchableOpacity onPress={()=>bupdateclick(bdata.id)} style={styles.button}>
                <Text style={{textAlign:"center",color:"white",fontSize:15}}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>bdeleteclick(bdata.id)} style={styles.button2}>
                <Text style={{textAlign:"center",color:"white",fontSize:15}}>Delete</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:20,
    },
    header:{
        fontSize:30,
        textAlign:"center",
        marginBottom:10,
    },
    label:{
        fontSize:20,
        color:"darkgreen",
        fontWeight:'bold',
        marginBottom:10,
    },
    value:{
        color:"blue"
    },
    button:{
        padding:10,
        borderRadius:5,
        margin:5,
        backgroundColor:"blue",
        width:"30%",
    },
    button2:{
        padding:10,
        borderRadius:5,
        margin:5,
        backgroundColor:"red",
        width:"30%",
    }
})