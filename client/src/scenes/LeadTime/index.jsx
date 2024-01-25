import { Box } from "@mui/material";
import Header from "../../components/Header";
import LeadTime from "../../components/LeadTime";

const LeadTimeBar = () => {
  return (
    <Box m="20px">
      <Header title="Lead Time" subtitle="Lead time measures the time it takes from receiving a customer order to delivering the product. It reflects the speed of order processing and fulfillment." />
      <Box height="75vh">
        <LeadTime />
      </Box>
    </Box>
  );
};


export default LeadTimeBar;

