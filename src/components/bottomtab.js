import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import BookingList from "../pages/bookingList";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogOut from "./Logout";

function MybottomTab(){
    const Tab = createBottomTabNavigator();
    
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />),}}/>
            <Tab.Screen name="Bookinglist" component={BookingList} options={{tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />),}}/>
            <Tab.Screen name="Logout" component={LogOut} options={{tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />),}}/>
        </Tab.Navigator>
    )
}

export default MybottomTab;