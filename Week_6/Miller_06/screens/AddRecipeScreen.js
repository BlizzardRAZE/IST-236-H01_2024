import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/Colors";
import { useState } from "react";

// Function to create the add recipe screen
function AddRecipeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  // Set the state of the recipe's title
  const [recipeTitle, setRecipeTitle] = useState("");
  // Set the state of the recipe's text
  const [recipeText, setRecipeText] = useState("");

  // Function to add a recipe
  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
    props.onCancel();
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
    {/* Create View for title container */}
      <View style={styles.titleContainer}>
        {/* Show title that says add new recipe */}
        <Title>Add New Recipe</Title>
      </View>

      {/* Create View for scroll container */}
      <View style={styles.scrollContainer}>
        {/* Create scroll container */}
        <ScrollView>
            {/* Create view for title container */}
          <View style={styles.recipeTitleContainer}>
            {/* Create text area for recipe title*/}
            <TextInput
              placeholder="Enter Recipe Title Here!"
              style={styles.recipeTitle}
              onChangeText={setRecipeTitle}
            />
          </View>
          {/* Create text area for ingredients*/}
          <View style={styles.recipeTextContainer}>
            <TextInput
              placeholder="Enter Recipe Ingredients Here!"
              style={styles.recipeText}
              onChangeText={setRecipeText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
            />
          </View>
          {/* Create view for NavButton Container */}
          <View style={styles.navButtonContainer}>
            {/* Create Button to add recipe*/}
            <View style={styles.navButton}>
              <NavButton onNext={addRecipeHandler}>Add</NavButton>
            </View>
            {/* Create Button to cancel new recipe */}
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

// Export to different files
export default AddRecipeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50,
  },
  scrollContainer: {
    flex: 5,
    width: 350,
  },
  recipeTitleContainer: {
    borderWidth: 4,
    backgroundColor: Colors.primary800,
  },
  recipeTitle: {
    color: Colors.primary500,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  recipeTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  recipeText: {
    color: "black",
    fontSize: 20,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  navButton: {
    marginHorizontal: 10,
  },
});
