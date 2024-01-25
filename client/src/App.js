import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import ChatBoxPage from "./scenes/ChatBoxPage/index";
import SOTD from "./scenes/SOTD";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import LeadTime from "./components/LeadTime";
import BackOrderRate from "./components/BackorderRate";
import InventoryTurnoverRatio from "./components/InventoryTurnoverRatio";
import OrderFulfillmentRate from "./components/OrderFulfillmentRate";
import DaysOfInventory from "./components/DaysOfInventory";
import PerfectOrderFulfillment from "./components/PerfectOrderFulfillment";
import SCCT from "./components/SCCT";
import Radial from "./scenes/Radial";
//import SOTDbargroup from "./scenes/SOTD";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/ChatBoxPage" element={<ChatBoxPage />} />
              <Route path="/SOTD" element={<SOTD/>} />
              <Route path="/LeadTime" element={<LeadTime />} />
              <Route path="/BackOrderRate" element={<BackOrderRate />} />
              <Route path="/InventoryTurnoverRatio" element={<InventoryTurnoverRatio />} />
              <Route path="/Radial" element={<Radial/>} />
              <Route path="/OrderFulfillmentRate" element={<OrderFulfillmentRate/>} />
              <Route path="/DaysOfInventory" element={<DaysOfInventory/>} />
              <Route path="/PerfectOrderFulfillment" element={<PerfectOrderFulfillment/>} />
              <Route path="/SCCT" element={<SCCT/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
