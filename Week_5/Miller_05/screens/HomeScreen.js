import { View, StyleSheet, Text, Linking, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import Title from "../components/Title";

// Function to set up Home Screen
function HomeScreen(props) {
  // Set the Safe Area Screen Boundaries
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
      {/* Set View to hold Title */}
      <View style={styles.titleContainer}>
        {/* Show Restaurant's name */}
        <Title>Villa Tuscanna</Title>
      </View>

      {/* Set View to hold Image */}
      <View style={styles.imageContainer}>
        {/* Show Image of Restaurant */}
        <Image
          style={styles.image}
          source={require("../assets/images/Villa_Tuscanna_Building.jpg")}
        />
      </View>

      {/* Set View to hold information of Restaurant */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Restaurant Information</Text>

        {/* Show Location of Restaurant */}
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/Ziv6S16xQmzw2aDU7")
          }
        >
          97 Hwy 17 N{"\n"}North Myrtle Beach{"\n"}SC 29582
        </Text>

        {/* Show Phone Number of Restaurant */}
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:+18432802288")}
        >
          (843)-280-2288
        </Text>

        {/* Show Website of Restaurant */}
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://www.villatuscanna.com/")}
        >
          www.villatuscanna.com
        </Text>
      </View>

      {/* Set View for buttonContainer */}
      <View style={styles.buttonContainer}>
        {/* Set Text for NavButton */}
        <NavButton onPress={props.onNext}>View Menu</NavButton>
      </View>
    </View>
  );
}

// Export to different files
export default HomeScreen;

// Set Style for Home Screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
    borderWidth:3,
    borderRadius:5,
    borderColor:Colors.secondary500,
    marginBottom:25,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 350,
  },
  infoContainer: {
    flex: 3,
    marginBottom:25,
    justifyContent: "center",
    padding: 15,
    borderWidth:3,
    borderRadius:5,
    borderColor:Colors.secondary500,
    backgroundColor:Colors.primary500,
  },
  infoTitle: {
    fontSize: 45,
    textAlign: "center",
    color: Colors.accent500,
    fontFamily: "italianno",
  },
  infoText: {
    fontSize: 25,
    marginBottom:10,
    textAlign: "center",
    color: Colors.accent500,
    fontFamily: "italiana",
  },
  buttonContainer: {
    flex: 1,
  },
});
