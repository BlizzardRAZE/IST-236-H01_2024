import { Text, StyleSheet, View } from "react-native";
import { NEWSARTICLES } from "../data/dummy-data";
import NewsList from "../components/NewsList";

// Function to show the USNewsScreen
function USNewsScreen(props) {
  // Set the type of content to show on screen
  const type = "USA";

  // Get information from data and filter articles that match with type
  const displayedArticles = NEWSARTICLES.filter((newsItem) => {
    return newsItem.type === type;
  });

  // Show the list of items that that come from displayedArticles
  return <NewsList items={displayedArticles} />;
}

// Export to different files
export default USNewsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});
