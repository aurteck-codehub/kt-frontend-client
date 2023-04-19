"use client";
import styles from "../home.module.css";
import React from "react";
import Image from "next/image";
import { Container, Typography, Button, Grid } from "@mui/material";
import image from "@/assets/images/whatWeDo.png";
const WhatWeDo = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 10,
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            sx={{ color: "custom.green", py: 2, fontWeight: "600" }}
          >
            What we Do?
          </Typography>
          <Typography textAlign={"justify"} lineHeight="28px">
            Our mission is to connect over 2 million underserved retailors
            across Pakistan directly to manufacturers, distributors and
            wholesalers through an app-based marketplace, offering them a route
            to rapidly and efficiently access and deploy innovative supply chain
            solutions.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: 500 }}>
          <Image
            src={image}
            alt="banner-image"
            className={styles.bannerImage}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default WhatWeDo;
