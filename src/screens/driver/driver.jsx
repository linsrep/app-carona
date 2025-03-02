import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList } from 'react-native';
/** FONTS CUSTOM */
import { useFonts, NotoSans_400Regular, NotoSans_700Bold, NotoSans_800ExtraBold } from "@expo-google-fonts/noto-sans";
/** STYLE */
import { styles } from "./styles";
/** HEADER */
import Header from "../../components/Header";
/** BUTTON */
import Button from "../../components/Button";
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


export default function Driver() {
  const [isLoading, setIsLoading] = useState(false);

  function handlerPassenger() {
    setIsLoading(true);
    alert("Clicou No Botãozão de Motorista!")
    setIsLoading(false);
  }

  return (
    <View style={styles.container}>
      <Header title="VIAGENS DISPONÍVEIS">
        <ButtonIcon
          iconName="person"
          onPress={() => { }}
        />
      </Header>
      <View style={styles.contentLista}>
        <FlatList
          data={json_rides}
          keyExtractor={(ride) => ride.ride_id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <ButtonList items={item.passenger_name} />
          }}
        />
      </View>

      <StatusBar style="light" />
    </View>
  );
}