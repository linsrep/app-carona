import React from "react";
import { View, Text, Alert } from 'react-native';
/** STYLE */
import { styles } from "./styles";
/** HEADER */
import Header from "../../components/Header";
/** BUTTON ICON */
import ButtonIcon from "../../components/ButtonIcon";

export default function Profile(props) {

  function handlerRides() {
    Alert.alert("CORRIDAS REALIZADAS", "Lista das corridas realizadas")
    //props.navigation.navigate("home");
  }

  return (
    <View style={styles.container}>
      <Header title="PERFIL" props={props}>
        <ButtonIcon
          iconName="list"
          onPress={handlerRides}
        />
      </Header>
      <Text style={styles.title}>APP LEVAEU!</Text>
      <Text style={styles.subtitle}>Página de Perfil</Text>
    </View>
  );
}