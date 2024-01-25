import { Box } from "@mui/material";
import Header from "../../components/Header";
import DaysOfInventory from "../../components/DaysOfInventory";

const DaysOfInventoryBar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <DaysOfInventory />
      </Box>
    </Box>
  );
};

export default DaysOfInventoryBar;
