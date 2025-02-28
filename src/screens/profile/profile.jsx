import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
/** FONTS CUSTOM */
import { useFonts, NotoSans_400Regular, NotoSans_700Bold, NotoSans_800ExtraBold } from "@expo-google-fonts/noto-sans";
/** STYLE */
import { styles } from "./styles";

export default function Profile() {

  const [fontsLoaded] = useFonts(
    {
      NotoSans_400Regular,
      NotoSans_700Bold,
      NotoSans_800ExtraBold
    }
  );

  if(!fontsLoaded){
    return <Text>CARREGANDO</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>APP CARONA</Text>
      <Text style={styles.subtitle}>Página de Perfil</Text>
      <StatusBar style="light" />
    </View>
  );
}