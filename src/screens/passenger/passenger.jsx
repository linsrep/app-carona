import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
/** STYLE */
import { styles } from "./styles";
/** BUTTON */
import Button from "../../components/Button";
/** TEXTINPUT */
import Input from "../../components/Input";
/** LOADING */
import Loading from "../../components/Loading";
/** ICONS */
import img from "../../constants/img";

export default function Passenger() {

  const username = "Diogo O. Lins";
  const address = "Rua FullStack, 999, Centro, Dracena / SP"

  const [isLoading, setIsLoading] = useState(false);
  const [myLocation, setMyLocation] = useState({
    latitude: -23.561747,
    longitude: -46.656244,
  });

  function handlerPassenger() {
    setIsLoading(true);
    alert("Clicou No Botãozão!")
    setIsLoading(false);

  }


  if (!myLocation) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
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
      <StatusBar style="light" />
    </View>
  );
}