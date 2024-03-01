import React, { useEffect } from 'react';
import {StyleSheet,FlatList, Text, View,Image} from "react-native"

function Home(props){
    const data =[
        {id:1,name:"Bagan(ပုဂံ)",region:"Mandalay(မန္တလေး)",image:require("../../img/img1.jpg"),price:40000,
        about:"တမ္မဒီပ(ခေါ်)ပုဂံသည် မြန်မာနိုင်ငံ၏ ပထမဆုံးဧကရာဇ်နိုင်ငံတည်ထောင်ရာ မြို့တော်ဟူ၍ မြန်မာတို့အတွက် အမျိုးသားရေး လက္ခဏာတစ်ရပ်အနေဖြင့်လည်းကောင်း၊ များပြားလှသည့် ရှေးဟောင်းလက်ရာ စေတီပုထိုးများကြောင့်လည်းကောင်း၊ ဗုဒ္ဓဘာသာဝင်များအတွက် ကြည်ညိုဖွယ်ရာ နာမည်ကျော်စေတီပုထိုးများကြောင့် သော်လည်းကောင်း ပြည်တွင်းခရီးသွားများနှင့် ကမ္ဘာလှည့်ခရီးသည်တို့ကို စွဲဆောင်ရာနေရာအဖြစ်လည်းကောင်း ကမ္ဘာကျော်သည့် နေရာတစ်နေရာဖြစ်သည်။"},
        {id:2,name:"Yangon(ရန်ကုန်)",region:"Yangon(ရန်ကုန်)",image:require("../../img/img2.jpg"),price:30000,
        about:"ရန်ကုန်မြို့ သည် မြန်မာနိုင်ငံ၏ ယခင်က မြို့တော်ဖြစ်ပြီး ရန်ကုန်တိုင်း၏ မြို့တော်လည်းဖြစ်သည်။လူဦးရေ ၇ သန်းကျော်ရှိသော ရန်ကုန်မြို့သည် မြန်မာနိုင်ငံ ၏ အကြီးမားဆုံး မြို့တော်နှင့် အရေးအကြီးဆုံးသော ကူးသန်းရောင်းဝယ်ရေး အချက်အချာအဖြစ် ဆက်လက် တည်ရှိနေသည်။ "},
        {id:3,name:"Mandalay(မန္တလေး)",region:"Mandalay(မန္တလေး)",image:require("../../img/img3.jpg"),price:50000,
        about:"မန္တလေးမြို့သည် မြန်မာနိုင်ငံ၏ ဒုတိယအကြီးဆုံးမြို့ဖြစ်ပြီး မန္တလေးတိုင်းဒေသကြီး၏မြို့တော်ဖြစ်သည်။ ၂၀၁၄ ခုနှစ် စာရင်းအရ လူဦးရေ ၁ ၂၂၅ ၅၅၃ ယောက် ရှိသည်။ စီးပွားရေးမြို့တော် ရန်ကုန်မြို့ မှ ၃၈၅မိုင် ကွာဝေး၍ ဧရာဝတီမြစ်၏ အရှေ့ဘက်တွင် တည်ရှိသည်။ ကုန်းဘောင်မင်းဆက် မြန်မာနိုင်ငံ၏ နောက်ဆုံးမင်းနေပြည်တော် ဖြစ်ခဲ့သည်။"},
        {id:4,name:"Inlay Lake(အင်းလေးကန်)",region:"Shan State(ရှမ်းပြည်နယ်)",image:require("../../img/img4.jpg"),price:55000,
        about:"အင်းလေးကန်သည် မြန်မာနိုင်ငံ ရှမ်းပြည်နယ်တောင်ပိုင်း၊ တောင်ကြီးမြို့နယ်၊ ညောင်ရွှေမြို့အနီးတွင် တည်ရှိသည်။ မိုးညှင်းခရိုင်ရှိ အင်းတော်ကြီးမှလွဲလျှင် မြန်မာနိုင်ငံ၏ ဒုတိယမြောက် အကြီးဆုံးကန်ဖြစ်သည်"},
        {id:5,name:"Pyin Oo Lwin(ပြင်ဦးလွင်)",region:"Mandalay(မန္တလေး)",image:require("../../img/img5.jpg"),price:60000,
        about:"ပြင်ဦးလွင် မြို့နယ်သည် မန္တလေးတိုင်းဒေသကြီး၊ ပြင်ဦးလွင်ခရိုင် အတွင်းတွင် တည်ရှိသည်။ ပင်လယ်ရေမျက်နှာပြင်မှ ၃၅၁၀ ပေအမြင့်တွင် တည်ရှိသည်။ ပြင်ဦးလွင်မြို့ကို တောင်နိမ့်များ ဝန်းပတ်လျက်ရှိသည်။ မန္တလေးမြို့ နှင့်မော်တော်ကားလမ်းအားဖြင့်( ၄၃)မိုင်အကွာ မန္တလေးလားရှိုး မော်တော်ကားလမ်းပေါ်တွင် တည်ရှိသည်။ အကျယ်အဝန်းအားဖြင့် ၁၇ စတုရန်းမိုင်မျှ ရှိသည်။ "},
    ];

    useEffect(()=>{
        props.navigation.setOptions({
            title: "Home",
            headerStyle: {
               backgroundColor: '#f17303'
          }
          });
    },[])

    const detailclick = (data)=> {
        props.navigation.navigate("detail",{"post":data})
    }

    return(
        <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={({item})=>(
                <Text onPress={()=>detailclick(item)} style={{marginBottom:20}}>
                <View style={styles.post}>
                <Image source={item.image} style={{width:350,height:200}}/>
                <Text style={styles.text}>{item.name}</Text>
                </View> </Text>
            )}

        />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"skyblue",
        paddingLeft:"5%",
        paddingTop:20,
    },
    post:{
        backgroundColor:"white",
        width:350,
        height:250,
        borderRadius:20,
        margin:10,
    },
    text:{
        color:"blue",
        textAlign:"center",
        fontSize:20,
        fontFamily:"monospace",
        marginTop:10,
    }
})
export default Home;


