import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Suggestions" subtitle="AI powered Data driven Insights" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Performance Metrics
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Alert! Supplier performance metrics are showing a decline, indicating quality issues. Recommendation: Launch a quality improvement program with the supplier and explore backup options to maintain our high standards.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Demand Forecasting
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Hi there! I've crunched the numbers and spotted a trend. Brace yourself for a surge in demand for our popular electronic gadget during the holiday season. Recommendation: Ramp up production capacity, secure additional raw materials, and get ready for the holiday rush!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Inventory Management
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Hey, guess what? We've got a surplus of those limited-edition fashion items. Recommendation: Launch an exclusive online promotion to targeted customer segments. Let's create some buzz and ensure a quick sell-out, avoiding excess inventory costs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Risk Management
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Hold on tight! I'm monitoring global events, and there's a potential disruption due to political unrest in a key manufacturing region. Recommendation: Temporarily diversify sourcing to mitigate delays. Better safe than sorry!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Supply Chain Dashboard
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            By Team 4
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
