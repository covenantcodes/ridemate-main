// src/App.tsx
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {MainStackParams} from "navigation/navigation.types";
import {enableScreens} from "react-native-screens";

enableScreens();

import Toast from "react-native-toast-message";
import {toastConfig} from "utils/ToastConfig";
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "store/store";
import RootNavigation from "navigation/RootNavigation";
import {View} from "react-native";

import HomeTabs from "navigation/HomeTabs";
import LoginScreen from "screens/auth/login/Login";
import ProductDetails from "screens/marketplace/screens/ProductDetails";

const Stack = createNativeStackNavigator<MainStackParams>();

const App = () => {
  const [fontsLoaded] = useFonts({
    DMSansThin: require("./src/assets/fonts/DMSans-Thin.ttf"),
    DMSansThinItalic: require("./src/assets/fonts/DMSans-ThinItalic.ttf"),
    DMSansLight: require("./src/assets/fonts/DMSans-Light.ttf"),
    DMSansExtraLight: require("./src/assets/fonts/DMSans-ExtraLight.ttf"),
    DMSansMedium: require("./src/assets/fonts/DMSans-Medium.ttf"),
    DMSansMediumItalic: require("./src/assets/fonts/DMSans-MediumItalic.ttf"),
    DMSansRegular: require("./src/assets/fonts/DMSans-Regular.ttf"),
    DMSansSemiBold: require("./src/assets/fonts/DMSans-SemiBold.ttf"),
    DMSansBold: require("./src/assets/fonts/DMSans-Bold.ttf"),
    DMSansExtraBold: require("./src/assets/fonts/DMSans-ExtraBold.ttf"),
    DMSansExtraBoldItalic: require("./src/assets/fonts/DMSans-ExtraBoldItalic.ttf"),
    DMSans36ptBold: require("./src/assets/fonts/DMSans_36pt-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <SafeAreaProvider>
            <NavigationContainer>
              <StatusBar style="auto" />
              <RootNavigation />
            </NavigationContainer>
            <Toast config={toastConfig} />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
