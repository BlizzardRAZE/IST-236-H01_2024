import { Pressable, View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/Colors";
// Function to structure NavButton
// Allows to go back and forth with Home and Menu Screens
function NavButton(props) {
  // Find the device window dimensions
  const { width, height } = useWindowDimensions();

  // If in portrait mode, base size on screen width
  let size = width * 0.06;
  // If in landscape mode, base size on screen height
  if (width > height) {
    size = height * 0.1;
  }

  return (
    // Declare Button as a Pressable and set style
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      {/* Set View as buttonContainer */}
      <View style={[styles.buttonContainer, {width: width * 0.6}]}>
        {/* Set View as textContainer */}
        <View style={styles.textContainer}>
          {/* Show Text for button */}
          <Text style={[styles.text, {fontSize: size}]}>{props.children}</Text>
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
    backgroundColor: Colors.secondary500,
    borderColor:Colors.accent300,
    borderWidth:3,
    borderRadius: 300,
    marginHorizontal:10,
    marginVertical:10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  textContainer: {},
  text: {
    padding: 8,
    fontFamily: "archivoblack",
    textAlign: "center",
    color: Colors.primary500,
  },
});
