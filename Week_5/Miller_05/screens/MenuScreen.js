import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import { useState } from "react";
import MenuItem from "../components/MenuItem";

// Function to set up Menu Screen
function MenuScreen(props) {
  // Set the Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  // Create array of Menu
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Spaghetti Marinara",
      image: require("../assets/images/Spaghetti_Marinara.jpg"),
      price: "$18.95",
    },
    {
      id: 2,
      name: "Momma's Lasagna",
      image: require("../assets/images/Mommas_Lasagna.jpg"),
      price: "$20.95",
    },
    {
      id: 3,
      name: "Grouper Florentine",
      image: require("../assets/images/Grouper_Florentine.jpg"),
      price: "$29.95",
    },
    {
      id: 4,
      name: "Chicken Saltimbocca",
      image: require("../assets/images/Chicken_Saltimbocca.jpg"),
      price: "$22.95",
    },
    {
      id: 5,
      name: "Eggplant Parmigiana",
      image: require("../assets/images/Eggplant_Parmesan.jpg"),
      price: "$19.95",
    },
  ]);

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
      {/* Set View to hold Title */}
      <View style={styles.titleContainer}>
        {/* Show Menu Title*/}
        <Title>Menu</Title>
      </View>

      {/* Set View to hold FlatList */}
      <View style={styles.listContainer}>
        {/* Create FlatList */}
        <FlatList
          // Use menuItems as data
          data={menuItems}
          // Extract the id from item
          keyExtractor={(item) => item.id}
          // Style Flat List
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          //   Render the MenuItem
          renderItem={(itemData) => {
            return (
              // Use MenuItem to show name, image, and price of Foods
              <MenuItem
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
              />
            );
          }}
        ></FlatList>
      </View>

      {/* Set View for buttonContainer */}
      <View style={styles.buttonContainer}>
        {/* Set Text for NavButton */}
        <NavButton onPress={props.onNext}>Return Home</NavButton>
      </View>
    </View>
  );
}

// Export to different files
export default MenuScreen;

// Set Style for Menu Screen
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 400,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
  },
});
