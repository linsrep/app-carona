import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/home/home";
import Passenger from "./screens/passenger/passenger";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Passenger" component={Passenger} />
      <Stack.Screen name="Driver" component={Driver} />
    </Stack.Navigator>
  </NavigationContainer>
}