import React from "react";
import CardInfo from "../Page/Cards/CardInfo";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import DocSog from "../Page/Doc/DocSog";
import {observer} from "mobx-react";
import MyWebComponent from "../general/MyWebComponent";


const Stack = createStackNavigator();
export default observer(() => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Займ'} options={{
                    title: '',
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: 'rgb(217,214,254)',
                    }, headerShown: true
                }} component={CardInfo}/>
                <Stack.Screen name={'web'} options={{
                    gestureEnabled: true,
                    title: '',
                    headerShown: true
                }} component={MyWebComponent}/>
                <Stack.Screen name={'Политика конфидициальности'} options={{
                    gestureEnabled: true,
                    title: '',
                    headerShown: false
                }} component={DocSog}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

})
