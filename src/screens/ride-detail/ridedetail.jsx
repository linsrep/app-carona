import React, { useState, useEffect } from "react";
import { Text, View, Alert } from 'react-native';
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


export default function RideDetail(props) {

  // Dados capturados da rota.
  const rideId = props.route.params.rideId;
  const userId = props.route.params.useId;

  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState({});
  const [screenTitle, setScreenTitle] = useState("ENCONTRE SEU CARONA!");
  const [ride, setRide] = useState({});

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

    if (ride.passenger_name) {
      setScreenTitle(ride.passenger_name + " - " + ride.passenger_phone)
      setRide(ride);
    } else {
      setScreenTitle("Carona Não Encontrada!")
      Alert.alert("Tivemos um Problema!", "Pedido de carona não encontrado!");
      //props.navigation.navigate("driver");
    }
  }

  // Aceita a Viagem
  async function handlerAcceptRide() {
    const json = {
      driver_user_id: userId,
      ride_id: rideId
    }
    setIsLoading(true);
    setToastMessage({ message: "PEDIDO DE CARONA ACEITO!", color: THEME.COLOR.SUCCESS });
    setInterval(function () {
      setIsLoading(false);
      setToastMessage(null);
      // props.navigation.navigate("home");
    }, 3000);
  }

  // Cancela a Viagem
  async function handlerCancelRide() {

    const json = {
      driver_user_id: userId,
      ride_id: rideId
    }

    setIsLoading(true);
    setToastMessage({ message: "PEDIDO DE CARONA CANCELADO!", color: THEME.COLOR.DANGER });
    setInterval(function () {
      setIsLoading(false);
      setToastMessage(null);
      // props.navigation.navigate("home");
    }, 3000);
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

      {ride.pickup_latitude ?
        <>
          <MapView
            style={styles.map}
            provider={PROVIDER_DEFAULT}
            initialRegion={{
              latitude: ride.pickup_latitude,
              longitude: ride.pickup_longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
              altitude: 20,
            }}
          >
            <Marker coordinate={{
              latitude: ride.pickup_latitude,
              longitude: ride.pickup_longitude,
            }}
              title={screenTitle}
              description={ride.pickup_address}
              image={img.location}
              style={styles.marker}
            />
          </MapView>
          <View style={styles.footer}>
            <View style={styles.footerFields}>
              <Text style={styles.footerText}>Origem: </Text>
              <Input
                placeholder="Origem de Partida"
                value={ride.pickup_address}
                canEdit={false}
              />
            </View>
            <View style={styles.footerFields}>
              <Text style={styles.footerText}>Destino: </Text>
              <Input
                placeholder="Destino da Carona"
                value={ride.dropoff_address}
                canEdit={false}
              />
            </View>
            {ride.status == "P" &&
              <Button title="ACEITAR VIAGEM" onPress={handlerAcceptRide} isLoading={isLoading} />}

            {ride.status == "A" &&
              <Button title="FINALIZAR VIAGEM" onPress={handlerCancelRide} isLoading={isLoading} />}
          </View>
        </>
        :
        // se não achar o mapa, mostra o loading...
        <Loading />
      }
    </View>
  );
}