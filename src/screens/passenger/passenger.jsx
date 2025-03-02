import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
/** STYLE */
import { styles } from "./styles";
import { THEME } from "../../theme";
/** HEADER */
import Header from "../../components/Header";
/** TOAST - MENSAGENS */
import Toast from "../../components/Toast";
/** BUTTON */
import Button from "../../components/Button";
/** BUTTON ICON */
import ButtonIcon from "../../components/ButtonIcon";
/** TEXTINPUT */
import Input from "../../components/Input";
/** LOADING */
import Loading from "../../components/Loading";
/** ICONS */
import img from "../../constants/img";

export default function Passenger(props) {

  const username = "Diogo O. Lins";
  const address = "Rua FullStack, 999, Centro, Dracena / SP"

  const [toastMessage, setToastMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [myLocation, setMyLocation] = useState({
    latitude: -23.561747,
    longitude: -46.656244,
  });

  function handlerPassenger() {
    setIsLoading(true);
    setToastMessage("PEDIDO DE CARONA ENVIADO!");
    setInterval(function () {
      setIsLoading(false);
      setToastMessage(null);
    }, 5000);
  }

  function handlerProfile() {
    props.navigation.navigate("profile");
  }

  return (
    <View style={styles.container}>
      <Header title="ENCONTRE SUA CARONA" props={props}>
        <ButtonIcon
          iconName="person"
          onPress={handlerProfile}
        />
      </Header>
      {toastMessage && <Toast message={toastMessage} color={THEME.COLOR.SUCCESS} />}
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: -23.561747,
          longitude: -46.656244,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        <Marker coordinate={{
          latitude: -23.561747,
          longitude: -46.656244,
        }}
          title={username}
          description={address}
          image={img.location}
          style={styles.marker}
        />
      </MapView>
      <View style={styles.footer}>
        <View style={styles.footerFields}>
          <Text style={styles.footerText}>Origem: </Text>
          <Input
            placeholder="Origem de Partida"
          />
        </View>
        <View style={styles.footerFields}>
          <Text style={styles.footerText}>Destino: </Text>
          <Input
            placeholder="Destino da Carona"
          />
        </View>
        <Button title="PEDIR CARONA" onPress={handlerPassenger} isLoading={isLoading} />
      </View>
    </View>
  );
}