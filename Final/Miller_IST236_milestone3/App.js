import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostDetailScreen from './screens/PostDetailScreen';
import PostScreen from './screens/PostScreen';
import CalendarScreen from './screens/CalendarScreen';
import StoreScreen from './screens/StoreScreen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import GlobalColors from './constants/styles';

// Get the native stack and tabs navigator
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

// Function to build Tab Navigator
function TabsNavigator() {
  return (
    // Create Tabs Navigator
    <Tabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalColors.primary400},
        headerTintColor: "white",
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: GlobalColors.primary600,
        tabBarActiveTintColor: GlobalColors.accent500,
        tabBarInactiveBackgroundColor: GlobalColors.primary800,
        tabBarInactiveTintColor: GlobalColors.primary200,
        tabBarLabel: {
          fontSize: 14,
          fontFamily: "ibmPlexSansBold",
        },
        tabBarStyle: {
          backgroundColor: GlobalColors.secondaryB500,
        },
      }}
    >
      {/* Create Tabs Screen for VFW Posts */}
      <Tabs.Screen
        name="Posts"
        component={PostScreen}
        options={{
          title:"VFW Posts",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Entypo  name="home" size={size} color={color} />
          ),
          tabBarLabel: "VFW Posts",

        }}
      />
      {/* Create Tabs Screen for Calender*/}
      <Tabs.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title:"Calendar",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Entypo  name="calendar" size={size} color={color} />
          ),
          tabBarLabel: "Calendar",
        }}
      />
      {/* Create Tabs Screen for Store*/}
      <Tabs.Screen
        name="Store"
        component={StoreScreen}
        options={{
          title:"VFW Store",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="store" size={size} color={color} />
          ),
          tabBarLabel: "Store",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  // Set Up Custom Fonts
  // Fonts can be found at Google Fonts and Font Space
  const [fontsLoaded, fontError] = useFonts({
    blackOps: require("./assets/fonts/BlackOpsOne-Regular.ttf"),
    ibmPlexSans: require("./assets/fonts/IBMPlexSans-Regular.ttf"),
    ibmPlexSansBold: require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    
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
        <StatusBar style="light" />
        {/* Create Navigation Container */}
        <NavigationContainer style={styles.container}>
          {/* Utilize Stack to make a Navigator and Screen */}
          <Stack.Navigator
            // Configure screen options in Stack Screen
            screenOptions={{
              headerTintColor: GlobalColors.primary200,
              headerStyle: { backgroundColor: GlobalColors.primary600},
              contentStyle: { backgroundColor: GlobalColors.primary400},
            }}
          >
            {/* Create Tab Screen for Tab Navigator */}
            <Stack.Screen
              name="BottomTabScreen"
              component={TabsNavigator}
              options={{
                headerShown: false,
              }}
            />
            {/* Create Post Detail Screen */}
            <Stack.Screen
              name="PostDetail"
              component={PostDetailScreen}
              options={{
                headerBackTitle: false,
              }}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
