import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from 'react-native';
/** STYLE */
import { styles } from "./styles";
/** HEADER */
import Header from "../../components/Header";
/** BUTTON ICON */
import ButtonIcon from "../../components/ButtonIcon";
/** BUTTON LIST */
import ButtonList from "../../components/ButtonList";
/** LOADING */
import Loading from "../../components/Loading";
/** DATA */
import { json_rides } from "../../constants/dados";
/** ICONS */
import img from "../../constants/img";



export default function Driver(props) {
  const userId = 2;
  const username= "Diogo O. Lins";
  const [isLoading, setIsLoading] = useState(false);
  const [rides, setRides] = useState([]);

  function handlerPassenger(id) {
    props.navigation.navigate("ride-detail", {
      rideId: id,
      userId: userId
    });
  }

  function handlerConfig() {
    props.navigation.navigate("configuration");
  }

  async function requestRides() {
    setIsLoading(true);
    setInterval(function () {
      setRides(json_rides);
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    requestRides();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Header title="VIAGENS DISPONÍVEIS" subtitle={username} props={props}>
        <ButtonIcon
          iconName="list"
          onPress={handlerConfig}
        />
      </Header>
      <View style={styles.contentLista}>
        {rides != "" ?
          <FlatList
            data={rides}
            keyExtractor={(ride) => ride.ride_id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return <ButtonList data={item} onPress={() => handlerPassenger(item.ride_id)} />
            }}
          />
          :
          <View style={styles.containerNotFound}>
            <Image source={img.car} style={styles.imgCar} />
            <Text style={styles.subtitle}>Sem Pedidos de Caronas!</Text>
          </View>
        }
      </View>
    </View>
  );
}