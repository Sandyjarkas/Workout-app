import React from "react";
import {Text, View} from "react-native";
const Blue = "#3199E8";
const Pink = "#E252AA";
const Arms=({ navigation })=>{

    return(
        <>
            <View style={{paddingVertical: 30, paddingHorizontal: 30,}}>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Biceps
                    Just exercise!</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Alternating Dumbbell Curl</Text>
                <Text style={{fontSize: 17,}}>◉ Hammer Curl</Text>
                <Text style={{fontSize: 17,}}>◉ Preacher Curl</Text>
                <Text style={{fontSize: 17,}}>◉ Incline Dumbbell Curl</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Triceps</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Cable Push-down</Text>
                <Text style={{fontSize: 17,}}>◉ Skull Crusher</Text>
                <Text style={{fontSize: 17,}}>◉ Overhead Extention</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Forearms</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Reverse Barbell Curl</Text>
                <Text style={{fontSize: 17,}}>◉ Wrist Curl</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
            </View>
        </>
    )

}

export default Arms;