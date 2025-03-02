import React from 'react';
import { TextInput, TextInputProps } from "react-native";

import { THEME } from "../../theme";
import { styles } from "./styles";

export default function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={THEME.COLOR.QUATERNARY}
      {...rest}
    />
  );
}