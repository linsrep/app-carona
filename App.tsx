import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from "./src/routes.js";
/** FONTS */
import { useFonts, NotoSans_400Regular, NotoSans_700Bold, NotoSans_800ExtraBold } from "@expo-google-fonts/noto-sans";
/** LOADING */
import Loading from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
    NotoSans_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </SafeAreaProvider>
  );
}