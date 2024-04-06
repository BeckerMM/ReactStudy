import { Text, View, TextInput, Button } from "react-native";

import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login/login";
export default function App() {
  const Stack = createNativeStackNavigator();
  const array = ["Home", "About", "Contact", "Profile", "Settings"];
  const navegationRef = useNavigationContainerRef();
 
  return (
        <NavigationContainer ref={navegationRef}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="About" component={teste} />
          </Stack.Navigator>
        </NavigationContainer>
    
  );
}
