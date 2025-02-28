import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
/** STYLE */
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>APP CARONA</Text>
      <Text style={styles.subtitle}>Seu aplicativo seguro para encontrar caronas!</Text>
      <StatusBar style="auto" />
    </View>
  );
}