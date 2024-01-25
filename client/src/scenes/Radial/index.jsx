import { Box } from "@mui/material";
import Header from "../../components/Header";
import RadialChart from "../../components/Radial";
//import ResponsiveBarSOTD from "../../components/stackedbarchart";

const Radial = () => {
  return (
    <Box m="20px">
      <Header title="Supp" subtitle="This KPI measures the percentage of deliveries from suppliers that arrive on time. It assesses the reliability of suppliers and impacts production schedules." />
      <Box height="75vh">
        <RadialChart />
      </Box>
    </Box>
  );
};

export default Radial;
