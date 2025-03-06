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


export default function Passenger(props) {

  const userId = 1;
  const username = "Diogo Lins";

  // Referência do mapa para se mover conforme posição
  const mapRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [toastMessage, setToastMessage] = useState({});
  const [screenTitle, setScreenTitle] = useState("ENCONTRE SUA CARONA!");
  const [myLocation, setMyLocation] = useState({});
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");

  // Faz a busca se existir carona em aberto
  async function RequestRideFromUser() {
    // Acessa os dados na API
    const response = {
      ride_id: 1,
      passenger_user_id: 1,
      passenger_name: "Diogo Lins",
      passenger_phone: "(18) 99999-9999",
      pickup_address: "Av. Paulista, 1500 - Jardim Paulista",
      pickup_date: "2025-03-06",
      dropoff_address: "Shopping Morumbi",
      status: "P",
      driver_user_id: 2,
      driver_name: "João Martins",
      latitude: "-23.561747",
      longitude: "-46.656244"
    };

    // retorna se tem corrida ou não
    return response;
  }

  // Busca a localização do carona
  async function RequestPermissionAndGetLocation() {

    const { granted } = await requestForegroundPermissionsAsync();

    // Se tiver permissão, busque as coordenadas
    if (granted) {
      const currentPosition = await getCurrentPositionAsync();

      // Se as corrdenadas existirem, retorne-as
      if (currentPosition.coords) {
        return currentPosition.coords;
      } else {
        return {};
      }

    } else {
      // Se não tiver acesso, retorne vazio
      return {};
    }
  }

  // Requisita o nome da rua, número, bairro, cidade, estado... 
  async function RequestAddressName(lat, long) {
    const response = await reverseGeocodeAsync({
      latitude: lat,
      longitude: long
    });

    // Gera o endereço com Rua, número, bairro...
    if (response[0].street && response[0].streetNumber && response[0].district) {

      const cityUf = "";

      // Se achar a cidade, procure o estado (region)
      if (response[0].city) {
        // se não tiver região, imprimi só a cidade...
        if (!response[0].region) {
          cityUf = response[0].city;
        } else {
          // Se não, imprimi a cidade - estado
          cityUf = response[0].city + "-" + response[0].region;
        }
      }

      setPickupAddress(
        response[0].street + ", " +
        response[0].streetNumber + ", " +
        response[0].district + ", " + cityUF
      )
    }
  }

  // Carrega a tela inicial
  async function LoadScreen() {
    // Busca os dados pra verificar se tem corrida em aberto para o carona
    const response = await RequestRideFromUser();

    if (!response.ride_id) {
      // Busca a localização do usuário pedindo a permissão para uso do GPS
      const location = { latitude: -23.561747, longitude: -46.656244 };
      //const location = await RequestPermissionAndGetLocation();

      if (location.latitude) {
        setScreenTitle("ENCONTRE SUA CARONA!");
        setMyLocation(location);
        RequestAddressName(location.latitude, location.longitude);
      } else {
        setToastMessage({ message: "Não foi possível encontrar sua localização!", color: THEME.COLOR.DANGER });
        setInterval(function () {
          setToastMessage(null);
        }, 5000);
      }
    } else {
      // Seta a localização padrão só pra renderizar o mapa
      setScreenTitle(response.status == "P" ? "AGUARDANDO UMA CARONA..." : "CARONA CONFIRMADA!");
      setMyLocation({
        latitude: Number(response.latitude),
        longitude: Number(response.longitude),
      });
      setPickupAddress(response.pickup_address);
      setDropoffAddress(response.dropoff_address);
      setStatus(response.status);
    }
  }

  // Carrega os dados do carona
  async function handlerPassenger() {

    const json = {
      passenger_id: userId,
      pickup_address: pickupAddress,
      dropoff_address: dropoffAddress,
      pickup_latitude: myLocation.latitude,
      pickup_longitude: myLocation.longitude,
    }

    setIsLoading(true);
    setToastMessage({ message: "PEDIDO DE CARONA ENVIADO!", color: THEME.COLOR.SUCCESS });
    setInterval(function () {
      setIsLoading(false);
      setToastMessage(null);
      props.navigation.navigate("home");
    }, 5000);
  }

  async function handlerCancelRide() {

    const json = {
      passenger_id: userId,
      pickup_address: pickupAddress,
      dropoff_address: dropoffAddress,
      pickup_latitude: myLocation.latitude,
      pickup_longitude: myLocation.longitude,
    }

    setIsLoading(true);
    setToastMessage({ message: "PEDIDO DE CARONA CANCELADO!", color: THEME.COLOR.SUCCESS });
    setInterval(function () {
      setIsLoading(false);
      setToastMessage(null);
      props.navigation.navigate("home");
    }, 5000);
  }

  async function handlerFinishRide() {

    const json = {
      passenger_id: userId,
      pickup_address: pickupAddress,
      dropoff_address: dropoffAddress,
      pickup_latitude: myLocation.latitude,
      pickup_longitude: myLocation.longitude,
    }

    setIsLoading(true);
    setToastMessage({ message: "CARONA FINALIZADA!", color: THEME.COLOR.SUCCESS });
    setInterval(function () {
      setIsLoading(false);
      setToastMessage(null);
      props.navigation.navigate("home");
    }, 5000);
  }


  // Vai para o perfil do carona
  function handlerProfile() {
    props.navigation.navigate("profile");
  }

  //Inicializa o carregamento da tela
  useEffect(() => {
    LoadScreen();
  }, []);

  // Verificando localização em tempo real
  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response) => {

      // Seta a nova localização
      console.log("NOVA LOCALIZAÇÃO: ", response);
      setMyLocation({
        latitude: response.coords.latitude,
        longitude: response.coords.longitude
      });
      // Muda a câmera para uma visão 3D
      mapRef.current.animateCamera({
        pitch: 70,
        center: response.coords
      })

    });
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
              title={username}
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
                canEdit={status == "" ? true : false}
                onChangeText={(text) => setPickupAddress(text)}
              />
            </View>
            <View style={styles.footerFields}>
              <Text style={styles.footerText}>Destino: </Text>
              <Input
                placeholder="Destino da Carona"
                value={dropoffAddress}
                canEdit={status == "" ? true : false}
                onChangeText={(text) => setDropoffAddress(text)}
              />
            </View>
            {status == "P" && <View style={styles.footerFields}>
              <Text style={styles.footerText}>Motorista: </Text>
              <Input
                canEdite={false}
                value="Motorista"
                placeholder="Motorista"
              />
            </View>}
            {status == "" &&
              <Button title="PEDIR CARONA" onPress={handlerPassenger} isLoading={isLoading} />}

            {status == "P" &&
              <Button title="CANCELAR CARONA" onPress={handlerCancelRide} isLoading={isLoading} />}

            {status == "A" &&
              <Button title="FINALIZAR CARONA" onPress={handlerFinishRide} isLoading={isLoading} />}
          </View>
        </>
        :
        // se não achar o mapa, mostra o loading...
        <Loading />
      }
    </View>
  );
}