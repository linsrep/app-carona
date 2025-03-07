import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { THEME } from "../../theme";

type Props = {
  title: string;
  subtitle?: string;
  props: any;
  children: ReactNode;
}

export default function Header({ title, subtitle, props, children }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => { props.navigation.goBack(); }}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color={THEME.COLOR.PRIMARY}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>
        {subtitle &&
          <Text style={styles.subtitle}>
            ({subtitle})
          </Text>}
      </View>
      {children}
    </View>
  );
}