import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
/** FONTS CUSTOM */
import { useFonts, NotoSans_400Regular, NotoSans_700Bold, NotoSans_800ExtraBold } from "@expo-google-fonts/noto-sans";
/** STYLE */
import { styles } from "./styles";
/** HEADER */
import Header from "../../components/Header";
/** BUTTON */
import Button from "../../components/Button";
/** BUTTON ICON */
import ButtonIcon from "../../components/ButtonIcon";
/** LOADING */
import Loading from "../../components/Loading";
/** TOAST */
import Toast from "../../components/Toast";


export default function Driver() {
  const [isLoading, setIsLoading] = useState(false);

  function handlerPassenger() {
    setIsLoading(true);
    alert("Clicou No Botãozão de Motorista!")
    setIsLoading(false);
  }

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

  return (
    <View style={styles.container}>
      <Header title="VIAGENS DISPONÍVEIS">
        <ButtonIcon
          iconName="person"
          onPress={() => {}}
          isLoading={isLoading}
        />
      </Header>
      <Text style={styles.title}>Motorista</Text>
      <Text style={styles.subtitle}>Diogo Lins</Text>
      <Button
        title="Aceitar Carona"
        onPress={handlerPassenger}
        isLoading={isLoading}
      />
      <StatusBar style="light" />
    </View>
  );
}