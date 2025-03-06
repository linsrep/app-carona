import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
/** STYLE */
import { styles } from "./styles";
import { THEME } from "../../theme";
/** ICONS */
import img from "../../constants/img";

type Props = {
  data: any;
}

export default function ButtonList({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.btn, data.status == "F" && { opacity: 0.5 }]}
      disabled={data.status == "F" ? true : false}
      {...rest}
    >
      <View style={styles.content}>
        <Image source={img.car} style={styles.car} />
        <Text style={[styles.title, data.status == "F" && styles.titleFinishRide]}>{data.passenger_name}</Text>
      </View>
      <View style={styles.contentAddress}>
        <MaterialIcons
          name="arrow-right"
          size={26}
          color={THEME.COLOR.SUCCESS}
        />
        <Text style={styles.address}>ORIGEM: {data.pickup_address}</Text>
      </View>
      <View style={styles.contentAddress}>
        <MaterialIcons
          name="arrow-left"
          size={26}
          color={THEME.COLOR.DANGER}
        />
        <Text style={styles.address}>DESTINO: {data.dropoff_address}</Text>
      </View>

    </TouchableOpacity>
  )
}