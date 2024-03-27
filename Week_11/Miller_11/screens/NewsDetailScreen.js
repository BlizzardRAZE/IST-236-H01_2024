import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { NEWSARTICLES } from "../data/dummy-data";
import { useContext, useLayoutEffect, useState } from "react";
import BookmarkButton from "../components/BookmarkButton";
import { BookmarksContext } from "../store/context/bookmarks-context";

// Function to show the NewsDetailScreen
function NewsDetailScreen(props) {
  // Get and use the Context from BookmarkContext
  const bookmarkedArticlesCtx = useContext(BookmarksContext)

  // Get NewsId from param
  const NewsId = props.route.params.NewsId;
  // Find the selected Article by searching the NewsId
  const selectedArticle = NEWSARTICLES.find((article) => article.id === NewsId);

  // Get id from Article and apply it to the bookmarkedArticlesCtx Context id
  // So it can add/remove the article 
  articleIsBookmarked = bookmarkedArticlesCtx.ids.includes(NewsId)

  // Function to update the icon to show if the article it's been saved or removed
  function changeBookmarkStatusHandler(){
    // If the article is already bookmarked remove it 
    if (articleIsBookmarked) {
      bookmarkedArticlesCtx.removeFavoriteArticle(NewsId)
    } else {
      // Otherwise, Add the article
      bookmarkedArticlesCtx.addFavoriteArticle(NewsId)
    }
  }

  // Update the icon for the bookmark (Filled/Border) when pressed
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          // Show the bookmark button and update when pressed
          <BookmarkButton
            pressed={articleIsBookmarked}
            onPress={changeBookmarkStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeBookmarkStatusHandler]);

  return (
    // Create View for Root Container
    <View style={styles.rootContainer}>
      {/* Allow user to scroll through article */}
      <ScrollView>
        {/* Create View for Image Container */}
        <View style={styles.imageContainer}>
          {/* Show Image based on the URL */}
          <Image
            style={styles.image}
            source={{ uri: selectedArticle.imageUrl }}
          />
        </View>

        {/* Create View for information container */}
        <View style={styles.infoContainer}>
          {/* Show the Headline of the article */}
          <Text style={styles.headline}>{selectedArticle.headline}</Text>
          {/* Show the author of the article */}
          <Text style={styles.author}>{selectedArticle.author}</Text>

          {/* Create View for Row Container*/}
          <View style={styles.rowContainer}>
            {/* Show the date the article was released */}
            <Text style={styles.rowItem}>{selectedArticle.date}</Text>
            {/* Show the agency that released the article */}
            <Text style={styles.rowItem}>{selectedArticle.agency}</Text>
          </View>
          {/* Show the description of the article */}
          <Text style={styles.description}>{selectedArticle.description}</Text>
        </View>
        </ScrollView>
    </View>
  );
}

// Export to different files
export default NewsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 15,
    height: 250,
    width: "95%",
    alignSelf: "center",
    borderWidth: 5,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    alignSelf: "center",
    marginVertical: 5,
    marginBottom:15,
    paddingHorizontal:15,
    width: "90%",
    borderWidth: 5,
  },
  headline: {
    fontSize: 24,
    marginVertical: 15,
    textAlign: "center",
    fontFamily:"noticiaBold",
  },
  author: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    fontFamily:"noticiaBold",

  },
  rowContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rowItem: {
    fontSize: 18,
    fontFamily:"noticiaBold",
  },
  description: {
    fontSize: 16,
    alignSelf: "center",
    marginBottom:15,
    fontFamily:"noticia",
  },
});
