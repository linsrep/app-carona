import React from "react";
import { View, Text } from 'react-native';
/** STYLE */
import { styles } from "./styles";
/** HEADER */
import Header from "../../components/Header";
/** BUTTON ICON */
import ButtonIcon from "../../components/ButtonIcon";

export default function Configuration(props) {

  function handlerProfile() {
    props.navigation.navigate("profile");
  }

  return (
    <View style={styles.container}>
      <Header title="CONFIGURAÇÕES" props={props}>
        <ButtonIcon
          iconName="person"
          onPress={handlerProfile}
        />
      </Header>
      <Text style={styles.title}>APP LEVAEU!</Text>
      <Text style={styles.subtitle}>Página de Configurações</Text>
    </View>
  );
}