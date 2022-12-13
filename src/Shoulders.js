import React from "react";
import {Text, View} from "react-native";

const Blue = "#3199E8";
const Pink = "#E252AA";
const Shoulders = ({navigation}) => {

    return (
        <>
            <View style={{paddingVertical: 30, paddingHorizontal: 30,}}>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Front Delts</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ OverHead Press</Text>
                <Text style={{fontSize: 17,}}>◉ Arnold Press</Text>
                <Text style={{fontSize: 17,}}>◉ Front Raises</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Lateral Delts</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Lateral Raises</Text>
                <Text style={{fontSize: 17,}}>◉ Egyptians</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Rear Delts</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>◉ Rear Delt Fly Machine</Text>
                <Text style={{fontSize: 17,}}>◉ Barbell Rear Delt Row</Text>
                <Text style={{fontSize: 17,}}>◉ Dumbbell Rear Delt Fly</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
            </View>
        </>
    )

}

export default Shoulders;