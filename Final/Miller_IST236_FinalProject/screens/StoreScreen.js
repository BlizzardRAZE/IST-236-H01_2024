import {
  Text,
  StyleSheet,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";
import RadioButtonsGroup from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { PRODUCTS } from "../data/Product-Data";
import { useMemo, useState } from "react";
import GlobalColors from "../constants/styles";

// Function to show the StoreScreen
function StoreScreen(props) {
  // Get information from data
  const productData = PRODUCTS;

  // Set the state variable for current price. Start at 0
  const [currentPrice, setCurrentPrice] = useState(0);

  // Create array holding the product information.
  const [products, setProducts] = useState(productData);

  // Function for the selected checkboxes
  // [ Selected Products Options ]
  function setProductsHandler(id) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
      product.id === id ? { ...product, value: !product.value } : product
      )
    );
  }

  // Create array holding the different times when selecting a donation
  const donationRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "$5.00",
        value: "$5.00",
        price: 5,
        borderColor: GlobalColors.primary500,
        color: GlobalColors.accent800,
      },
      {
        id: "1",
        label: "$1.00",
        value: "$1.00",
        price: 1,
        borderColor: GlobalColors.primary500,
        color: GlobalColors.accent800,
      },
      {
        id: "2",
        label: "No Donation",
        value: "No Donation",
        price: 0,
        borderColor: GlobalColors.primary500,
        color: GlobalColors.accent800,
      },
    ],
    []
  );

  // Set the state variable for the donation id
  const [donationId, setDonationId] = useState(0);

  return (
    <View>
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
                      <Text>{product.productName}</Text>
                      <Text>{product.productPrice}</Text>
                    </View>

                    <BouncyCheckbox
                      key={product.id}
                      onPress={setProductsHandler.bind(this, product.id)}
                      textStyle={{
                        textAlign: "center",
                        textDecorationLine: "none",
                        color: GlobalColors.accent000,
                      }}
                      innerIconStyle={{
                        color: GlobalColors.primary800,
                        borderRadius: 0,
                        borderColor: GlobalColors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={GlobalColors.accent800}
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

        {/* Create View for NavButton Container */}
        <View style={styles.navButtonContainer}>
          {/* Create Button to go to Order Review */}
          <Button title="Purchase"></Button>
          {/* <NavButton onPress = {props.onNext}>Submit Order</NavButton> */}
        </View>
      </ScrollView>
    </View>
  );
}

// Export to different files
export default StoreScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    height: 100,
    width:"50%",
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  productContainer:{
    flexDirection:'row',
    marginVertical:15,
  }
});
