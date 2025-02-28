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
        <Stack.Screen name="passenger" options={{ headerShown: false }} component={Passenger} />
        <Stack.Screen name="driver" options={{ headerShown: false }} component={Driver} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}