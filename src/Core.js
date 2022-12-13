import React from "react";
import {ScrollView, Text, View} from "react-native";
const Blue = "#3199E8";
const Pink = "#E252AA";
const Core=({ navigation })=>{

    return(
        <>
            <ScrollView style={{marginVertical: 20, paddingHorizontal: 30,}}>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Absc</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Hanging Leg Raises</Text>
                <Text style={{fontSize: 17,}}>◉ Hanging Knee Raises</Text>
                <Text style={{fontSize: 17,}}>◉ Weighted Planks</Text>
                <Text style={{fontSize: 17,}}>◉ Cable Crunch</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Obliques</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Russian Twists</Text>
                <Text style={{fontSize: 17,}}>◉ Hanging Side-to-side Knees</Text>
                <Text style={{fontSize: 17,}}>◉ Single-leg Side Plank</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
            </ScrollView>
        </>
    )

}

export default Core;