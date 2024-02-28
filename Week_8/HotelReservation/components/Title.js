import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/Colors";
// Function to structure Title
function Title(props) {
  // Find the device window dimensions
  const { width, height } = useWindowDimensions();

  // Show Text
  return (
    <Text style={[styles.title, { fontSize: width * 0.13 }]}>
      {props.children}
    </Text>
  );
}

// Export to different files
export default Title;

// Configure Style for Text => Title
const styles = StyleSheet.create({
  title: {
    fontFamily: "hotel",
    color: Colors.primary500,
    textAlign: "center",
  },
});
