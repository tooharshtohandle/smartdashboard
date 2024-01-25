import { Box } from "@mui/material";
import Header from "../../components/Header";
import SOTD from "../../components/SOTD";
//import ResponsiveBarSOTD from "../../components/stackedbarchart";

const SOTDbargroup = () => {
  return (
    <Box m="20px">
      <Header title="Supplier On Time Delivery" subtitle="This KPI measures the percentage of deliveries from suppliers that arrive on time. It assesses the reliability of suppliers and impacts production schedules." />
      <Box height="75vh">
        <SOTD />
      </Box>
    </Box>
  );
};

export default SOTDbargroup;
