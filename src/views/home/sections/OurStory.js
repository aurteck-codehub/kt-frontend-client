"use client";
import styles from "../home.module.css";
import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";

const OurStory = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      className={styles.ourStoryContainer}
      sx={{
        mt: 5,
      }}
    >
      <Box className={styles.backgroundImage}>
        <Container maxWidth="md">
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{ color: "custom.white", py: 2, fontWeight: "600" }}
              >
                Our Story
              </Typography>
              <Typography
                variant="h3"
                sx={{ color: "custom.white", py: 2, fontWeight: "600" }}
              >
                Supercharging small retailers of Pakistan
              </Typography>
              <Typography
                textAlign={"justify"}
                color="white"
                sx={{ py: 1 }}
                lineHeight="28px"
              >
                Shahnaz Bibi represents 40% of the Retail Sector of Pakistan
                including kiryanas, general stores, medical stores,
                supermarkets, hypermarkets, etc. families
              </Typography>
              <Typography
                textAlign={"justify"}
                color="white"
                sx={{ py: 5 }}
                lineHeight="28px"
              >
                We want to make the lives of 2 million small scale retailers
                easy who are lacking ease of inventory procurement and their
                earning potential is restrained. We want to supercharge retail
                supply chain to empower the livelihoods of small business
                owners, their employees, and families
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};
export default OurStory;
