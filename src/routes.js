import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/home/home";
import Driver from "./screens/driver/driver";
import Passenger from "./screens/passenger/passenger.jsx"

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen
          name="passenger"
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerTransparent: true,
          }}
          component={Passenger} />
        <Stack.Screen
          name="driver"
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerTransparent: true,
          }}
          component={Driver} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}