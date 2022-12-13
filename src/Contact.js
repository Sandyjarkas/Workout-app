import React from "react";
import {ScrollView, Text, TextInput, TouchableOpacity} from "react-native";
const Pink = "#E252AA";
const ContactUs=({ navigation })=>{

    return(
        <>
            <ScrollView style={{ marginTop : 40,paddingHorizontal : 30, }}>
                <TextInput placeholder={"Your Name"} style={{ width : "100%",paddingVertical : 8,paddingHorizontal : 15,borderRadius : 5,borderWidth : 1,borderColor : "#0003",marginTop : 20 }} />
                <TextInput placeholder={"Your Email"} style={{ width : "100%",paddingVertical : 8,paddingHorizontal : 15,borderRadius : 5,borderWidth : 1,borderColor : "#0003",marginTop : 10 }} />
                <TextInput placeholder={"Your Message"} multiline={true} style={{ width : "100%",paddingVertical : 8,paddingHorizontal : 15,borderRadius : 5,borderWidth : 1,borderColor : "#0003",marginTop : 10, }} />
                <TouchableOpacity style={{ width : "100%",paddingVertical :12,paddingHorizontal : 15,borderRadius : 5,marginTop : 20,backgroundColor : Pink, }} onPress={()=>{
                    alert("Message Sent");
                }}>
                    <Text style={{color : "#fff",textAlign : "center"}}>Send Message</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )

}

export default ContactUs;