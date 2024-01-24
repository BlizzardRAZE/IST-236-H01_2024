import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState("");
  const [enteredItemText, setEnteredItemText] = useState("");

  // Create Modal Screen Handler Functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }
  function endAddItemHandler() {
    setModalIsVisible(false);
  }
  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }
  function addItemHandler() {
    console.log(enteredItemText);
    if (shoppingItems === "") {
      setShoppingItems(enteredItemText);
    } else {
      setShoppingItems(shoppingItems + "\n" + enteredItemText);
    }
    setEnteredItemText("");
    endAddItemHandler(false)
  }

  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style="light" />

      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set Title Container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Set Add Item Button Container */}
        <View style={styles.buttonContainer}>
          <View style={styles.addButtonContainer}>
            <Pressable
              android_ripple={{ color: "#ff6f6" }}
              style={({pressed}) => pressed && styles.pressedButton}
              onPress={startAddItemHandler}
            >
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>Add New Item</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* Set Items to Get Title Container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Items To Get:</Text>
        </View>

        {/* Set List of Items Container */}
        <View style={styles.listContainer}>
          <Text style={styles.listText}>{shoppingItems}</Text>
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.appContainer}>
            <View style={styles.inputContainer}>
              <Image
                style={styles.image}
                source={require("./assets/Images/ShoppingCart.png")}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Item Here!"
                onChangeText={itemInputHandler}
                value={enteredItemText}
              />

              <View style={styles.modalButtonContainer}>
                <View style={styles.modalButton}>
                  <Button
                    title="Add Item"
                    color="#b180f0"
                    onPress={addItemHandler}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Cancel"
                    color="#f1449b"
                    onPress={endAddItemHandler}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 40,
    color: "#5e08cc",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  addButtonText:{
    fontSize:20,
    fontWeight:"bold",
    color:"#5e08cc",
  },
  pressedButton: {
    opacity: 0.8,
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  subtitle: {
    fontSize: 30,
    color: "#5e08cc",
  },

  listContainer: {
    flex: 7,
    width: "90%",
    backgroundColor: "#ffffff",
    alignItems:"center",
  },
  listText: {
    fontSize: 20,
    color: "black",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
    width: "90%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  modalButtonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8,
  },
});
