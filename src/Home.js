import React from "react";
import {Text, View} from "react-native";

const Blue = "#3199E8";
const Pink = "#E252AA";
const Home = ({navigation}) => {

    return (
        <>
            <View style={{paddingVertical: 30, paddingHorizontal: 30,}}>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <Text style={{fontSize: 19,}}>Want to feel better, have more energy and even add years to your life?
                    Just exercise!</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Blue, marginVertical: 10,}}/>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
                <Text style={{fontSize: 17,}}>The health benefits of regular exercise and physical activity are hard to
                    ignore. Everyone benefits from exercise, regardless of age, sex or physical ability. It can improve
                    your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and
                    improve your ability to do everyday activities. Moreover, working out has been shown to decrease
                    stress levels and improve your mental health.</Text>
                <View style={{width: "100%", height: 2, backgroundColor: Pink, marginVertical: 10,}}/>
            </View>
        </>
    )

}

export default Home;