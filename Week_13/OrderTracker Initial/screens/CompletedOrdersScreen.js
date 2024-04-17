import { useContext } from "react";
import OrdersOutput from "../components/OrdersOutput/OrdersOutput";
import { OrdersContext } from "../store/orders-context";

function CompletedOrderScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const ordersCtx = useContext(OrdersContext);

  useEffect(() => {
    async function getOrders() {
      setIsLoading(true);
      try {
        const orders = await fetchOrders();
        ordersCtx.setOrders(orders);
      } catch (error) {
        setError("Could not fetch orders!");
      }
      setIsLoading(false);
    }
    getOrders();
  }, []);

  const completedOrders = ordersCtx.orders.filter((order) => {
    return order.status === "Completed";
  });

  
  function errorHandler() {
    setError(null);
  }

  if (isLoading) {
    return <LoadingOverlay />;
  } else if (error && !isProcessing) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  } else {
    return (
      <OrdersOutput
        summaryName="Completed Orders Total"
        orders={completedOrders}
        noOrdersText="No Completed Orders Yet"
      />
    );
  }
}

export default CompletedOrderScreen;
