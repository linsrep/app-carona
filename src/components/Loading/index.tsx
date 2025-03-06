import React from "react";
import { Text, Image, View, ActivityIndicator } from "react-native";
/** STYLES */
import { THEME } from "../../theme";
import { styles } from "./styles";

export default function Loading(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Aguarde!</Text>
       <ActivityIndicator color={THEME.COLOR.PRIMARY} size="large" />
    </View>
  )
}