import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
/** FONTS CUSTOM */
import { useFonts, NotoSans_400Regular, NotoSans_700Bold, NotoSans_800ExtraBold } from "@expo-google-fonts/noto-sans";
/** STYLE */
import { styles } from "./styles";
/** ICONS */
import img from "../../constants/img"
/** LOADING */
import Loading from "../../components/Loading";

export default function Home(props) {

  const [fontsLoaded] = useFonts(
    {
      NotoSans_400Regular,
      NotoSans_700Bold,
      NotoSans_800ExtraBold
    }
  );

  if (!fontsLoaded) {
    return <Loading />
  }

  function OpenPassenger() {
    props.navigation.navigate("passenger");
  }

  function OpenRide() {
    props.navigation.navigate("driver");
  }

  return (
    <ImageBackground source={img.bg} resizeMode="cover" style={styles.background}>

      <Image source={img.logo} style={styles.logo} />

      <TouchableOpacity style={styles.btnIconsHome} onPress={OpenPassenger}>
        <Image source={img.passenger} style={styles.iconHome} />
        <Text style={styles.title}>Passageiro</Text>
        <Text style={styles.subtitle}>Encontre uma carona para você</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnIconsHome} onPress={OpenRide}>
        <Image source={img.driver} style={styles.iconHome} />
        <Text style={styles.title}>Motorista</Text>
        <Text style={styles.subtitle}>Ofereça carona em seu carro</Text>
      </TouchableOpacity>

      <View style={styles.copyright}>
        <Text style={styles.copyrightTitle}>Copyright (c) 2025 - App Carona. Todos os direitos reservados</Text>
        <Text style={styles.copyrightTitle}>Desenvolvido por GOATech</Text>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}