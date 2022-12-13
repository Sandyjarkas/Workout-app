import React from "react";
import {ScrollView, Text, View} from "react-native";
const Blue = "#3199E8";
const Pink = "#E252AA";
const Legs=({ navigation })=>{

    return(
        <>
            <ScrollView style={{marginVertical: 20, paddingHorizontal: 30,}}>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Glutes</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Hip Thrust</Text>
                <Text style={{fontSize: 17,}}>◉ KAS Glute Bridge</Text>
                <Text style={{fontSize: 17,}}>◉ Sumo Squat</Text>
                <Text style={{fontSize: 17,}}>◉ Glute Kickback</Text>
                <Text style={{fontSize: 17,}}>◉ Reverse Lunges</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Hamstrings</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Romanian Deadliftc</Text>
                <Text style={{fontSize: 17,}}>◉ Leg Curl</Text>
                <Text style={{fontSize: 17,}}>◉ Good Morning</Text>
                <Text style={{fontSize: 17,}}>◉ Leg Press</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Quads</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Barbell Squat</Text>
                <Text style={{fontSize: 17,}}>◉ Bulgarian Split Squat</Text>
                <Text style={{fontSize: 17,}}>◉ Walking Lunges</Text>
                <Text style={{fontSize: 17,}}>◉ Leg Press</Text>
                <Text style={{fontSize: 17,}}>◉ Leg Extension</Text>
                <Text style={{fontSize: 17,}}>◉ Step-up</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Calves</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Standing Calf Raises</Text>
                <Text style={{fontSize: 17,}}>◉ Seated Calf Raises</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
            </ScrollView>
        </>
    )

}

export default Legs;