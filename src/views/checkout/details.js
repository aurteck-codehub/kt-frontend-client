"use client";
import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Input } from "@/components";

const DetailCart = ({shippingAddress, setShippingAddress, contact, setContact}) => {
  const [paymentMethod, setPaymentMethod] = useState(1);

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Stack
      bgcolor={"custom.grayLight"}
      px={5}
      py={10}
      direction="column"
      spacing={5}
    >
      <Box>
        <Typography
          variant="h4"
          color="custom.orange"
          lineHeight="38px"
          textTransform="uppercase"
        >
          <Typography variant="h3" as="span" color={"inherit"}>
            C
          </Typography>
          ontact
          <Typography variant="h3" as="span" color={"inherit"}>
            &nbsp;I
          </Typography>
          nformation
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input
                label="Full Name*"
                labelHtml={"contact-full-name"}
                value={contact?.name}
                onChange={(e) => setContact({...contact, name: e.target.value})}
                required
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input
                label="Phone Number*"
                labelHtml={"contact-number"}
                value={contact?.phone_number}
                onChange={(e) => setContact({...contact, phone_number: e.target.value})}
                required
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <Input 
                label="Address*" 
                labelHtml={"contact-address"}
                value={contact?.address}
                onChange={(e) => setContact({...contact, address: e.target.value})} 
                required 
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input 
                label="City*" 
                labelHtml={"contact-city"}
                value={contact?.city}
                onChange={(e) => setContact({...contact, city: e.target.value})} 
                required 
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input
                label="Province/State*"
                labelHtml={"contact-province"}
                value={contact?.state}
                onChange={(e) => setContact({...contact, state: e.target.value})}
                required
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          variant="h4"
          color="custom.orange"
          fontWeight={"bold"}
          lineHeight="38px"
          textTransform="uppercase"
        >
          <Typography variant="h3" as="span" color={"inherit"}>
            P
          </Typography>
          ayment
          <Typography variant="h3" as="span" color={"inherit"}>
            &nbsp;M
          </Typography>
          ethod
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={paymentMethod}
            onChange={handleChange}
            sx={{ bgcolor: "#D9D9D9", borderRadius: "15px" }}
          >
            <MenuItem value={1}>Cash on Delivery</MenuItem>
            <MenuItem value={2}>Credit/Debit Card</MenuItem>
            <MenuItem value={3}>Bank Transfer</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Typography
          variant="h4"
          color="custom.orange"
          fontWeight={"bold"}
          lineHeight="38px"
          textTransform="uppercase"
        >
          <Typography variant="h3" as="span" color={"inherit"}>
            S
          </Typography>
          hipping
          <Typography variant="h3" as="span" color={"inherit"}>
            &nbsp;A
          </Typography>
          ddress
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input
                label="Full Name*"
                labelHtml={"shipping-full-name"}
                value={shippingAddress?.name}
                onChange={(e) => setShippingAddress({...shippingAddress, name: e.target.value})}
                required
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input
                label="Phone Number*"
                labelHtml={"shipping-phone-number"}
                value={shippingAddress?.phone_number}
                onChange={(e) => setShippingAddress({...shippingAddress, phone_number: e.target.value})}
                required
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <Input 
                label="Address*" 
                labelHtml={"shipping-address"}
                value={shippingAddress?.address}
                onChange={(e) => setShippingAddress({...shippingAddress, address: e.target.value})} 
                required 
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input 
                label="City*" 
                labelHtml={"shipping-city"}
                value={shippingAddress?.city}
                onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})} 
                required 
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input
                label="Province/State*"
                labelHtml={"shipping-province"}
                value={shippingAddress?.state}
                onChange={(e) => setShippingAddress({...shippingAddress, state: e.target.value})}
                required
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          variant="h4"
          color="custom.orange"
          fontWeight={"bold"}
          lineHeight="38px"
          textTransform="uppercase"
        >
          <Typography variant="h3" as="span" color={"inherit"}>
            C
          </Typography>
          redit
          <Typography variant="h3" as="span" color={"inherit"}>
            &nbsp;C
          </Typography>
          ard
          <Typography variant="h3" as="span" color={"inherit"}>
            &nbsp;D
          </Typography>
          etail
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input
                label="First Name*"
                labelHtml={"credit-card-first-name"}
                // required
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input
                label="Last Name*"
                labelHtml={"credit-card-last-name"}
                // required
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <Input
                label="Address*"
                labelHtml={"credit-card-address"}
                // required
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input label="City*" labelHtml={"credit-card-city"} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Input
                label="Province/State*"
                labelHtml={"credit-card-province"}
                // required
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default DetailCart;
