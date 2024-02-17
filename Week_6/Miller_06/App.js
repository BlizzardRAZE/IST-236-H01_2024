import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import Colors from "./constants/Colors";

export default function App() {
  // Set Up Custom Fonts
  // Fonts can be found at Google Fonts
  const [fontsLoaded] = useFonts({
    libreBaskerVilleBold: require("./assets/fonts/LibreBaskerville-Bold.ttf"),
    libreBaskerVille: require("./assets/fonts/LibreBaskerville-Regular.ttf"),
    baskervvilleFont: require("./assets/fonts/Baskervville-Regular.ttf"),
  });

  // Set the state variable for the current screen start at home
  const [currentScreen, setCurrentScreen] = useState("home");
  // Set the state variable for currentID
  const [currentID, setCurrentID] = useState(4);
  // Create array of Recipes
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Grilled Cheese",
      text: "2 Ounces Sliced Melting Cheese\n2 Slices Of Bread\n1 Tablespoon Fat\n(Mayonnaise, Butter or Olive oil)",
    },

    {
      id: 2,
      title: "Baked Pork Chops",
      text: "1 Tablespoon paprika\n2 Teaspoons Of\nOnion Powder and Garlic Powder\n2 Tablespoons Olive Oil\n4 Boneless Pork Chops",
    },
    {
      id: 3,
      title: "Pepperoni Pizza",
      text: "1 16 Ounce Ball of Pizza Dough,\n1 Tablespoon Olive Oil\n1 Cup Pizza Sauce\n3 Ounces Thinly Sliced Mozzarella Cheese\n5 Ounces Shredded Mozzarella Cheese\n2.5 Ounces Pepperoni \n2 Tablespoons Shredded Parmesan Cheese",
    },
  ]);

  // Function to change to Home Screen
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // Function to change to Recipe Screen
  function recipeScreenHandler() {
    setCurrentScreen("recipes");
  }

  // Function to change to add a Recipe Screen
  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  // Function to add user input to array for recipes
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipeScreenHandler();
  }

  // Function to remove an item in array
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  // Show Home Screen on start up and change the current screen to recipe when user clicks the button
  let screen = <HomeScreen onNext={recipeScreenHandler} />;

  // If the current screen is add take user to Add Recipe Screen
  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen
        onAdd={addRecipeHandler}
        onCancel={recipeScreenHandler}
      />
    );
  }

  // If the current screen is add take user to Recipe Screen
  if (currentScreen === "recipes") {
    screen = (
      <RecipeScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  return (
    <>
      {/* Trent Miller */}
      {/* Sets the color for the user's status bar */}
      <StatusBar style="light" />
      {/* Set SafeAreaProvider for Container */}
      <SafeAreaProvider style={styles.container}>
        {/* Show Screen Variable */}
        {screen}
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent800,
    alignItems: "center",
    justifyContent: "center",
  },
});
