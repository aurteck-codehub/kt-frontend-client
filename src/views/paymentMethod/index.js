"use client";
import { useState } from "react";
import { Grid, Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tabs from "./Tabs";
import MainCard from "@/ui-component/cards/MainCard";
import { gridSpacing } from "@/utils";

const tabs = [
  {
    id: 1,
    label: "Information",
    value: "Information",
  },
  {
    id: 2,
    label: "Shipping",
    value: "Shipping",
  },
  {
    id: 3,
    label: "Payment",
    value: "Payment",
  },
];
const PaymentMethodsView = () => {
  const [value, setValue] = useState("Information");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MainCard title="Payment Method" darkTitle>
      <Grid container spacing={gridSpacing} direction="column">
        <Grid item xs={12} mt={5}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {tabs.map((tab) => (
                  <Tab
                    label={tab.label}
                    value={tab.value}
                    key={tab.id}
                    sx={{ color: "#BCC0C8" }}
                  />
                ))}
              </TabList>
            </Box>
            <Tabs tab={value} />
          </TabContext>
        </Grid>
      </Grid>
    </MainCard>
  );
};
export default PaymentMethodsView;
