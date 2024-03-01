import { useEffect } from "react";

export default function LogOut(props){
    useEffect(()=>{
        props.navigation.navigate("Login");
    },[])
}