import React, { ReactNode } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
/** STYLE */
import { styles } from "./styles";
import { THEME } from "../../theme";
/** ICONS */
import img from "../../constants/img";

type Props = {
  items: string;
}

export default function Header({ items }: Props) {
  return (
    <TouchableOpacity style={styles.btn}>
      <View style={styles.content}>
        <Image source={img.car} style={styles.car} />
        <Text style={styles.title}>{items}</Text>
      </View>
      <Text style={styles.address}>Origem: RUA DOS CAMELOS</Text>
      <Text style={styles.address}>Destino: RUA DOS PROGRAMADORES</Text>
    </TouchableOpacity>
  )
}