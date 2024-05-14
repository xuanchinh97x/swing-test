import "./App.css";
import {
  Box,
  Tab,
  Tabs,
  Button,
  TextField,
  createSvgIcon,
  Divider,
  Typography,
  FormControlLabel,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import TabInfo from "./components/TabInfo";
import TabSubCampaign from "./components/TabSubCampaign";

interface ISubCampaign {
  name: string;
  status: boolean;
  ads: IAdvert[];
}

interface IAdvert {
  name: string;
  quantity: number;
}

type TabName = "info" | "campaign";
type SubCampaignProperty = "name" | "status" | "ads";

function App() {
  const [tabName, setTab] = useState<TabName>("info");
  const [indexSelected, setIndexSelected] = useState<number>(0);
  const [subCampaigns, setSubCampaigns] = useState<ISubCampaign[]>([
    {
      name: "Chiến dịch con 1",
      status: true,
      ads: [
        {
          name: "Quảng cáo 1",
          quantity: 0,
        },
      ],
    },
  ]);

  const handleChangeTab = (event: React.SyntheticEvent, tabName: TabName) => {
    setTab(tabName);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="App">
      <Box>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }} m={3}>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>

        <Divider />

        <Box boxShadow={2} borderRadius={2} p={3} m={3}>
          <Tabs
            value={tabName}
            onChange={handleChangeTab}
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs"
          >
            <Tab value="info" label="Thông tin" />
            <Tab value="campaign" label="Chiến dịch con" />
          </Tabs>

          <Box mt={3}>
            {tabName === "info" && <TabInfo />}
            {tabName === "campaign" && <TabSubCampaign />}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
