import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { useState } from "react";
import InformationalModal from "../model/InformationalModal";

// Function to create the destination
function DestinationItem(props) {
    // Set the state of the modal screen
    const [modalIsVisible, setModalIsVisible] = useState(false);


  // Function to open the Modal Screen
  function viewModalHandler() {
    setModalIsVisible(true);
  }

  // Function to close Modal Screen
  function closeModalHandler() {
    setModalIsVisible(false);
  }

  return (
    // Create View for item container
    <View style={styles.itemContainer}>
      {/* Create Pressable Button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary800 }}
        onPress={viewModalHandler}
      >
        {/* Create View for Row Container */}
        <View style={styles.rowContainer}>
          {/* Show Image of Destination */}
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          {/* Create View for Information Container */}
          <View style={styles.infoContainer}>
            {/* Show name of destination */}
            <Text style={styles.name}>{props.name}</Text>
            {/* Create View for inner Row Container for more content */}
            <View style={styles.innerRowContainer}>
              {/* Show the cost */}
              <Text style={styles.cost}>Cost: ${props.cost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
              {/* Show the year that the destination was founded */}
              <Text style={styles.year}>{props.foundedYear}</Text>
            </View>
            {/* Show the rating of the destination */}
            <Text style={styles.rating}>Rating: {props.rating} / 5</Text>
          </View>
        </View>
      </Pressable>

        {/* Link Modal to here and pass information */}
        <InformationalModal
         isVisible={modalIsVisible}
         name={props.name}
         cost={props.cost}
         foundedYear={props.foundedYear}
         rating={props.rating}
         imageUrl={props.imageUrl}
         description={props.description}
         onClose={closeModalHandler}
        />


    </View>
  );
}

// Export to different files
export default DestinationItem;

const styles = StyleSheet.create({
  itemContainer: {
    width:"95%",
    alignContent:'center',
    alignSelf:'center',
    backgroundColor: "#CCC",
    paddingHorizontal: 5,
    paddingVertical:5,
    marginVertical:10,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.accent500,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "25%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  infoContainer: {
    width: "70%",
    paddingLeft: 20,
  },
  name: {
    fontFamily:'lakeWobegonNF',
    textAlign: "left",
    fontSize: 20,
  },
  cost: {
    fontSize: 20,
  },
  year: {
    fontSize: 20,

  },
  innerRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 20,
  },
});
