import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen"
import { NavigationContainer } from '@react-navigation/native';
import Colors from './constants/Colors';
import HomeScreen from './screens/HomeScreen';
import CountryOverviewScreen from './screens/CountryOverviewScreen';



// Call the native stack navigator 
const Stack = createNativeStackNavigator();

export default function App() {
  
// Set Up Custom Fonts
// Fonts can be found at 1001 Fonts and Font Space
const [fontsLoaded, fontError] = useFonts({
  lakeWobegonNF: require("./assets/fonts/LakeWobegonNF.ttf"),
  meldina: require("./assets/fonts/Meldina.ttf"),
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
    {/* Show status bar */}
      <StatusBar style="dark" />
      {/* Create Navigation Container */}
      <NavigationContainer style={styles.container}>
        {/* Utilize Stack to make a Navigator and Screen */}
        <Stack.Navigator
        // Set default screen to HomeScreen
          initialRouteName="HomeScreen"
          // Configure screen options in HomeScreen
          screenOptions={{
            headerStyle: {backgroundColor: Colors.secondary800},
            headerTintColor: Colors.primary300,
            headerTitleStyle:{fontFamily: "meldina", fontSize: 30, color:"black"},
            contentStyle:{backgroundColor: Colors.primary800},
          }}
        >
          {/* Create Home Screen */}
          <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title:"Countries Around The World"
          }}
          />
          {/* Create Country Overview Screen */}
          <Stack.Screen
          name="CountryOverviewScreen"
          component={CountryOverviewScreen}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
