import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
/** FONTS CUSTOM */
import { useFonts, NotoSans_400Regular, NotoSans_700Bold, NotoSans_800ExtraBold } from "@expo-google-fonts/noto-sans";
/** STYLE */
import { styles } from "./styles";
/** HEADER */
import Header from "../../components/Header";
/** BUTTON ICON */
import ButtonIcon from "../../components/ButtonIcon";

export default function Profile(props) {

  function handlerProfile() {
    props.navigation.navigate("home");
  }

  return (
    <View style={styles.container}>
      <Header title="PERFIL" props={props}>
        <ButtonIcon
          iconName="person"
          onPress={handlerProfile}
        />
      </Header>
      <Text style={styles.title}>APP CARONA</Text>
      <Text style={styles.subtitle}>Página de Perfil</Text>
      <StatusBar style="light" />
    </View>
  );
}