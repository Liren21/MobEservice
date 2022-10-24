import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {observer} from "mobx-react";
import MyWebComponent from "../Page/MyWebComponent/MyWebComponent";
import {StatusBar} from "react-native";



const Stack = createStackNavigator();
export default observer(() => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Займ'} options={{
                    title: '',
                    gestureEnabled: false,
                    headerStyle: {
                        backgroundColor: 'rgba(217,214,254,0)',
                    }, headerShown: false
                }} component={MyWebComponent}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

})
