import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalColors from '../constants/styles';

// Function to create the PostItem
function PostItem(props) {
  // Call Navigation
  const navigation = useNavigation();

  // Function to handle if the user clicked a post
  function selectedPostHandler() {
    // Pass the props.id to NewsId
    navigation.navigate("PostDetail", {
      postId: props.id,
    });
  }

  return (
    // Create View for item Container
    <View style={styles.itemContainer}>
      {/* Create Pressable and when user presses go to the handler*/}
      <Pressable onPress={selectedPostHandler}>
        {/* Create View for Image Container */}
        <View style={styles.imageContainer}>
          {/* Show Article Image with Url */}
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        {/* Create View for information */}
        <View style={styles.infoContainer}>
          {/* Show Post Number */}
          <Text style={styles.postNumber}>Post: {props.postNumber}</Text>
          {/* Show the country where the post is at */}
          <Text style={styles.country}>{props.county}</Text>
        </View>
      </Pressable>
    </View>
  );
}

// Export to other Files
export default PostItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding:10, 
    marginBottom: 20,
    borderRadius: 7,
    borderWidth:5,
    borderRadius:4,
    borderColor: GlobalColors.accent500,
    backgroundColor: GlobalColors.primary400,
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
  postNumber: {
    fontSize: 24,
    textAlign:'center',
    fontFamily: "blackOps",
    color:'white',
  },
  country: {
    fontSize:16,
    fontFamily: "ibmPlexSans",
    color:'white'
  }
});
