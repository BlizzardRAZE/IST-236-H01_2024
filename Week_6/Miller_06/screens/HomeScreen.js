import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// Function to show the HomeScreen
function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    // Create SafeAreaInset
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Create View to hold title */}
      <View style={styles.titleContainer}>
        {/* Show Title */}
        <Title>Recipe Book</Title>
      </View>

      {/* Set View to hold Image */}
      <View style={styles.imageContainer}>
        {/* Show Image of Recipes*/}
        <Image
          source={require("../assets/images/multiple_recipes.jpg")}
          style={styles.image}
        />
      </View>

      {/* Create View for NavButton Container */}
      <View style={styles.navButtonContainer}>
        {/* Create Button to go to Recipes */}
        <NavButton onNext={props.onNext}>Go To Recipes</NavButton>
      </View>
    </View>
  );
}

// Export to different files
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 15,
    borderColor: "black",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
