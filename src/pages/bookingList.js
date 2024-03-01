import { useEffect, useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { endpoints } from "../components/endpoint";

export default function BookingList(props){
    const [bdata,setdata] =useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

   const onRefresh = () => {
        setIsRefreshing(true)
        setTimeout(()=>{
		setIsRefreshing(false)
},1000)
   }

    useEffect(()=>{
        fetchData = async() => {
            console.log('fetchData list call');
            const token = await AsyncStorage.getItem('book-token');
            fetch(`${endpoints.endpoint}/api/booking/`, {
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
        props.navigation.setOptions({
            title:"Booking List",
            headerStyle:{
                backgroundColor:"lightgreen"
            }
        })

    },[isRefreshing])

    const bdetailclick = (item)=>{
        props.navigation.navigate('Bdetail',{"bdata":item});
        console.log(bdata)
    }
    
    return(
        <View style={styles.container}>
            <FlatList
                data={bdata}
                renderItem={({item})=>(
                    <View style={styles.itemview}>
                    <Text style={styles.placetext}>{item.place}</Text>
                    {item.name.length >=15?(
                    <View style={{marginTop:20}}>
                        <Text style={styles.btext1}>Name : <Text style={styles.btext2}>{item.name}</Text></Text>
                        <Text style={styles.btext1}>Date : <Text style={styles.btext2}>{item.date}</Text></Text>
                    </View>
                    ):(
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
                        <Text style={styles.btext1}>Name : <Text style={styles.btext2}>{item.name}</Text></Text>
                        <Text style={styles.btext1}>Date : <Text style={styles.btext2}>{item.date}</Text></Text>
                    </View>
                    )}
                    <TouchableOpacity onPress={()=>bdetailclick(item)} style={styles.button}>
                        <Text style={{textAlign:"center",color:"white"}}>Go to Detail</Text>
                    </TouchableOpacity>
    
                </View> 
                )}
                onRefresh={onRefresh}
                refreshing={isRefreshing}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:"skyblue",
        height:"100%"
    },
    bookingview:{
        width:"100%",
        backgroundColor:"white",
        borderRadius:10,
        padding:10,
    },
    placetext:{
        fontSize:25,
        textAlign:"center"
    },
    btext1:{
        fontSize:18,
        color:"#283747",
    },
    btext2:{
        color:"#1f618d"
    },
    button:{
        padding:10,
        borderRadius:5,
        margin:5,
        backgroundColor:"#9b59b6",
        width:"30%",
    },
    itemview:{
        backgroundColor:"white",
        padding:5,
        borderRadius:10,
        marginBottom:20,
    }
})

