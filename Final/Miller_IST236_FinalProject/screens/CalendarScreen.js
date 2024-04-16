import { Text, StyleSheet, View } from "react-native";

// Function to show the CalendarScreen
function CalendarScreen(props) {
  return (
    <View>
      <Text>Calendar Screen</Text>
    </View>
  );
}

// Export to different files
export default CalendarScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});