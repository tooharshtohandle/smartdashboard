import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/SCCT";

const SCCTBar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <SCCT />
      </Box>
    </Box>
  );
};

export default SCCTBar;
