import { Text, StyleSheet, View } from "react-native";
import { NEWSARTICLES } from "../data/dummy-data";
import { useContext } from "react";
import NewsList from "../components/NewsList";
import Colors from "../constants/Colors";
import { BookmarksContext } from "../store/context/bookmarks-context";

// Function to show the BookmarksScreen
function BookmarksScreen(props) {
  // Get and use the Context from BookmarkContext
  const bookmarkedArticlesCtx = useContext(BookmarksContext);
  // Search to find the bookmarked article from the id in bookmarkedArticlesCtx
  const bookmarkedArticles = NEWSARTICLES.filter((articleItem) => {
    return bookmarkedArticlesCtx.ids.includes(articleItem.id);
  });

  // If the user didn't save any articles display text saying there are no saved articles
  if (bookmarkedArticles.length === 0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text} >You Have No Articles Saved!</Text>
      </View>
    );
  }

  // Otherwise show the articles that the user did saved
  return <NewsList items={bookmarkedArticles}/>


}

// Export to different files
export default BookmarksScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
},
text: {
    fontSize: 26,
    textAlign:'center', 
    fontFamily:"noticiaBold",
},
});
