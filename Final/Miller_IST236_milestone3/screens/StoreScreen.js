import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  unstable_batchedUpdates,
} from "react-native";
import RadioButtonsGroup from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { PRODUCTS } from "../data/Product-Data";
import { useMemo, useState } from "react";
import GlobalColors from "../constants/styles";
import Button from "../components/Button";
import PurchaseModalScreen from "../model/PurchaseModelScreen";

// Function to show the StoreScreen
function StoreScreen() {
  // Get information from data
  const productData = PRODUCTS;

  // Set the state variable for current price. Start at 0
  const [currentPrice, setCurrentPrice] = useState(0);

  // Create array holding the product information.
  const [products, setProducts] = useState(productData);

  // Set the state variable for the donation id
  const [donationId, setDonationId] = useState(0);

  // Set the state variable for the Model
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // Set the state for total number of checked boxes
  const [totalNumOfCheckedBoxes, setTotalNumOfCheckedBoxes] = useState(0);

  // Create Modal Screen Handler Functions
  function openModalHandler() {
    setModalIsVisible(true);
  }
  // When user closes modal reset values
  function closeModalHandler() {
    setCurrentPrice(0);
    setDonationId(0);
    setModalIsVisible(false);
  }

  // Function for the selected checkboxes
  // [ Selected Products Options ]
  function setProductsHandler(id) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, productChecked: !product.productChecked }
          : product
      )
    );
  }

  // Create array holding the different times when selecting a donation
  const donationRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "No Donation",
        value: "No Donation",
        price: 0,
        borderColor: GlobalColors.primary600,
        color: GlobalColors.secondaryB500,
      },

      {
        id: "1",
        label: "$1.00",
        value: "$1.00",
        price: 1,
        borderColor: GlobalColors.primary600,
        color: GlobalColors.secondaryB500,
      },
      {
        id: "2",
        label: "$5.00",
        value: "$5.00",
        price: 5,
        borderColor: GlobalColors.primary600,
        color: GlobalColors.secondaryB500,
      },
    ],
    []
  );

  // Calculate the options the user picked
  function orderReviewHandler() {
    // Set variables
    let price = 0;
    let totalNumOfCheckedBoxes = 0;
    // Calculate the Product Checkboxes
    for (let i = 0; i < products.length; i++) {
      if (products[i].productChecked) {
        price = price + products[i].productPrice;
        totalNumOfCheckedBoxes = totalNumOfCheckedBoxes + 1;
      }
    }

    // Calculate the Radio buttons
    price = price + donationRadioButtons[donationId].price;

    // Set the current price
    setCurrentPrice(price);

    // Set the total number checked of boxes
    setTotalNumOfCheckedBoxes(totalNumOfCheckedBoxes);
    // Goto Function to open modal
    openModalHandler();
  }

  return (
    <View style={styles.rootContainer}>
      {/* Create View for scroll container */}
      <ScrollView style={styles.scrollViewContainer}>
        {/* Products to purchase */}
        {/* Create View for Rows */}
        <View style={styles.rowContainer}>
          {/* Create View for Checkbox Container */}
          <View style={styles.checkBoxContainer}>
            {/* Create Checkbox Header */}
            <Text style={styles.checkBoxHeader}>Products for Sale</Text>

            {/* Create View for Checkboxes */}
            <View style={styles.checkBoxSubContainer}>
              {productData.map((product) => {
                return (
                  <View style={styles.productContainer}>
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.image}
                        source={{ uri: product.productImageURL }}
                      />
                    </View>
                    <View style={styles.productInformation}>
                      <Text style={styles.productText}>
                        {product.productName}
                      </Text>
                      {/* Format Price */}
                      <Text style={styles.productText}>
                        ${" "}
                        {product.productPrice
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </Text>
                    </View>

                    <BouncyCheckbox
                      key={product.id}
                      onPress={setProductsHandler.bind(this, product.id)}
                      innerIconStyle={{
                        color: GlobalColors.primary200,
                        borderRadius: 0,
                        borderWidth: 2,
                        borderColor: GlobalColors.primary200,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={GlobalColors.secondaryR500}
                      style={{
                        padding: 4,
                      }}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        {/* Donations */}
        {/* Create View for Radio Container */}
        <View style={styles.radioContainer}>
          {/* Create Radio Button Header */}
          <Text style={styles.radioHeader}>
            Would you like to make a donation?
          </Text>
          {/* Create Radio Buttons */}
          <RadioButtonsGroup
            radioButtons={donationRadioButtons}
            onPress={setDonationId}
            selectedId={donationId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabels}
          />
        </View>

        {/* Create View for Button Container */}
        <View style={styles.buttonContainer}>
          {/* Create Button to go to Order Review */}
          <Button onPress={orderReviewHandler}>Submit Order</Button>
        </View>
      </ScrollView>

      {/* Pass values to modal screen */}
      <PurchaseModalScreen
        products={products}
        numSelectedProducts={totalNumOfCheckedBoxes}
        donation={donationRadioButtons[donationId].value}
        donationValue={donationRadioButtons[donationId].price}
        price={currentPrice}
        visible={modalIsVisible}
        onClose={closeModalHandler}
      />
    </View>
  );
}

// Export to different files
export default StoreScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalColors.primary600,
  },
  imageContainer: {
    height: 100,
    width: "25%",
  },
  image: {
    height: "100%",
    resizeMode: "center",
  },
  checkBoxContainer: {
    justifyContent: "center",
  },
  checkBoxHeader: {
    textAlign: "center",
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10,
    color: "white",
  },
  productContainer: {
    width: "85%",
    flexDirection: "row",
    marginVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: GlobalColors.accent500,
    borderWidth: 3,
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: GlobalColors.primary400,
  },
  productInformation: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  productText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  radioContainer: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: GlobalColors.primary200,
    borderColor: GlobalColors.accent500,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  radioHeader: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: "white",
  },
  radioGroup: {
    paddingBottom: 5,
  },
  radioGroupLabels: {
    fontSize: 15,
    color: "white",
  },
  buttonContainer: {
    width: "75%",
    alignSelf: "center",
  },
});
