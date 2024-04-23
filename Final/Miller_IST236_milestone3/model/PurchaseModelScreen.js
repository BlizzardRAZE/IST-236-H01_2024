import { Modal, StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/Button";
import GlobalColors from "../constants/styles";

// Function to create modal screen
function PurchaseModalScreen(props) {
  if (props.numSelectedProducts === 0 && props.donationValue === 0) {
    return (
      // Create Modal Screen
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.rootContainer}>
          {/* Create View to hold title */}
          <View style={styles.titleContainer}>
            {/* Show Title */}
            <Text style={styles.title}>Order Summary</Text>
          </View>

          {/* Create View to hold sub Title Container */}
          <View style={styles.subTitleContainer}>
            {/* Show Sub Title */}
            <Text style={styles.subTitle}>
              You have nothing selected to Donate or to Purchase!
            </Text>
          </View>
          {/* Create View for scroll container */}
          <ScrollView style={styles.scrollViewContainer}>
            {/* Create View for NavButton Container */}
            <View style={styles.buttonContainer}>
              {/* Create Button to go Home */}
              <Button onPress={props.onClose}>Return to Store</Button>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }

  // If no item was picked and there is a donation show this modal
  if (props.numSelectedProducts === 0 && props.donationValue > 0) {
    return (
      // Create Modal Screen
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.rootContainer}>
          {/* Create View to hold title */}
          <View style={styles.titleContainer}>
            {/* Show Title */}
            <Text style={styles.title}>Order Summary</Text>
          </View>

          {/* Create View to hold sub Title Container */}
          <View style={styles.subTitleContainer}>
            {/* Show Sub Title */}
            <Text style={styles.subTitle}>Thank You for the donation!</Text>
          </View>
          {/* Create View for scroll container */}
          <ScrollView style={styles.scrollViewContainer}>
            {/* Create View for Items picked from store screen */}
            <View style={styles.itemContainer}>
              {/* Show Donation Picked */}
              <Text style={styles.donationHeader}>Donation:</Text>
              {/* Show Donation Time Option */}
              <Text style={styles.donationChosen}>{props.donation}</Text>
            </View>

            {/* Sub Total */}
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitle}>
                Subtotal: ${props.price.toFixed(2)}
              </Text>
              {/* Sales Tax */}
              <Text style={styles.subTitle}>Sales Tax: ${(0).toFixed(2)}</Text>
              {/* Overall Total */}
              <Text style={styles.subTitle}>
                Total: ${props.price.toFixed(2)}
              </Text>
            </View>
            {/* Create View for NavButton Container */}
            <View style={styles.buttonContainer}>
              {/* Create Button to go Home */}
              <Button onPress={props.onClose}>Return to Store</Button>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
    // Otherwise show this modal
  } else {
    return (
      // Create Modal Screen
      <Modal
        style={styles.rootContainer}
        visible={props.visible}
        animationType="slide"
      >
        <View style={styles.rootContainer}>
          {/* Create View to hold title */}
          <View style={styles.titleContainer}>
            {/* Show Title */}
            <Text style={styles.title}>Order Summary</Text>
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
            {/* Create View for Items picked from store screen */}
            <View style={styles.itemContainer}>
              {/* Product Header */}
              <Text style={styles.productHeader}>Products Picked:</Text>
              {/* Show all of the Products that a picked */}
              {props.products.map((product) => {
                // If product is selected show on screen
                if (product.productChecked) {
                  return (
                    <Text
                      key={product.id}
                      price={product.productPrice}
                      style={styles.productChosen}
                    >
                      {product.productName}
                    </Text>
                  );
                }
              })}
              {/* Show Donation Picked */}
              <Text style={styles.donationHeader}>Donation:</Text>
              {/* Show Donation Time Option */}
              <Text style={styles.donationChosen}>{props.donation}</Text>
            </View>

            {/* Sub Total */}
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitle}>
                Subtotal: $
                {props.price
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
              {/* Sales Tax */}
              <Text style={styles.subTitle}>
                Sales Tax: $
                {(props.price * 0.06)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
              {/* Overall Total */}
              <Text style={styles.subTitle}>
                Total: $
                {(props.price + props.price * 0.06)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
            </View>
            {/* Create View for NavButton Container */}
            <View style={styles.buttonContainer}>
              {/* Create Button to go Home */}
              <Button onPress={props.onClose}>Return to Store</Button>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

// Export to different files
export default PurchaseModalScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalColors.primary200,
  },
  titleContainer: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: GlobalColors.primary600,
    borderColor: GlobalColors.primary800,
    marginVertical: 10,
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    color: "white",
    fontFamily: "ibmPlexSansBold",
  },
  subTitleContainer: {
    backgroundColor: GlobalColors.primary400,
    borderColor: GlobalColors.primary800,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    alignSelf: "center",
  },
  subTitle: {
    fontSize: 22,
    paddingHorizontal:25,
    fontWeight: "bold",
    textAlign: "center",
    color: 'white',
  },
  scrollViewContainer: {
    alignSelf: "center",
    flex: 1,
    width: "90%",
  },
  itemContainer: {
    flex: 3,
    backgroundColor: GlobalColors.primary400,
    borderColor: GlobalColors.primary800,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  productHeader: {
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  donationHeader: {
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  donationChosen: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    color: "black",
  },
  productChosen: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    color: "black",
  },

  buttonContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
});
