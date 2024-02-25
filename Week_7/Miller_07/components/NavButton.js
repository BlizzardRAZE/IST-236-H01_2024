import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
// Function to structure NavButton
// Allows to go back and forth with Home and Menu Screens
function NavButton(props) {
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
          <Text style={styles.text}>{props.children}</Text>
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
    borderWidth: 3,
    borderColor: Colors.primary500,
    borderRadius: 300,
    backgroundColor: Colors.primary800,
    width: "100%",
    paddingHorizontal: 10,
  },
  pressedItem: {
    opacity: 0.3,
    overflow: "hidden",
  },
  textContainer: {},
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "chakraPetchBold",
    color: Colors.accent000,
  },
});
