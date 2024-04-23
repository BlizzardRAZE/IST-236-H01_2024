import { Text, StyleSheet, View, Image, ScrollView, Linking } from "react-native";
import { POSTS } from "../data/VFW-Data";
import { useLayoutEffect } from "react";
import GlobalColors from "../constants/styles";

// Function to show the PostDetailScreen
function PostDetailScreen(props) {
  // Get PostId from param
  const postId = props.route.params.postId;
    // Find the selected Post by searching the PostId
  const selectedPost = POSTS.find((post) => post.id === postId);


  // Change the layout to the Post's Number
  useLayoutEffect(() => {
    // Find the selected Post by searching the PostId
    const selectedPost = POSTS.find((post) => post.id === postId);
    // If found change the name, otherwise leave blank
    props.navigation.setOptions({
      title: selectedPost ? "Post: " + selectedPost.postNumber : null,
    });
  }, [postId, props.navigation]);
  return (
    // Create View for Root Container
    <View style={styles.rootContainer}>
      {/* Allow user to scroll through post information */}
      <ScrollView>
        {/* Create View for Image Container */}
        <View style={styles.imageContainer}>
          {/* Show Image based on the URL */}
          <Image
            style={styles.image}
            source={{ uri: selectedPost.postImageURL }}
          />
        </View>

        {/* Create View for information container */}
        <View style={styles.infoContainer}>
          {/* Show the Address of the post */}
          <Text style={styles.address}  onPress={() => Linking.openURL(`${selectedPost.postAddressURL}`)}>{selectedPost.postAddress}</Text>
          {/* Show the Phone number of the post */}
          <Text style={styles.phoneNumber} onPress={() => Linking.openURL(`tel:${selectedPost.postPhoneNumber}`)}>{selectedPost.postPhoneNumber}</Text>

          {/* Show the description of the post */}
          <Text style={styles.description}>{selectedPost.postDescription}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

// Export to different files
export default PostDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 15,
    height: 250,
    width: "95%",
    alignSelf: "center",
    borderWidth: 5,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    alignSelf: "center",
    backgroundColor:GlobalColors.primary200,
    marginVertical: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: "90%",
    borderWidth: 5,
  },
  address: {
    fontSize: 24,
    marginVertical: 5,
    textAlign: "center",
    fontFamily: "ibmPlexSansBold",
    color: GlobalColors.secondaryB500,
  },
  phoneNumber: {
    fontSize: 20,
    marginVertical: 15,
    textAlign: "center",
    fontFamily: "ibmPlexSansBold",
    color: GlobalColors.secondaryR500,
  },
  description: {
    textAlign:'center',
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 15,
    fontFamily: "ibmPlexSans",
  },
});
