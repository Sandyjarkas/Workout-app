import React from "react";
import {Text, View} from "react-native";
const Blue = "#3199E8";
const Pink = "#E252AA";
const Chest=({ navigation })=>{

    return(
        <>
            <View style={{paddingVertical: 30, paddingHorizontal: 30,}}>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Upper Chest</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Incline Bench Press</Text>
                <Text style={{fontSize: 17,}}>◉ Bench Press</Text>
                <Text style={{fontSize: 17,}}>◉ Low-to-high Cable Fly</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Middle Chest</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Close Grip Bench Press</Text>
                <Text style={{fontSize: 17,}}>◉ Close Grip Push-up</Text>
                <Text style={{fontSize: 17,}}>◉ Dumbbell Fly</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Lower Chest</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Decline Bench Press</Text>
                <Text style={{fontSize: 17,}}>◉ Incline Push-up</Text>
                <Text style={{fontSize: 17,}}>◉ High-to-low Cable Fly</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
            </View>
        </>
    )

}

export default Chest;