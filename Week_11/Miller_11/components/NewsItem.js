import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

// Function to create the NewsItem
function NewsItem(props) {
  // Call Navigation
  const navigation = useNavigation();

  // Function to handle if the user clicked a article
  function selectedNewsHandler() {
    // Pass the props.id to NewsId
    navigation.navigate("NewsDetail", {
      NewsId: props.id,
    });
  }

  return (
    // Create View for item Container
    <View style={styles.itemContainer}>
      {/* Create Pressable and when user presses go to the handler*/}
      <Pressable onPress={selectedNewsHandler}>
        {/* Create View for Image Container */}
        <View style={styles.imageContainer}>
          {/* Show Article Image with Url */}
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        {/* Create View for information */}
        <View style={styles.infoContainer}>
          {/* Show Headline of article */}
          <Text style={styles.headline}>{props.headline}</Text>
          {/* Show the date that the article was released */}
          <Text style={styles.articleReleased}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding:10, 
    marginBottom: 20,
    borderRadius: 7,
    borderWidth:5,
    borderRadius:4,
    borderColor: Colors.secondary800,
    backgroundColor: Colors.primary500,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  headline: {
    fontSize: 24,
    textAlign:'center',
    fontFamily: "noticiaBold",
    paddingBottom: 20,
  },
  articleReleased: {
    fontSize:16,
    fontFamily: "noticia",
  }
});
