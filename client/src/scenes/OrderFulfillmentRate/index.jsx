import { Box } from "@mui/material";
import Header from "../../components/Header";
import OrderFulfillmentRate from "../../components/OrderFulfillmentRate";

const OrderFulfillmentRateLine = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <OrderFulfillmentRate />
      </Box>
    </Box>
  );
};

export default OrderFulfillmentRateLine;
