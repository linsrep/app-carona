import React from 'react';
import { TextInput, TextInputProps } from "react-native";

import { THEME } from "../../theme";
import { styles } from "./styles";


type Props = TextInputProps & {
  canEdit?: boolean;
}

export default function Input({ canEdit = false, ...rest }: Props) {
  return (
    <TextInput
      style={[styles.container, !canEdit && styles.textInputDisabled]}
      editable={canEdit}
      placeholderTextColor={THEME.COLOR.QUATERNARY}
      {...rest}
    />
  );
}