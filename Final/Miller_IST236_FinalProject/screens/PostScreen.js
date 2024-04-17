import { Text, StyleSheet, View } from "react-native";
import { POSTS } from "../data/VFW-Data";
import PostList from "../components/PostList";
import GlobalColors from "../constants/styles";

// Function to show the PostScreen
function PostScreen() {
  // Get information from data
  const vfwPostData = POSTS;

  // Show the list of items that come from vfwPostData
  return <PostList items={vfwPostData} />;
}

// Export to different files
export default PostScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});
