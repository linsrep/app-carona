import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
/** FONTS CUSTOM */
import { useFonts, NotoSans_400Regular, NotoSans_700Bold, NotoSans_800ExtraBold } from "@expo-google-fonts/noto-sans";
/** STYLE */
import { styles } from "./styles";
/** ICONS */
import img from "../../constants/img"

export default function Home() {

  const [fontsLoaded] = useFonts(
    {
      NotoSans_400Regular,
      NotoSans_700Bold,
      NotoSans_800ExtraBold
    }
  );

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>
  }

  return (
    <ImageBackground source={img.bg} resizeMode="cover" style={styles.background}>

      <Image source={img.logo} style={styles.logo} />

      <TouchableOpacity style={styles.btnIconsHome}> 
        <Image source={img.passenger} style={styles.iconHome} />
        <Text style={styles.title}>Passageiro</Text>
        <Text style={styles.subtitle}>Encontre uma carona para você</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnIconsHome}>
        <Image source={img.driver} style={styles.iconHome} />
        <Text style={styles.title}>Motorista</Text>
        <Text style={styles.subtitle}>Ofereça carona em seu carro</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}