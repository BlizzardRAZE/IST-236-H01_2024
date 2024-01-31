import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantItem from "./components/RestaurantItem";

export default function App() {
  const [restaurantItems, setRestaurantItems] = useState([
    {
      name: "Buffalo Wild Wings",
      image: require("./assets/images/bww.jpg"),
      rating: "8.7",
    },
    {
      name: "Moe's Southwest Grill",
      image: require("./assets/images/moes.jpg"),
      rating: "8.5",
    },
    {
      name: "Gino's New York Pizza",
      image: require("./assets/images/ginos.jpg"),
      rating: "8",
    },
    {
      name: "Yamato's Japanese Steakhouse",
      image: require("./assets/images/yamatos.jpg"),
      rating: "7.5",
    },
    {
      name: "Five Guys:\n Burgers and Fries",
      image: require("./assets/images/fiveguys.jpg"),
      rating: "7",
    },
  ]);

  return (
    <>
      {/* Set style for user's status bar */}
      <StatusBar style="dark" />
      {/* Set Safe Area View for app */}
      <SafeAreaView style={styles.rootContainer}>
        {/* Set View for Title Container */}
        <View style={styles.titleContainer}>
          {/* Set Text for Title */}
          <Text style={styles.title}>Top 5 Restaurants</Text>
        </View>

        {/* Set View for list Container */}
        <View style={styles.listContainer}>
          {/* Allow the user to scroll in the app */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
          >
            {/* Use Component to map data to it */}
            {restaurantItems.map((itemData) => (
              <RestaurantItem
                name={itemData.name}
                image={itemData.image}
                rating={itemData.rating}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#84f5d3",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "90%",
  },
});
