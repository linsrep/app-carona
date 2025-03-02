import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { THEME } from "../../theme";

type Props = {
  title: string;
  children: ReactNode;
}

export default function Header({ title, children }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <MaterialIcons
          name="arrow-back-ios"
          size={22}
          color={THEME.COLOR.PRIMARY}
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        {title}
      </Text>

      {children}
    </View>
  );
}