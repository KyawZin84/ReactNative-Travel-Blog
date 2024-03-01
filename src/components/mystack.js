import { createStackNavigator } from "@react-navigation/stack"
import MybottomTab from "./bottomtab";
import Detail from "../pages/detail";
import Booking from "../pages/booking";
import Bdetail from "../pages/bdetail";
import BookingUpdate from "../pages/bupdate";
import Login from "./Login";

export default function MyStack(){
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="bottomtab" component={MybottomTab} options={{headerShown: false,}}/>
            <Stack.Screen name="detail" component={Detail}/>
            <Stack.Screen name="Booking" component={Booking}/>
            <Stack.Screen name="Bdetail" component={Bdetail}/>
            <Stack.Screen name="Bupdate" component={BookingUpdate}/>
        </Stack.Navigator>
    )
}