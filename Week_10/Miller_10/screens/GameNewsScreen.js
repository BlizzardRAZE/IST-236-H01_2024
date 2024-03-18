import NewsList from "../components/NewsList";
import { NEWSARTICLES } from "../data/dummy-data";

// Function to show the GameNewsScreen
function GameNewsScreen(props) {
  // Set the type of content to show on screen
  const type = "GAME";

  // Get information from data and filter articles that match with type
  const displayedArticles = NEWSARTICLES.filter((newsItem) => {
    return newsItem.type === type;
  });

  // Show the list of items that that come from displayedArticles
  return <NewsList items={displayedArticles} />;
}

// Export to different files
export default GameNewsScreen;
