import { Text, StyleSheet, View } from "react-native";

// Function to show the BookmarksScreen
function BookmarksScreen(props) {
  return (
    <View>
      <Text>Bookmarks Screen</Text>
    </View>
  );
}

// Export to different files
export default BookmarksScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});
