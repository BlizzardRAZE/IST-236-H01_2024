import {
  Pressable,
  View,
  Platform,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";

// Function to render a Country Gird Title
function CountryGridTile(props) {
  return (
    // Create Image Background
    <ImageBackground
      imageStyle={styles.backgroundImage}
      resize="cover"
      style={styles.gridItem}
      source={{ uri: props.imageUrl }}
    >
      {/* Create Pressable Button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary800 }}
        onPress={props.onPress}
      >
        {/* Create View for inner container */}
        <View style={styles.innerContainer}>
          {/* Show Country Name */}
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </Pressable>
    </ImageBackground>
  );
}

// Export to different files
export default CountryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.accent500,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible", // Hides android ripple overflow on android only
  },
  backgroundImage: {
    opacity: 0.9,
  },
  button: {
    justifyContent:'center',
    flex: 1,
  },
  name: {
    color: "black",
    textAlign: "center",
    fontSize: 28,
    fontFamily: "lakeWobegonNF",
  },
});
