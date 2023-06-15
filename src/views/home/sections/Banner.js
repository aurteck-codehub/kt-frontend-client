"use client";
import styles from "../home.module.css";
import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { inter } from "@/assets/fonts";
import bannerImage from "@/assets/images/bannerImage.png";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/aboutUs')
    console.log('pushed')
  }
  return (
    <Box
      sx={{
        bgcolor: "custom.grayLight",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          className={inter.className}
          textAlign="center"
          fontSize={92}
          fontWeight={400}
          sx={{ color: "custom.green", py: 3 }}
        >
          کرو بار بار
        </Typography>
        <Typography
          className={inter.className}
          textAlign="center"
          sx={{ color: "custom.green", py: 3 }}
        >
          We are digitally transforming the physical retail ecosystem helping
          SME retailers grow by providing platforms & financial working capital
          solutions
        </Typography>
        <Box sx={{ py: 3 }}>
          <Button
            className={inter.className}
            onClick={handleClick}
            variant="contained"
            sx={{
              bgcolor: "custom.green",
              padding: "15px 20px",
              fontWeight: "bold",
              textTransform: "capitalize",
              boxShadow: "none",
            }}
          >
            Learn More
          </Button>
        </Box>
        <Grid container sx={{ py: 3 }}>
          <Grid
            item
            xs
            sx={{ objectFit: "contain", overflow: "hidden", height: 500 }}
          >
            <Image
              src={bannerImage}
              alt="banner-image"
              className={styles.bannerImage}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Banner;
