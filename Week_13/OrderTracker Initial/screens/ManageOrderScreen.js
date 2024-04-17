import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { StyleSheet, View } from "react-native";
import Button from "../components/UI/Button";
import { OrdersContext } from "../store/orders-context";
import LoadingOverlay from "../UI/LoadingOverlay";
import ErrorOverlay from "../UI/ErrorOverlay";

function ManageOrderScreen(props) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState();

  const ordersCtx = useContext(OrdersContext);

  const editedOrderId = props.route.params?.orderId; // ? Checks for undefined first
  const isEditing = !!editedOrderId; // Converts false-like value to false and true-like value to true

  const [orderCompleted, setOrderCompleted] = useState(isEditing)
    ? selectedOrder.status === "Open"
      ? false
      : true
    : false;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: isEditing ? "Edit Order" : "Add Order",
    });
  }, [props.navigation, isEditing]);

  async function deleteOrderHandler() {
    try {
      await deleteOrder(editedOrderId);
      ordersCtx.deleteOrder(editedOrderId);
      props.navigation.goBack();
    } catch (error) {
      setError("Could not delete order, please try again later.");
    }
    setIsProcessing(false);
  }

  function cancelHandler() {
    props.navigation.goBack();
  }

  async function confirmHandler(orderData) {
    setIsProcessing(true);
    try {
      if (isEditing) {
        ordersCtx.updateOrder(editedOrderId, {
          ...orderData,
          status: orderCompleted ? "Completed" : "Open",
        });
      } else {
        const id = await storeOrder({
          ...orderData,
          status: "Open",
        });
        ordersCtx.addOrder({
          ...orderData,
          status: "Open",
          id: id,
        });
      }
      props.navigation.goBack();
    } catch (error) {
      setError("Could not save order, please try again later.");
    }
    setIsProcessing(false);
  }

  function errorHandler() {
    setError(null);
  }

  if (isProcessing) {
    return <LoadingOverlay />;
  } else if (error && !isProcessing) {
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button mode="flat" onPress={cancelHandler} style={styles.button}>
            Cancel
          </Button>
          <Button onPress={confirmHandler} style={styles.button}>
            {isEditing ? "Update" : "Add"}
          </Button>
        </View>
        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              icon="delete"
              color={GlobalStyles.colors.error500}
              size={30}
              onPress={deleteOrderHandler}
            />
          </View>
        )}
      </View>
    );
  }
}

export default ManageOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
