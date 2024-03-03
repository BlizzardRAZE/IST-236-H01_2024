import {
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Platform,
  Modal,
  Button,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/Colors";
import { useState } from "react";
import WheelPicker from "react-native-wheely";

// Function to show the HomeScreen
function HomeScreen() {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  /* Set State Variables for Check In and Check Out dates */

  // Set the state variable for the check in date
  const [checkIn, setCheckIn] = useState(new Date());

  // Set the state variable for the check Out date
  const [checkOut, setCheckOut] = useState(new Date());

  // Set the state variable to show the check in date picker screen
  const [showCheckIn, setShowCheckIn] = useState(false);

  // Set the state variable to show the check out date picker screen
  const [showCheckOut, setShowCheckOut] = useState(false);

  /* Check In */

  // Function to show the check in date picker
  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  // Function to hide the check in date picker
  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  // Function to allow the user to pick a date and update on screen
  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    // Check to see if the user's device is a android
    if (Platform.OS === "android") {
      // If so, hide the check in date picker
      hideCheckInPicker(true);
    }
    // Change the date
    setCheckIn(currentDate);
  }

  /* END of Check In */

  /* Check Out */

  // Function to show the check out date picker
  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  // Function to hide the check out date picker
  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  // Function to allow the user to pick a date and update on screen
  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    // Check to see if the user's device is a android
    if (Platform.OS === "android") {
      // If so, hide the check in date picker
      hideCheckOutPicker(true);
    }
    // Change the date
    setCheckOut(currentDate);
  }

  /* END of Check Out */

  /* Set State Variables for number of guests and number of campsites */

  // Create array of number of guests
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // Create array of number of campsites
  const campsiteCounts = [1, 2, 3, 4, 5];

  // Set the state variable for the number of guests
  const [numGuests, setNumGuests] = useState(0);

  // Set the state variable to show the number of guests wheel picker
  const [showNumGuests, setShowNumGuests] = useState(false);

  // Set the state variable for the number of campsites
  const [numCampSites, setCampSites] = useState(0);

  // Set the state variable to show the number of campsites wheel picker
  const [showNumCampSites, setShowNumCampSites] = useState(false);

  // Function to show the number of guests wheel picker
  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }
  // Function to hide the number of guests wheel picker
  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  // Function to change the number of guests on screen
  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  // Function to show the number of campsites wheel picker
  function showNumCampsitesPicker() {
    setShowNumCampSites(true);
  }

  // Function to hide the number of campsites wheel picker
  function hideNumCampsitesPicker() {
    setShowNumCampSites(false);
  }

  // Function to change the number of campsites on screen
  function onChangeNumCampsites(index) {
    setCampSites(index);
  }

  // Create state variable to hold results
  const [results, setResults] = useState("");

  // Function to take all of the values from the check in, check out, number of guests,
  // and number of campsites to output onto screen
  function onReserveHandler() {
    // Create res to hold all all of the check in, check out, number of guests,
    // and number of campsites information.
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
    res = res + `Number of Campsites:\t\t${campsiteCounts[numCampSites]}\n`;
    // Set the value of results
    setResults(res);
  }

  // Find the device window dimensions
  const { width, height } = useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.07,
  };
  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  return (
    // Create Image Background
    <ImageBackground
      source={require("../assets/images/Campsite_Background.jpg")}
      resize="center"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      {/* Create SafeAreaInset */}
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
        {/* Create View for scroll container */}
        <ScrollView style={styles.scrollViewContainer}>
          {/* Create View to hold title */}
          <View style={styles.titleContainer}>
            {/* Show Title of Camp Site*/}
            <Title>Wild Pines</Title>
          </View>

          {/* Create View for Table to hold everything */}
          <View style={styles.tableContainer}>
            {/* Create View for date container */}
            <View style={styles.dateContainer}>
              {/* Create Text to show the label for Check In */}
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              {/* Create Pressable button */}
              <Pressable onPress={showCheckInPicker}>
                {/* Show Date */}
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>

            {/* Create View for date container */}
            <View style={styles.dateContainer}>
              {/* Create Text to show the label for Check Out */}
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
              {/* Create Pressable button */}
              <Pressable onPress={showCheckOutPicker}>
                {/* Show Date */}
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>

            {/* Create View for Check In and Check out 
              Date Picker for both Android and IOS */}
            <View>
              {showCheckIn && Platform.OS === "android" && (
                <DateTimePicker
                  testID="dateTimePickerCheckInAndroid"
                  value={checkIn}
                  mode={"date"}
                  display="spinner"
                  onChange={onChangeCheckIn}
                />
              )}
              {showCheckIn && Platform.OS === "ios" && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  supportedOrientations={["portrait", "landscape"]}
                >
                  <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                      <DateTimePicker
                        testID="dateTimePickerCheckInIOS"
                        value={checkIn}
                        mode={"date"}
                        display="spinner"
                        onChange={onChangeCheckIn}
                      />
                      <Button title="Confirm" onPress={hideCheckInPicker} />
                    </View>
                  </View>
                </Modal>
              )}

              {showCheckOut && Platform.OS === "android" && (
                <DateTimePicker
                  testID="dateTimePickerCheckOutAndroid"
                  value={checkOut}
                  mode={"date"}
                  display="spinner"
                  onChange={onChangeCheckOut}
                />
              )}
              {showCheckOut && Platform.OS === "ios" && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  supportedOrientations={["portrait", "landscape"]}
                >
                  <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                      <DateTimePicker
                        testID="dateTimePickerCheckOutIOS"
                        value={checkOut}
                        mode={"date"}
                        display="spinner"
                        onChange={onChangeCheckOut}
                      />
                      <Button title="Confirm" onPress={hideCheckOutPicker} />
                    </View>
                  </View>
                </Modal>
              )}
            </View>

            {/* Create View for Row Container */}
            <View style={styles.rowContainer}>
              {/* Show Text for number of guests */}
              <Text style={[styles.dateLabel, dateLabelFlex]}>
                Number of Guests:
              </Text>
              {/* Create Pressable button */}
              <Pressable onPress={showNumGuestsPicker}>
                {/* Create Container for number of guests (reused dateContainer for styling) */}
                <View style={styles.dateContainer}>
                  {/* Show the number of guests (reused dateText and the flex for styling)*/}
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {guestCounts[numGuests]}
                  </Text>
                </View>
              </Pressable>

              {/* Create Modal to show the wheel picker for number of guests */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={showNumGuests}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <Text>Enter Number of Guests:</Text>
                    <WheelPicker
                      selectedIndex={numGuests}
                      options={guestCounts}
                      onChange={onChangeNumGuests}
                      containerStyle={{ width: 200 }}
                    />
                    <Button title="Confirm" onPress={hideNumGuestsPicker} />
                  </View>
                </View>
              </Modal>
            </View>
            {/* Create View for Row Container */}

            <View style={styles.rowContainer}>
              {/* Show Text for number of campsites */}
              <Text style={[styles.dateLabel, dateLabelFlex]}>
                Number of Campsites:
              </Text>
              {/* Create Pressable button */}
              <Pressable onPress={showNumCampsitesPicker}>
                {/* Create Container for number of campsites (reused dateContainer for styling) */}
                <View style={styles.dateContainer}>
                  {/* Show the number of campsites (reused dateText and the flex for styling)*/}
                  <Text style={[styles.dateText, dateTextFlex]}>
                    {campsiteCounts[numCampSites]}
                  </Text>
                </View>
              </Pressable>
              {/* Create Modal to show the wheel picker for number of campsites */}

              <Modal
                animationType="slide"
                transparent={true}
                visible={showNumCampSites}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <Text style={[styles.dateText, dateTextFlex]}>
                      Enter Number of Campsites:
                    </Text>
                    <WheelPicker
                      selectedIndex={numCampSites}
                      options={campsiteCounts}
                      onChange={onChangeNumCampsites}
                      containerStyle={{ width: 200 }}
                    />
                    <Button title="Confirm" onPress={hideNumCampsitesPicker} />
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          {/* Create View for NavButton Container */}
          <View style={[styles.navButtonContainer]}>
            {/* Create Button to Reserve Now */}
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          {/* Create View for the result container */}
          <View style={[styles.resultContainer]}>
            {/* Show the options that the user had picked */}
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

// Export to different files
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.8,
  },
  titleContainer: {
    padding: 7,
    marginVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.accent300,
    backgroundColor: Colors.secondary500,
  },
  scrollViewContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "95%",
  },
  tableContainer: {
    textAlign: "left",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.accent300,
    backgroundColor: Colors.secondary500o7,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    backgroundColor: Colors.primary300o5,
    padding: 15,
  },
  dateLabel: {
    color: Colors.primary500,
    fontFamily: "archivo",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 50,
    fontWeight: "bold",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.secondary500,
    borderWidth: 5,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },

  navButtonContainer: {
    paddingVertical:50,
    alignItems: "center",
  },
  resultContainer: {
    padding: 10,
    marginBottom: 15,
  },
  results: {
    margin: 10,
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "archivo",
    textShadowColor: "black", // outline color
    textShadowOffset: { width: 2, height: 3 }, // outline offeset
    textShadowRadius: 2, // outline width
  },
});
