"use client";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import React from "react";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" disableGutters sx={{ py: 4, px: 2 }}>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ color: "custom.green", py: 2, fontWeight: "600" }}>
        About
      </Typography>
      <Typography
        textAlign={"center"}
        lineHeight="28px"
        variant="h3"
        sx={{ color: "custom.green", py: 2, fontWeight: "600" }}>
        Introducing Karobar Technologies: Revolutionizing E-Commerce in Pakistan
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        Welcome to Karobar Technologies, the brainchild of our visionary
        founder, Junaid Ilyas. A proud graduand of the first-ever batch of
        Master's in Supply Chain and Retail Management at Lahore University of
        Management Sciences (LUMS), Junaid has the unique blend of academic
        knowledge and practical experience that has brought Karobar Technologies
        to life.
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        With a proven track record in commercial sales, scaling operations,
        distribution development, discount management, pricing structuring,
        inventory & warehouse management, route to markets, and last-mile
        delivery solutions, Junaid has left his mark on industry giants such as
        Coca-Cola, Pepsi-Cola, Nestle, and other renowned FMCG companies across
        Pakistan. His extensive experience has fueled his passion for social
        commerce and an unwavering drive to create a transformative impact in
        the region at scale.
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        At Karobar Technologies, we are inspired by the innovative spirit of
        Alibaba and aspire to become a leading e-commerce platform in Pakistan.
        Our mission is to bridge the gap between local suppliers and global
        buyers, providing seamless, efficient, and customer-centric solutions to
        ensure the growth and prosperity of businesses across the region.
      </Typography>

      <Typography variant="body2" sx={{ py: 2 }}>
        Our dedication to excellence and commitment to empowering businesses
        sets us apart, as we leverage cutting-edge technology and Junaid's
        exceptional expertise to streamline processes, optimize supply chains,
        and deliver unparalleled value to our customers.
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        Join us on this exciting journey as we redefine the landscape of
        e-commerce in Pakistan and beyond, with Karobar Technologies leading the
        charge in connecting businesses, fostering growth, and shaping the
        future of trade.
      </Typography>
      <Typography
        lineHeight="28px"
        variant="h3"
        sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
        Goal:
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        Our goal is to empower two million plus retailers nationwide with
        customized tech-based solution which can help them to solve their supply
        chain disruption issues, by offering them market based best margins,
        helping them to make right purchase decisions and resolving financing
        issues where they lack finances providing them shariah compliant
        financial solutions.
      </Typography>
      <Typography
        lineHeight="28px"
        variant="h3"
        sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
        Mission:
      </Typography>
      <Typography
        variant="h3"
        textAlign={"center"}
        sx={{ py: 2, color: "custom.green", fontWeight: 600 }}>
        To digitally transform the physical retail ecosystem of Pakistan
      </Typography>
      <Typography
        lineHeight="28px"
        variant="h3"
        sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
        Vision:
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        To ensure customer convenience and satisfaction while redefining the
        retailing and e-commerce business in Pakistan.
      </Typography>
      <Typography
        lineHeight="28px"
        variant="h3"
        sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
        Values:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <ArrowRightAltIcon />
          </ListItemIcon>
          <ListItemText>Be Bold & Move Fast</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowRightAltIcon />
          </ListItemIcon>
          <ListItemText>Empower individuals</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowRightAltIcon />
          </ListItemIcon>
          <ListItemText>Customer Centric</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowRightAltIcon />
          </ListItemIcon>
          <ListItemText>Collaboration</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ArrowRightAltIcon />
          </ListItemIcon>
          <ListItemText>Work with respect</ListItemText>
        </ListItem>
      </List>
    </Container>
  );
};

export default AboutPage;
