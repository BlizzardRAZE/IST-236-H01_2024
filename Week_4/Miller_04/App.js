import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import MovieItem from "./components/Movieitem";

export default function App() {
  // Create data with movies
  const [movieItems, setMovieItems] = useState([
    {
      name: "Spider-Man: Into the Spider-Verse",
      image: require("./assets/images/spidermanintothespiderverse_poster.jpg"),
      rating: "8.4",
    },
    {
      name: "WALL·E",
      image: require("./assets/images/walle_poster.jpg"),
      rating: "8.4",
    },
    {
      name: "DeadPool",
      image: require("./assets/images/deadpool_poster.jpg"),
      rating: "8.0",
    },
    {
      name: "Guardians of the Galaxy",
      image: require("./assets/images/guardiansofthegalaxy_poster.jpg"),
      rating: "8.0",
    },
    {
      name: "Iron Man",
      image: require("./assets/images/ironman_poster.jpg"),
      rating: "7.9",
    },
    {
      name: "Big Hero 6",
      image: require("./assets/images/bigherosix_poster.jpg"),
      rating: "7.8",
    },
    {
      name: "Ready Player One",
      image: require("./assets/images/readyplayerone_poster.jpg"),
      rating: "7.4",
    },
    {
      name: "The Simpsons Movie",
      image: require("./assets/images/thesimpsonsmovie_poster.jpg"),
      rating: "7.3",
    },
    {
      name: "Free Guy",
      image: require("./assets/images/freeguy_poster.jpg"),
      rating: "7.1",
    },
    {
      name: "The Super Mario Bros. Movie",
      image: require("./assets/images/thesupermariobrosmovie_poster.jpg"),
      rating: "7.0",
    },
  ]);

  
  return (
    <>
      {/* Trent Miller */}
      {/* Set status bar styling */}
      <StatusBar style="light" />

      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set Title Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Top Ten Movies</Text>
        </View>

        {/* Set View for Movie Container */}
        <View style={styles.top10MovieContainer}>
          {/* Create Flat List to hold movies */}
          <FlatList
            // Use the movieItems List for data
            data={movieItems}
            renderItem={(itemData) => {
              return (
                // Use the MovieItem Component to set up app page
                <MovieItem
                  name={itemData.item.name}
                  image={itemData.item.image}
                  rating={itemData.item.rating}
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#014098",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45,
  },
  titleContainer:{
    flex: 1,
    backgroundColor: "#002457",
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 15,
    borderWidth: 5,
    borderRadius: 10,
    borderColor:"#94cdff",
  },
  title:{
    color:"white",
    fontSize: 40,
    fontWeight: "bold",
  },
  top10MovieContainer:{
    flex:6,
    width:"100%",
  }
});
