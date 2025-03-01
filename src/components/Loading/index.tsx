import React from "react";
import { View, ActivityIndicator } from "react-native";
/** STYLES */
import { THEME } from "../../theme";
import { styles } from "./styles";

export default function Loading(){
  return(
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLOR.PRIMARY} size="large" />
    </View>
  )
}