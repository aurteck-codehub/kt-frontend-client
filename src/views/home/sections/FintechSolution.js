/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "../home.module.css";
import React, { useState } from "react";
import Image from "next/image";
import {
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BsCreditCard } from "react-icons/bs";
import image from "@/assets/images/whatWeDo.png";
import loopImage from "@/assets/images/loop.png";

const FintechSolution = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 10,
      }}
    >
      <Grid container spacing={8} sx={{ mb: 10 }}>
        <Grid item xs={12} md={6} sx={{ height: 500 }}>
          <Image
            src={image}
            alt="banner-image"
            className={styles.bannerImage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              color: "custom.green",
              py: 2,
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: "84px",
            }}
          >
            Fintech Solution
          </Typography>
          <Typography textAlign={"justify"}>
            Karobar Technology (KT) offers innovative fintech solutions to
            simplify traditional financial services, such as mobile banking,
            digital payments, personal finance management, etc. Utilizing the
            latest technology, our solutions provide a seamless, efficient, and
            secure experience. Join the future of finance with KT today.
          </Typography>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ boxShadow: "none", py: 3 }}
            disableGutters
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#199088" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  color: "custom.green",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Book Keeping Feature
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Typography>
                Bookkeeping is a critical aspect of financial management. At KT,
                we understand the importance of accurate and up-to-date
                bookkeeping. Our easy-to-use platform offers a range of
                bookkeeping features, including transaction tracking, financial
                reporting, and reconciliation, to help you manage your finances
                efficiently.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ boxShadow: "none" }}
            disableGutters
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#199088" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  color: "custom.green",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Credit on Demand
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Typography>
                Our online store now offers "Credit on Demand" services,
                allowing you to apply for a loan or line of credit instantly,
                without a lengthy approval process. Simply fill out a short
                application form and receive a decision within minutes. This
                24/7 service provides the financial flexibility you need.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Grid
        container
        gap={{ xs: 2, md: 4 }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Grid
          item
          xs={12}
          sm={3}
          container
          justifyContent="center"
          alignItems={"center"}
          direction="column"
          sx={{
            bgcolor: "custom.grayLight",
            padding: "20px",
            borderRadius: 2,
          }}
        >
          <BsCreditCard size={80} color="#199088" />
          <Typography
            textAlign={"center"}
            sx={{ fontWeight: 700, color: "custom.green", mt: 3 }}
          >
            Fast & Easy Credit Access
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          container
          justifyContent="center"
          alignItems={"center"}
          direction="column"
          sx={{
            bgcolor: "custom.grayLight",
            padding: "25px",
            borderRadius: 2,
          }}
        >
          <BsCreditCard size={80} color="#199088" />
          <Typography
            textAlign={"center"}
            sx={{ fontWeight: 700, color: "custom.green", mt: 3 }}
          >
            Effortless Spending Solution
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          container
          justifyContent="center"
          alignItems={"center"}
          direction="column"
          sx={{
            bgcolor: "custom.grayLight",
            padding: "20px",
            borderRadius: 2,
          }}
        >
          <Image src={loopImage} alt="image" width={90} />
          <Typography
            textAlign={"center"}
            sx={{ fontWeight: 700, color: "custom.green", mt: 3 }}
          >
            Stress-Free Cash Flow
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default FintechSolution;
