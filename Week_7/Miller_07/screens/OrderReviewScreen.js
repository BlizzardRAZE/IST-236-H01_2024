import { ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

function OrderReviewScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  return (
    // Create Linear Gradient for background
    <LinearGradient
      colors={[Colors.accent800, Colors.accent800, Colors.primary800]}
      style={styles.rootContainer}
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
          <Title>Order Summary</Title>
        </View>
        {/* Create View to hold sub Title Container */}
        <View style={styles.subTitleContainer}>
          {/* Show Sub Title */}
          <Text style={styles.subTitle}>
            Your order has been placed with you order details below!
          </Text>
        </View>
        {/* Create View for scroll container */}
        <ScrollView style={styles.scrollViewContainer}>
          {/* Create View for services container */}
          <View style={styles.servicesContainer}>
            {/* Show Service Time Picked */}
            {/* Service Time Header */}
            <Text style={styles.serviceHeader}>Service Time:</Text>
            {/* Show Service Time Option */}
            <Text style={styles.serviceChosen}>{props.time}</Text>
            {/* Show Service Types Picked */}
            {/* Service Type Header */}
            <Text style={styles.serviceHeader}>Service Chosen:</Text>
            {/* Show all of the Service Types that a picked */}
            {props.services.map((item) => {
              if (item.value) {
                return (
                  <Text
                    key={item.id}
                    price={item.price}
                    style={styles.serviceChosen}
                  >
                    {item.name}
                  </Text>
                );
              } else if (!item.value) {
                <Text style={styles.serviceChosen}>No Service</Text>;
              }
            })}
            {/* Show Add On Header */}
            <Text style={styles.serviceHeader}>Add Ons:</Text>
            {/* Show Joined Newsletter if the user wanted to join */}
            <Text style={styles.serviceChosen}>
              {props.newsletter ? "Joined Newsletter" : ""}
            </Text>
            {/* Show Joined Retail Membership if the user wanted to join */}
            <Text style={styles.serviceChosen}>
              {props.rentalMembership ? "Joined Retail Membership" : ""}
            </Text>
          </View>

          {/* Sub Total */}
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Subtotal: ${props.price.toFixed(2)}
            </Text>
            {/* Sales Tax */}
            <Text style={styles.subTitle}>
              Sales Tax: ${(props.price * 0.06).toFixed(2)}
            </Text>
            {/* Overall Total */}
            <Text style={styles.subTitle}>
              Total: ${(props.price + props.price * 0.06).toFixed(2)}
            </Text>
          </View>
          {/* Create View for NavButton Container */}
          <View style={styles.buttonContainer}>
            {/* Create Button to go Home */}
            <NavButton onPress={props.onNext}>Return Home</NavButton>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    alignSelf:'center',
    width: "90%",
    backgroundColor: Colors.primary800,
    borderColor: Colors.primary500,
    marginVertical: 10,
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 35,
  },
  subTitleContainer: {
    backgroundColor: Colors.primary800,
    borderColor: Colors.primary500,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    alignSelf:'center',
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent000,
  },
  scrollViewContainer: {
    alignSelf:'center',
    flex: 1,
    width: "90%",
  },
  servicesContainer: {
    flex: 3,
    backgroundColor: Colors.primary800,
    borderColor: Colors.primary500,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  serviceHeader: {
    padding: 5,
    textAlign: "center",
    fontSize: 20,
    color: Colors.accent000,
  },
  serviceChosen: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    padding: 5,
    color:"black",
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
});
