import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CampgroundsOverviewScreen from "./screens/CampgroundsOverviewScreen";
import Colors from "./constants/Colors"

// Call the native stack navigator once
const Stack = createNativeStackNavigator();

export default function App() {
  // Set Up Custom Fonts
  const [fontsLoaded, fontError] = useFonts({
    mountain: require("./assets/fonts/Mountain.ttf"),
  });

   // Wait and load all of the fonts for application
   const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // Turn off Splash Screen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);


  // Check to see if the fonts are not loaded as well if they are giving any errors
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    // If the fonts are loaded and there is no errors show screen
    return (
      <>
        <StatusBar style="light" />
        {/* Create Navigation Container */}
        <NavigationContainer style={styles.container}>
          {/* Utilize Stack to make a Navigator and Screen */}
          <Stack.Navigator
          // Set default screen to HomeScreen
            initialRouteName="HomeScreen"
            // Configure screen options in HomeScreen
            screenOptions={{
              headerStyle: {backgroundColor: Colors.primary500},
              headerTintColor: Colors.primary300,
              headerTitleStyle:{fontFamily: "mountain", fontSize: 40},
              contentStyle:{backgroundColor: Colors.primary800},
            }}
          >
            {/* Create Home Screen */}
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title:"Campground Locations"
            }}
            />
            {/* Create Campground Overview Screen */}
            <Stack.Screen
            name="CampgroundsOverviewScreen"
            component={CampgroundsOverviewScreen}
            />
          </Stack.Navigator>
          
          </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
});
