import { View, StyleSheet, FlatList } from "react-native";
import PostItem from "./PostItem";
import GlobalColors from "../constants/styles";

// Function to create the PostList
function PostList(props) {
  // Render The Post Item
  function renderPostItem(itemData) {
    // Pass Post Item Props to PostItem
    const postItemProps = {
      id: itemData.item.id,
      district: itemData.item.districtId,
      postNumber: itemData.item.postNumber,
      county: itemData.item.postCounty,
      address: itemData.item.postAddress,
      agency: itemData.item.postPhoneNumber,
      description: itemData.item.postDescription,
      addressUrl: itemData.item.postAddressURL,
      imageUrl: itemData.item.postImageURL,
    };
    // Return to PostItem
    return <PostItem {...postItemProps} />;
  }

  return (
    // Create View for Container
    <View style={styles.container}>
        {/* Create FlatList to hold Post information */}
      <FlatList
        // Use Post Data for Data  
        data={props.items}
        // Pull the id from Post Data
        keyExtractor={(item) => item.id}
        // Goto Method to render the Item
        renderItem={renderPostItem}
        // Customize FlatList
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// Export to other Files
export default PostList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // backgroundColor:GlobalColors.accent500,
  },
});
