"use client";
import Image from "next/image";
import { Container, Typography, Grid, Box } from "@mui/material";
import { features } from "@/utils";

const Features = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{ bgcolor: "custom.green", py: 5 }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{ color: "custom.white" }}
        >
          F
          <Typography as="span" variant="h2" sx={{ color: "custom.white" }}>
            EATURES
          </Typography>
        </Typography>
        <Grid
          container
          rowSpacing={5}
          justifyContent="center"
          alignItems={"center"}
          sx={{ py: 5 }}
        >
          {features.map((item) => (
            <Grid
              key={item.title}
              item
              xs={12}
              sm={4}
              md={3}
              container
              justifyContent={"center"}
              alignItems={"center"}
              alignContent="center"
              direction="column"
            >
              <Box sx={{ py: 3, objectFit: "contain", overflow: "hidden" }}>
                <Image src={item.image} width={60} height={60} alt="image" />
              </Box>
              <Typography
                color="white"
                textAlign={"center"}
                variant="h4"
                sx={{ textTransform: "uppercase" }}
              >
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};
export default Features;
