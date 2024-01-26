import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export default function App() {
  // Create Constants
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [eightBallResponse, setEightBallResponse] = useState("");

  // Create Array of Responses
  const arrayEightBallResponses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  // Create maxLimit for array (arrayEightBallResponses)
  const maxLimit = 20;

  // Create Modal Screen Handler Functions
  function startShowingResponse() {
    setModalIsVisible(true);
  }
  function endShowingResponse() {
    setModalIsVisible(false);
  }

  // Function to get the user's question from main and show it on the modal screen
  function userQuestionHandler(userQuestion) {
    setUserQuestion(userQuestion);
  }

  // Function to generate a random response for EightBall
  function eightBallResponseHandler() {
    // Run to open Modal
    startShowingResponse();

    // Create place holder for random number
    let randomNumber = Math.floor(Math.random() * maxLimit);

    // Use randomNumber to a response from array by calling it's index
    ballResponse = arrayEightBallResponses[randomNumber];

    // Set the Eight Ball's response
    setEightBallResponse(ballResponse);
  }

  return (
    // Trent Miller
    <>
      {/* Show User's statusbar */}
      <StatusBar style="light" />
      {/* Start Main Screen */}
      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set View for Title for Magic 8 Ball */}
        <View style={styles.titleContainer}>
          {/* Show Title on Screen */}
          <Text style={styles.title}>Magic Eight Ball</Text>
        </View>

        {/* Set View for SubTitle for Directions */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            {/* Show Directions on Screen */}
            Enter your question below and click on "Ask Question" to get a
            response from the Eight Ball.
          </Text>
        </View>

        {/* Set View for TextInput that holds user's question*/}
        <View style={styles.textinputContainer}>
          <TextInput
            style={styles.userquestionTextInput}
            // Show Placeholder asking user what is their question
            placeholder="What is your question?"
            keyboardAppearance="default"
            onChangeText={userQuestionHandler}
            value={userQuestion}
          />
        </View>

        {/* Set View for Button to submit the user's question*/}
        <View style={styles.submitbuttonContainer}>
          <Pressable
            // Add the android ripple
            android_ripple={{ color: "#2431eb" }}
            // Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // When pressed, open modal screen
            onPress={eightBallResponseHandler}
          >
            {/* Hold Text for Ask Button */}
            <View style={styles.askButtonContainer}>
              {/* Show text for Ask Button */}
              <Text style={styles.askButtonText}>Ask Question</Text>
            </View>
          </Pressable>
        </View>

        {/* End Main Screen */}

        {/* Start Main Screen Modal */}
        <Modal visible={modalIsVisible} animationType="fade">
          {/* Set SafeAreaView Screen Container */}
          <SafeAreaView style={styles.appContainer}>
            {/* Set View for Modal Title */}
            <View style={styles.modalTitleContainer}>
              {/* Show Modal Title Text */}
              <Text style={styles.modalTitle}>The Eight Ball Said:</Text>
            </View>

            {/* Set View for Modal Eight Ball Response */}
            <View style={styles.modalEightBallContainer}>
              {/* Show Eight Ball's Response */}
              <Text style={styles.modalEightBallResponse}>
                {eightBallResponse}
              </Text>
            </View>

            {/* Set View for Modal Sub Title */}
            <View style={styles.modalSubTitleContainer}>
              {/* Show Modal SubTitle text */}
              <Text style={styles.modalSubTitle}>You Asked:</Text>
            </View>

            {/* Set View for Modal User's Question */}
            <View style={styles.modalUserQuestionContainer}>
              {/* Show Eight Ball's Response */}
              <Text style={styles.modalUserQuestion}>{userQuestion}</Text>
            </View>

            {/* Set View for Button to go back to Main Screen*/}
            <View style={styles.modalButtonContainer}>
              <Pressable
                // Add the android ripple
                android_ripple={{ color: "#2431eb" }}
                // Style the button when pressed
                style={({ pressed }) => pressed && styles.pressedButton}
                // When pressed, open modal screen
                onPress={endShowingResponse}
              >
                {/* Hold Text for Go Back Button */}
                <View style={styles.modalButtonGoBackContainer}>
                  {/* Show text for Ask Button */}
                  <Text style={styles.modalGoBackButtonText}>Go Back</Text>
                </View>
              </Pressable>
            </View>
          </SafeAreaView>
        </Modal>
        {/* End Main Screen Modal */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#262130",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  titleContainer: {
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#5335fdd1",
    borderRadius: 15,
    backgroundColor: "#07042f",
    marginTop: 10,
    marginBottom: 25,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    padding: 25,
  },
  subtitleContainer: {
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderColor: "#5335fdd1",
    borderRadius: 15,
    backgroundColor: "#07042f",
    marginBottom: 25,
    width: "90%",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 15,
    textAlign: "center",
  },
  textinputContainer: {
    marginBottom: 35,
    width: "100%",
    alignItems: "center",
  },
  userquestionTextInput: {
    width: "80%",
    backgroundColor: "#4b41be",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#5335fdd1",
    padding: 15,
    color: "white",
    fontSize: 15,
  },
  submitbuttonContainer: {
    flex: 4,
  },
  pressedButton: {
    overflow: "hidden",
    opacity: 0.8,
  },
  askButtonContainer: {
    padding: 15,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#5335fdd1",
    backgroundColor: "#2a1278",
    borderRadius: 6,
  },
  askButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 5,
  },
  modalTitleContainer: {
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#5335fdd1",
    borderRadius: 15,
    backgroundColor: "#07042f",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    padding: 25,
  },
  modalEightBallContainer: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#5335fdd1",
    borderRadius: 15,
    backgroundColor: "#100863",
    marginBottom: 20,
    width: "90%",
  },
  modalEightBallResponse: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 25,
    textAlign: "center",
  },
  modalSubTitleContainer: {
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderColor: "#5335fdd1",
    borderRadius: 15,
    backgroundColor: "#07042f",
    marginBottom: 25,
    width: "90%",
  },
  modalSubTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    padding: 15,
    textAlign: "center",
  },
  modalUserQuestionContainer: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#5335fdd1",
    borderRadius: 15,
    backgroundColor: "#100863",
    marginBottom: 20,
    width: "90%",
  },
  modalUserQuestion: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 20,
    textAlign: "center",
  },
  modalButtonContainer: {
    flex: 2,
  },
  modalButtonGoBackContainer: {
    padding: 15,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#5335fdd1",
    backgroundColor: "#2a1278",
    borderRadius: 6,
  },
  modalGoBackButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 5,
  },
});
