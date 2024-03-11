import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { COUNTRIES, DESTINATIONS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import DestinationItem from "../components/DestinationItem";

// Function to show the County Overview Screen
function CountryOverviewScreen(props) {
  // Get the information from the Home Screen by countryId
  const countryId = props.route.params.countryId;

  // Change the layout to the Country's Name
  useLayoutEffect(() => {
    // Find the id in the dummy-data
    const country = COUNTRIES.find((country) => country.id === countryId);
    // If found change the name, otherwise leave blank
    props.navigation.setOptions({
      title: country ? country.countryName : null,
    });
  }, [countryId, props.navigation]);

  //   Filter every destination item to only show that matches with countryId
  const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
    return destinationItem.countryId === countryId;
  });

  // Function to render the Destinations
  function renderDestinationItem(itemData) {
    // Get the properties from the destination
    const destinationItemProps = {
      name: itemData.item.destinationName,
      cost: itemData.item.destinationCost,
      foundedYear: itemData.item.destinationFoundedYear,
      rating: itemData.item.destinationUserRating,
      description: itemData.item.destinationDescription,
      imageUrl: itemData.item.destinationImageURL,
    };
    // Take Props to Destination Item
    return <DestinationItem {...destinationItemProps} />;
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
        {/* Create Flat list to show the Destinations */}
        <FlatList
          //  Use displayedDestinations as data
          data={displayedDestinations}
          // Get the key from item
          keyExtractor={(item) => {
            return item.id;
          }}
          // Render the Destination on Screen
          renderItem={renderDestinationItem}
        />
      </View>
    </ImageBackground>
  );
}

// Export to different files
export default CountryOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
