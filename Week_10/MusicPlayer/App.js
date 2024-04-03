import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import Colors from './constants/Colors'
import { NavigationContainer } from '@react-navigation/native';
import GenresScreen from './screens/GenresScreen';
import SongsOverviewScreen from './screens/SongsOverviewScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo } from "@expo/vector-icons" 
import FavoritesScreen from './screens/FavoritesScreen';
import SongDetailScreen from './screens/SongDetailScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator
      initialRouteName='SongGenres'
      screenOptions={{
        headerStyle : {backgroundColor: Colors.primary500},
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "house",
          fontSize:40,
          color:Colors.accent800,
        },
        sceneContainerStyle:{backgroundColor: Colors.primary800},
        drawerContentStyle:{ backgroundColor: Colors.primary500},
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800
      }}
    >
      <Drawer.Screen
        name='SongGenres'
        component={GenresScreen}
        options={{
          title:"Genres",
          drawerLabel: "Music Genres",
          drawerIcon:({color, size}) => (
            <Entypo name='list' color={color} size={size}/>
          )
        }}
      />
      <Drawer.Screen
        name='FavoriteSongs'
        component={FavoritesScreen}
        options={{
          title:"Favorites",
          drawerLabel: "My Favorites",
          drawerIcon:({color, size}) => (
            <Entypo name='star' color={color} size={size}/>
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {


    // Set Up Custom Fonts
    const [fontsLoaded, fontError] = useFonts({
      house: require("./assets/fonts/House Music.ttf"),
      jazz: require("./assets/fonts/Jazz Music-Italic.otf"),
      jazzBold: require("./assets/fonts/Jazz Music-Bold-Italic.otf"),
      jazzInverse: require("./assets/fonts/Jazz Music-Inverse.otf"),
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
          // Set default screen to SongGenres
            initialRouteName="SongGenres"
            // Configure screen options in SongGenres
            screenOptions={{
              headerStyle: {backgroundColor: Colors.primary500},
              headerTintColor: "white",
              headerTitleStyle:{fontFamily: "house", fontSize: 40, Colors: Colors.accent800,},
              contentStyle:{backgroundColor: Colors.primary800},
            }}
          >
            <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
            />
            {/* Create Song Overview Screen */}
            <Stack.Screen
            name="SongsOverview"
            component={SongsOverviewScreen}
            />
            {/* Create Song Detail Screen */}
            <Stack.Screen
            name="SongDetail"
            component={SongDetailScreen}
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
