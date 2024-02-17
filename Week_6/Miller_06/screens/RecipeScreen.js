import { FlatList, Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import RecipeItem from "../components/RecipeItem";
import RecipeView from "../modals/RecipeView";
import { useState } from "react";

// Function to show the Recipe Screen
function RecipeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  // Set the state for the Modal
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // Set the state for the recipe title
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  // Set the state for the recipe text
  const [modalRecipeText, setModalRecipeText] = useState("");

  // Function to show the recipe title and text on modal screen
  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }

  // Function to close modal screen
  function closeRecipeViewHandler() {
    setModalIsVisible(false);
  }
  return (
    // Create SafeAreaInset
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Create View to hold title */}
      <View style={styles.titleContainer}>
        {/* Show Title */}
        <Title>Recipes</Title>
      </View>

      {/* Create View for Flat List */}
      <View style={styles.itemContainer}>
        {/* Create Flat List */}
        <FlatList
          // Use currentRecipes as data
          data={props.currentRecipes}
          // Extract the id from item
          keyExtractor={(item, index) => {
            return item.id;
          }}
          // Style Flat List
          alwaysBounceVertical={false}
          // Render the itemData
          renderItem={(itemData) => {
            return (
              // Use RecipeItem to show title and text
              <RecipeItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                // Bind the current id to the item's key when user clicks delete
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      {/* Create View for NavButton Container */}
      <View style={styles.navButtonContainer}>
        {/* Create Button to add new recipe */}
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add New Recipe</NavButton>
        </View>
        {/* Create Button to return home */}
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}>Return Home</NavButton>
        </View>
      </View>

      {/* Use Recipe View to show the selected Recipe */}
      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />
    </View>
  );
}

// Export to different files
export default RecipeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  navButton: {
    marginHorizontal: 10,
  },
});
