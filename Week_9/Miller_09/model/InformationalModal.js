import {
  Modal,
  View,
  Button,
  Image,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import Destination from "../models/destinations";
import Colors from "../constants/Colors";

function InformationalModal(props) {
  let destinationInfo = new Destination(
    props.id,
    props.countryId,
    props.name,
    props.cost,
    props.foundedYear,
    props.rating,
    props.description
  );

  return (
    // Create View for root container
    <View style={styles.rootContainer}>
      {/* Create Modal */}
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        {/* Create Modal Container*/}
        <View style={styles.modalContainer}>
          {/* Create Title Container */}
          <View style={styles.titleContainer}>
            {/* Show Destination Name */}
            <Text style={styles.title}>{props.name}</Text>
          </View>
          {/* Show Image */}
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          {/* Create View for Text Container */}
          <View style={styles.textContainer}>
            {/* Show Destination Description */}
            <Text style={styles.text}>{destinationInfo.toString()}</Text>
          </View>

          {/* Create button to allow user to go back to Country Overview Screen */}
          <Pressable style={styles.button} onPress={props.onClose}>
            <Text style={styles.buttonText}>Return to Destinations</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

export default InformationalModal;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
  },
  titleContainer: {
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 5,
    backgroundColor: Colors.accent500,
    marginVertical: 30,
    paddingVertical: 5,
    paddingHorizontal: 65,
  },
  title: {
    fontFamily: "meldina",
    fontSize: 30,
    color: Colors.secondary800,
  },
  image: {
    flex: 1,
    width: "80%",
    height: "50%",
    resizeMode: "contain",
    borderRadius: 5,
    borderWidth: 5,
  },
  textContainer: {
    width: "85%",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 5,
    backgroundColor: Colors.accent500,
    marginVertical: 25,
    paddingVertical: 5,
    paddingHorizontal: 65,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.secondary800,
  },
  button: {
    borderWidth: 5,
    borderRadius: 5,
    backgroundColor: Colors.accent500,
    backgroundColor:Colors.primary500,
    padding:20,
    marginBottom: 50,
  },
  buttonText:{
    color:'black',
    textAlign: "center",
    fontSize: 16,
  }
});
