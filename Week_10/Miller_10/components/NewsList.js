import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";

// Function to create the NewsList
function NewsList(props) {
  // Render The News Item
  function renderNewsItem(itemData) {
    // Pass News Item Props to NewsItem
    const newsItemProps = {
      id: itemData.item.id,
      type: itemData.item.type,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      description: itemData.item.description,
      imageUrl: itemData.item.imageUrl,
    };
    // Return the NewsItem
    return <NewsItem {...newsItemProps} />;
  }

  return (
    // Create View for Container
    <View style={styles.container}>
        {/* Create FlatList to hold News information */}
      <FlatList
        // Use News Data for Data  
        data={props.items}
        // Pull the id from News Data
        keyExtractor={(item) => item.id}
        // Goto Method to render the Item
        renderItem={renderNewsItem}
        // Customize FlatList
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: "black",
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
