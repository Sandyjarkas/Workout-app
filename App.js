import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./src/Home";
import Arms from "./src/Arms";
import Shoulders from "./src/Shoulders";
import Chest from "./src/Chest";
import Back from "./src/Back";
import Legs from "./src/Leg";
import Core from "./src/Core";
import ContactUs from "./src/Contact";
const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen
            name="Home"
            component={Home}
            options={{ headerShown : true, }}
        />
        <Drawer.Screen
            name="Arms"
            component={Arms}
            options={{ headerShown : true, }}
        />
        <Drawer.Screen
            name="Shoulders"
            component={Shoulders}
            options={{ headerShown : true, }}
        />
        <Drawer.Screen
            name="Chest"
            component={Chest}
            options={{ headerShown : true, }}
        />
        <Drawer.Screen
            name="Back"
            component={Back}
            options={{ headerShown : true, }}
        />
        <Drawer.Screen
            name="Legs"
            component={Legs}
            options={{ headerShown : true, }}
        />
        <Drawer.Screen
            name="Core"
            component={Core}
            options={{ headerShown : true, }}
        />
        <Drawer.Screen
            name="ContactUs"
            component={ContactUs}
            options={{ headerShown : true, }}
        />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
  );
}
