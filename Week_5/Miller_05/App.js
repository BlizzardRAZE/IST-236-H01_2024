import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import Colors from "./constants/colors";


export default function App() {
  // Set Up Custom Fonts
  // Fonts can be found at Google Fonts
  const [fontsLoad] = useFonts({
    italiana: require("./assets/fonts/Italiana-Regular.ttf"),
    italianno: require("./assets/fonts/Italianno-Regular.ttf"),
  });

  // Set the state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  // Function to change to Menu Screen
  function menuScreenHandler() {
    setCurrentScreen("menu");
  }

  // Function to change to Home Screen
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // Show Home Screen on start up and change the current screen to menu screen whn user clicked the menu button
  let screen = <HomeScreen onNext={menuScreenHandler} />;

  // In the Menu Screen change the current screen to home page when user clicked the Home button
  if (currentScreen === "menu") {
    screen = <MenuScreen onNext={homeScreenHandler} />;
  }

  return (
    <>
      {/* Trent Miller */}
      {/* Sets the color for the user's status bar */}
      <StatusBar style="dark" />
      {/* Set SafeAreaProvider for Container */}
      <SafeAreaProvider style={styles.container}>
        {/* Show Screen Variable */}
        {screen}
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background500,
    alignItems: "center",
    justifyContent: "center",
  },
});
