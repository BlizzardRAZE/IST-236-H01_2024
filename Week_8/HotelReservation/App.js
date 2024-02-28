import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/Colors";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback } from "react";
export default function App() {
  // Set Up Custom Fonts
  // Fonts can be found at Google Fonts
  const [fontsLoaded, fontError] = useFonts({
    hotel: require("./assets/fonts/TheHotelio.ttf"),
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
    backgroundColor:Colors.accent300,
  },
});
