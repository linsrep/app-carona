import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
/** FONTS CUSTOM */
import { useFonts, NotoSans_400Regular, NotoSans_700Bold, NotoSans_800ExtraBold } from "@expo-google-fonts/noto-sans";
/** STYLE */
import { styles } from "./styles";
/** BUTTON */
import Button from "../../components/Button";

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
    return <Text>CARREGANDO</Text>
  }

  return (
    <View style={styles.container}>
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