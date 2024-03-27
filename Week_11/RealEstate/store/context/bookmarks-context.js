import { createContext, useState } from "react";

// Create Context to hold item that are bookmarked or not bookmarked
export const BookmarksContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

// Function to hold add and remove bookmarked items
function BookmarksContextProvider({ children }) {
  const [bookmarkedIds, setBookmarksIds] = useState([]);

  // Function to add a bookmarked item
  function addFavorite(id) {
    setBookmarksIds((currentBookmarkedIds) => {
      return [...currentBookmarkedIds, id];
    });
  }

  // Function to remove a bookmarked item
  function removeFavorite(id) {
    setBookmarksIds((currentBookmarkedIds) => {
      return currentBookmarkedIds.filter((bookId) => bookId != id);
    });
  }

  // Brings values together into one object
  const value = {
    ids: bookmarkedIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}

// Export to different files
export default BookmarksContextProvider;
