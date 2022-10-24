import * as React from 'react';
import {observer} from "mobx-react";
import WebView from "react-native-webview";

import {ActivityIndicator, BackHandler, StatusBar, StyleSheet, View} from "react-native";
import {useEffect, useRef, useState} from "react";


export default observer(() => {
    const webViewRef = useRef(null)
    const [canGoBack, setCanGoBack] = useState(false)
    const [canGoForward, setCanGoForward] = useState(false)
    const [currentUrl, setCurrentUrl] = useState('https://liren21.github.io/')

    const backActive = () => {
        if (canGoBack) {
            webViewRef.current.goBack()
        }
        return true
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backActive);
        () => BackHandler.removeEventListener('hardwareBackPress', backActive)
    }, [canGoBack])

    const Loading = () => <ActivityIndicator
        style={[styles.container, styles.horizontal]}
        color={"blue"}
        size={'large'}
    />
    return (
        <View style={{flex:1, width:"100%",height:"100%"}}>
            <StatusBar/>
        <WebView
            ref={webViewRef}
            source={{uri: currentUrl}}
            startInLoadingState
            renderLoading={Loading}
            onNavigationStateChange={
                navState => {
                    setCanGoBack(navState.canGoBack)
                    setCanGoForward(navState.canGoForward)
                    setCurrentUrl(navState.url)
                }
            }
        />
        </View>

    );
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});