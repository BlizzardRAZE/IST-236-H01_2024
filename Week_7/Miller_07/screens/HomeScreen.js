import {
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Switch,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/Colors";
import RadioButtonsGroup from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// Function to show the HomeScreen
function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    // Create Image Background
    <ImageBackground
      source={require("../assets/images/BikeBackground.jpg")}
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
        {/* Create View to hold title */}
        <View style={styles.titleContainer}>
          {/* Show Title */}
          <Title>Rob's Bicycle Repair Shop</Title>
        </View>
        {/* Create View for scroll container */}
        <ScrollView style={styles.scrollViewContainer}>
          {/* Service Times */}
          {/* Create View for Radio Container */}
          <View style={styles.radioContainer}>
            {/* Create Radio Button Header */}
            <Text style={styles.radioHeader}>Service Times</Text>
            {/* Create Radio Buttons */}
            <RadioButtonsGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>

          {/* Service Options */}
          {/* Create View for Rows */}
          <View style={styles.rowContainer}>
            {/* Create View for Checkbox Container */}
            <View style={styles.checkBoxContainer}>
              {/* Create Checkbox Header */}
              <Text style={styles.checkBoxHeader}>Service Types</Text>
              {/* Create View for Checkboxes */}
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetServices.bind(this, item.id)}
                      textStyle={{
                        textAlign: "center",
                        textDecorationLine: "none",
                        color: Colors.accent000,
                      }}
                      innerIconStyle={{
                        color: Colors.primary800,
                        borderRadius: 0,
                        borderColor: Colors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.accent800}
                      style={{
                        padding: 4,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </View>

          {/* Extra Addons */}
          {/* Create View for Rows */}
          <View style={styles.rowContainer}>
            {/* Create Switch Header */}
            <Text style={styles.addOnsHeader}>Service Addons</Text>
            {/* Join News Letter */}
            {/* Create View for addons (Switches) */}
            <View style={styles.addOnsContainer}>
              {/* Create View for switch*/}
              <View style={styles.addOnsSubContainer}>
                {/* Create Header for switch */}
                <Text style={styles.addOnsLabel}>Join Our Newsletter? Cost: Free</Text>
                {/* Create Switch */}
                <Switch
                  onValueChange={props.onSetNewsLetter}
                  value={props.newsletter}
                  thumbColor={
                    props.newsletter ? Colors.accent800 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.accent000,
                  }}
                />
              </View>
            </View>
            {/* Join Rental Membership */}
            {/* Create View for addons (Switches) */}
            <View style={styles.addOnsContainer}>
              {/* Create View for switch*/}
              <View style={styles.addOnsSubContainer}>
                {/* Create Header for switch */}
                <Text style={styles.addOnsLabel}>Join Rental Membership? Cost:$100.00</Text>
                {/* Create Switch */}
                <Switch
                  onValueChange={props.onSetRentalMembership}
                  value={props.rentalMembership}
                  thumbColor={
                    props.rentalMembership ? Colors.accent800 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.accent000,
                  }}
                />
              </View>
            </View>
          </View>
          {/* Create View for NavButton Container */}
          <View style={styles.navButtonContainer}>
            {/* Create Button to go to Order Review */}
            <NavButton onPress = {props.onNext}>Submit Order</NavButton>
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
  },
  backgroundImage: {
    opacity: 0.7,
  },
  titleContainer: {
    width: "90%",
    backgroundColor: Colors.primary800,
    borderColor: Colors.primary500,
    marginVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContainer: {
    flex: 1,
    width: "90%",
  },
  radioContainer: {
    backgroundColor: Colors.primary800,
    borderColor: Colors.primary500,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  radioHeader: {
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10,
    color: Colors.accent000,
  },
  radioGroup: {
    paddingBottom: 5,
  },
  radioGroupLabels: {
    fontSize: 15,
    color: Colors.accent000,
  },
  rowContainer: {
    backgroundColor: Colors.primary800,
    borderColor: Colors.primary500,
    marginVertical: 15,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  },
  checkBoxContainer: {
    alignItems: "center",
  },
  checkBoxHeader: {
    textAlign: "center",
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10,
    color: Colors.accent000,
  },
  checkBoxSubContainer: {
    padding: 4,
  },
  addOnsHeader:{
    textAlign: "center",
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10,
    color: Colors.accent000,
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    paddingHorizontal:5,
    color: Colors.accent000,
    fontSize: 15,
  },
  navButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:10,
  },
});
