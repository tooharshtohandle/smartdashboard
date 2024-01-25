import { Box } from "@mui/material";
import Header from "../../components/Header";
import InventoryTurnoverRatio from "../../components/InventoryTurnoverRatio";

const InventoryTurnoverRatioLine = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <InventoryTurnoverRatio />
      </Box>
    </Box>
  );
};

export default InventoryTurnoverRatioLine;
