import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
/** STYLE */
import { styles } from "./styles";
/** ICONS */
import img from "../../constants/img"

export default function Home(props) {

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
        <Text style={styles.copyrightTitle}>Copyright (c) 2025 - APP LevaEU! Todos os direitos reservados</Text>
        <Text style={styles.copyrightTitle}>Desenvolvido por GOATech</Text>
      </View>
    </ImageBackground>
  );
}