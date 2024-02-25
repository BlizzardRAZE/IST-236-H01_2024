import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/Colors";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";

export default function App() {
  // Set Up Custom Fonts
  // Fonts can be found at Google Fonts
  const [fontsLoaded, fontError] = useFonts({
    chakraPetchBold: require("./assets/fonts/ChakraPetch-Bold.ttf"),
    chakraPetchRegular: require("./assets/fonts/ChakraPetch-Regular.ttf"),
  });

  // Wait and load all of the fonts for application
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // Turn off Splash Screen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Set the state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("");
  // Set the state variable for current price. Start at 0
  const [currentPrice, setCurrentPrice] = useState(0);

  // Create array holding the different times when scheduling
  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.accent800,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.accent800,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.accent800,
      },
    ],
    []
  );

  // Set the state variable for the repair Time id
  const [repairTimeId, setRepairTimeId] = useState(0);

  // Create array holding the name of service and price.
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  // Set the state variables for the two switches
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  // Function for the selected checkboxes
  // [ Selected Service Options ]
  function setServicesHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  // Function reset the value for services
  function unSetServicesHandler() {
    let changeValue = false;
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        services[i].value = changeValue;
      }
    }
  }

  // Functions for the switches
  // [ User signs up for newsletter ]
  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }
  // [ User signs up for rental membership ]
  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  // Calculate the options the user picked
  function orderReviewHandler() {
    let price = 0;
    // Calculate the Service Checkboxes
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }

    // Check if the Rental Membership is switched
    if (rentalMembership) {
      // If so, Add 100 to price
      price = price + 100;
    }

    // Calculate the Radio buttons
    price = price + repairTimeRadioButtons[repairTimeId].price;

    // Set the current price
    setCurrentPrice(price);
    // Change Current Screen
    setCurrentScreen("review");
  }

  // Function to change to Home Screen and reset everything
  function homeScreenHandler() {
    setCurrentPrice(0);
    setRepairTimeId(0)
    unSetServicesHandler();
    setNewsletter(false);
    setRentalMembership(false);
    setCurrentScreen("home");
  }

  // Show Home Screen on start up
  // Allow the user to interact with
  // Radio Buttons, Checkboxes, and Switches
  let screen = (
    <HomeScreen
      // Get
      repairTimeId={repairTimeId}
      repairTimeRadioButtons={repairTimeRadioButtons}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      // Set
      onSetRepairTimeId={setRepairTimeId}
      onSetServices={setServicesHandler}
      onSetNewsLetter={setNewsletterHandler}
      onSetRentalMembership={setRentalMembershipHandler}
      // Price Handler
      onNext={orderReviewHandler}
    />
  );

  // Check to see if the current screen is review
  if (currentScreen === "review") {
    screen = (
      // Change screen to Order Review Screen
      <OrderReviewScreen
        // Show all the options the user had selected
        time={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        price={currentPrice}
        // Change Screen
        onNext={homeScreenHandler}
      />
    );
  }

  // Validation

  // Check to see if the fonts are not loaded as well if they are giving any errors
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    // If the fonts are loaded and there is no errors show screen
    return (
      <>
        <StatusBar style="dark" />
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
