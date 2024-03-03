import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback } from "react";
import HomeScreen from "./screens/HomeScreen";
import Colors from "./constants/Colors";

export default function App() {
  // Set Up Custom Fonts
  // Fonts can be found at 1001 Fonts
  const [fontsLoaded, fontError] = useFonts({
    archivo:require("./assets/fonts/Archivo.ttf"),
    archivoblack: require("./assets/fonts/ArchivoBlack-Regular.ttf"),
  });

  // Wait and load all of the fonts for application
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // Turn off Splash Screen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Show Home Screen on start up
  let screen = <HomeScreen />;

  // Check to see if the fonts are not loaded as well if they are giving any errors
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    // If the fonts are loaded and there is no errors show screen
    return (
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
});
