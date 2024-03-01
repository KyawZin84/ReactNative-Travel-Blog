import { useEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text,View } from "react-native";

export default function Detail(props){
    const post= props.route.params.post;

    useEffect(()=>{
        props.navigation.setOptions({
            title:"Place Detail",
            headerStyle:{
                backgroundColor:"yellow"
            }
        })
    },[])
    const booking = ()=>{
        props.navigation.navigate('Booking',{"place":post.name,"price":post.price})
    }
    return(
        <ScrollView style={{height:"100%",backgroundColor:"skyblue",}}>
        <View style={styles.container}>
            <Text style={styles.header}>{post.name}</Text>
            <Image source={post.image} style={{width:350,height:250}}/>
            <Text style={styles.about}>{post.about}</Text>
            <Text style={styles.label}>Region : <Text style={styles.value}>{post.region}</Text></Text>
            <Text style={styles.label}>Price : <Text style={styles.value}>{post.price}KS for each person</Text></Text>
            <Button onPress={booking} title="Booking" color="#841584" />
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
    about:{
        fontSize:20,
        marginTop:20,
        marginBottom:20,
    },
    label:{
        fontSize:20,
        color:"darkgreen",
        fontWeight:'bold',
        marginBottom:10,
    },
    value:{
        color:"blue"
    }
})