import React, { useState } from "react";
import { View, Alert, FlatList } from 'react-native';
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
/** TOAST */
import Toast from "../../components/Toast";
/** DATA */
import { json_rides } from "../../constants/dados";


export default function Driver(props) {
  const [isLoading, setIsLoading] = useState(false);

  function handlerPassenger(id) {
    setIsLoading(true);
    Alert.alert("CARONA ACEITA", "Rua Dos Programadores, " + id)
    setIsLoading(false);
  }

  function handlerConfig() {
    props.navigation.navigate("configuration");
  }

  return (
    <View style={styles.container}>
      <Header title="VIAGENS DISPONÍVEIS" props={props}>
        <ButtonIcon
          iconName="list"
          onPress={handlerConfig}
        />
      </Header>
      <View style={styles.contentLista}>
        <FlatList
          data={json_rides}
          keyExtractor={(ride) => ride.ride_id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <ButtonList data={item} onPress={() => handlerPassenger(item.ride_id)} />
          }}
        />
      </View>
    </View>
  );
}