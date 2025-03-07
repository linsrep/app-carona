import React, { useState, useEffect, useRef } from "react";
import { Text, View, Alert } from 'react-native';
/** LOCALIZATION */
import { getCurrentPositionAsync, requestForegroundPermissionsAsync, reverseGeocodeAsync, watchPositionAsync, LocationAccuracy } from "expo-location";
/** MAPS - PROVIDER_DEFAULT ou PROVIDER_GOOGLE */
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
import { useSearchParams } from "expo-router/build/hooks";


export default function RideDetail(props) {

  const rideId = props.route.params.rideId;
  const userId = props.route.params.useId;
  const username = "Diogo Lins";

  // Referência do mapa para se mover conforme posição
  const mapRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState({});
  const [screenTitle, setScreenTitle] = useState("ENCONTRE SEU CARONA!");
  const [status, setStatus] = useState("");
  const [myLocation, setMyLocation] = useState({});
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [ridelocation, setRideLocation] = useState({});

  // Faz a busca se existir carona em aberto
  async function RequestRideFromUser() {
    // Acessa os dados na API
    const response = {
      ride_id: 1,
      passenger_user_id: 1,
      passenger_name: "Diogo Lins",
      passenger_phone: "(18) 99999-9999",
      pickup_address: "Av. Paulista, 1500 - Jardim Paulista",
      pickup_latitude: "-23.561747",
      pickup_longitude: "-46.656244",
      pickup_date: "2025-03-06",
      dropoff_address: "Dracena - SP",
      dropoff_latitude: "-21.4834",
      dropoff_longitude: "-51.5335",
      status: "P",
      driver_user_id: 2,
      driver_name: "João Martins",
      driver_phone: "(11) 99880-0000",
    };

    // retorna se tem corrida ou não
    return response;
  }

  // Carrega a tela inicial
  async function LoadScreen() {
    const ride = await RequestRideFromUser();

    if (ride) {
      setScreenTitle(ride.passenger_name + " - " + ride.driver_phone)
      setMyLocation({
        latitude: ride.pickup_latitude,
        longitude: ride.pickup_longitude
      })
      setPickupAddress(ride.pickup_address);
      setDropoffAddress(ride.dropoff_address);
    }
  }

  // Carrega os dados do carona
  async function handlerPassenger() {

    const json = {
      passenger_id: userId,
      pickup_latitude: myLocation.latitude,
      pickup_longitude: myLocation.longitude,
    }

    setIsLoading(true);
    setToastMessage({ message: "PEDIDO DE CARONA ACEITO!", color: THEME.COLOR.SUCCESS });
    setInterval(function () {
      setIsLoading(false);
      setToastMessage(null);
      props.navigation.navigate("home");
    }, 5000);
  }


  // Vai para o perfil do motorista
  function handlerProfile() {
    props.navigation.navigate("profile");
  }

  //Inicializa o carregamento da tela
  useEffect(() => {
    LoadScreen();
  }, []);

  return (
    <View style={styles.container}>

      {toastMessage && <Toast message={toastMessage.message} color={toastMessage.color} />}

      <Header title={screenTitle} props={props}>
        <ButtonIcon
          iconName="person"
          onPress={handlerProfile}
        />
      </Header>

      {myLocation.latitude ?
        <>
          <MapView
            ref={mapRef}
            style={styles.map}
            provider={PROVIDER_DEFAULT}
            initialRegion={{
              latitude: myLocation.latitude,
              longitude: myLocation.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker coordinate={{
              latitude: myLocation.latitude,
              longitude: myLocation.longitude,
            }}
              title={setScreenTitle}
              description={pickupAddress}
              image={img.location}
              style={styles.marker}
            />
          </MapView>
          <View style={styles.footer}>
            <View style={styles.footerFields}>
              <Text style={styles.footerText}>Origem: </Text>
              <Input
                placeholder="Origem de Partida"
                value={pickupAddress}
                canEdit={false}
                onChangeText={(text) => setPickupAddress(text)}
              />
            </View>
            <View style={styles.footerFields}>
              <Text style={styles.footerText}>Destino: </Text>
              <Input
                placeholder="Destino da Carona"
                value={dropoffAddress}
                canEdit={false}
                onChangeText={(text) => setDropoffAddress(text)}
              />
            </View>
            {status == "A" && <View style={styles.footerFields}>
              <Text style={styles.footerText}>Motorista: </Text>
              <Input
                canEdite={false}
                value={driverName}
              />
            </View>}
            {status == "" &&
              <Button title="ACEITAR VIAGEM" onPress={handlerPassenger} isLoading={isLoading} />}

            {status == "P" &&
              <Button title="CANCELAR VIAGEM" onPress={handlerCancelRide} isLoading={isLoading} />}

            {status == "A" &&
              <Button title="FINALIZAR VIAGEM" onPress={handlerFinishRide} isLoading={isLoading} />}
          </View>
        </>
        :
        // se não achar o mapa, mostra o loading...
        <Loading />
      }
    </View>
  );
}