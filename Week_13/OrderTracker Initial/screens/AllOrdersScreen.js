import { useContext } from "react";
import OrdersOutput from "../components/OrdersOutput/OrdersOutput";
import { OrdersContext } from "../store/orders-context";

function AllOrdersScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const ordersCtx = useContext(OrdersContext);
  const openOrders = OrdersContext;


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
        summaryName="All Orders Total"
        orders={ordersCtx.orders}
        noOrdersText="No Orders Yet"
      />
    );
  }
}

export default AllOrdersScreen;
