import { createContext, useState } from "react";
import { useAnimatedKeyboard } from "react-native-reanimated";

// Create Context to allow items to be passed between files
export const BookmarksContext = createContext({
  // Structure the BookmarkContext
  ids: [],
  addFavoriteArticle: (id) => {},
  removeFavoriteArticle: (id) => {},
});

// Function to hold the add and remove functions for bookmarked items
function BookmarkContextProvider({ children }) {
  // Create State Variables for bookmarked items (id)
  const [bookmarkedIds, setBookmarksIds] = useState([]);

  // Function to add a favorite article to bookmarks screen
  function addFavoriteArticle(id) {
    // Add the article to favorites based on id
    setBookmarksIds((currentBookmarkedIds) => {
      return [...currentBookmarkedIds, id];
    });
  }

  // Function to remove a favorite article to bookmarks screen
  function removeFavoriteArticle(id) {
    // Remove the article to favorites based on id
    setBookmarksIds((currentBookmarkedIds) => {
      return currentBookmarkedIds.filter((bookId) => bookId != id);
    });
  }

  // Create value object to hold ids and added/removed favorite articles
  const value = {
    ids: bookmarkedIds,
    addFavoriteArticle: addFavoriteArticle,
    removeFavoriteArticle: removeFavoriteArticle,
  };

  // Show the saved articles on screen
  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}


// Export to different files
export default BookmarkContextProvider