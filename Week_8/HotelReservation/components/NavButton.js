import { Pressable, View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/Colors";
// Function to structure NavButton
// Allows to go back and forth with Home and Menu Screens
function NavButton(props) {
  // Find the device window dimensions
  const { width, height } = useWindowDimensions();
  return (
    // Declare Button as a Pressable and set style
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      {/* Set View as buttonContainer */}
      <View style={styles.buttonContainer}>
        {/* Set View as textContainer */}
        <View style={styles.textContainer}>
          {/* Show Text for button */}
          <Text style={[styles.text, {fontSize: width * 0.07}]}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

// Export to different files
export default NavButton;

// Configure Style for Pressable
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width:1000,
    maxWidth:"70%",
    marginHorizontal:10,
    marginVertical:10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  textContainer: {},
  text: {
    padding: 8,
    fontSize: 25,
    fontFamily: "hotel",
    textAlign: "center",
    color: Colors.primary300,
  },
});
