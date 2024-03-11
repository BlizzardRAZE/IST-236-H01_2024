import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";

// Function to show the HomeScreen
function HomeScreen(props) {
    // Function to render Country Items
    function renderCountryItem(itemData){
        // Function When a button is pressed
        function pressHandler(){
            // Move to the Country Overview Screen with information from dummy-data by passing countryId
            props.navigation.navigate("CountryOverviewScreen", {
                countryId: itemData.item.id
            })
        }


    // Render Country Items onto Screen
    return(
        // Use CountryGridTile to show tiles
        // Allow user to press title for more information
        <CountryGridTile
            name={itemData.item.countryName}
            imageUrl={itemData.item.countryImageURL}
            onPress={pressHandler}
        />
    )


    }

  return (
    // Create Image Background
    <ImageBackground
      source={require("../assets/images/Vacation_Background.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      {/* Create View for Root Container */}
      <View style={styles.rootContainer}>
        {/* Create Flat list to show the Countries*/}
        <FlatList
          //  Get data from dummy data
          data={COUNTRIES}
          // Get the key from item
          keyExtractor={(item) => {
            return item.id;
          }}
          // Render the Country on Screen
          renderItem={renderCountryItem}
          //  Show two columns
          numColumns={2}
        />
      </View>
    </ImageBackground>
  );
}

// Export to different files
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
