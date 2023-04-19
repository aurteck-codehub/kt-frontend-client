"use client";
import Image from "next/image";
import {
  Grid,
  Box,
  Typography,
  Stack,
  useTheme,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Checkbox } from "@/components";
import axios from "axios";
import { API_URL } from "../../configuration";
import { useEffect, useState } from "react";

const DetailCart = ({cart, setCart, userId}) => {
  let discount = [];
  const theme = useTheme();
  const deleteIcon = {
    color: "#B4B4B4",
    "&:hover": {
      color: "#9B2915",
    },
  };

  useEffect(() => {
    console.log('here')
    cart?.map((item) => {
      console.log('idddd  ', item?.product_id)
      axios.get(`${API_URL}/discount/p/${item?.product_id}`)
      .then((res) => {
        console.log('data---  ',res.data);
        discount.push(res?.data?.discount_amount);
      })
    })
  },[cart?.length])

  const handleDelete = (e, id) => {
    e.preventDefault();
    console.log('clicked')
    axios.delete(`${API_URL}/shoppingcartitem/${id}`)
    .then(() => {
      axios.get(`${API_URL}/shoppingcartitem/cart/${userId}`)
      .then((res) => {
        setCart(res?.data)
      })
    })
  }
  console.log({discount})
  return (
    <Box>
      <Box bgcolor={"custom.grayLight"} px={5} py={1}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Checkbox
            label={
              <Typography fontWeight={"bold"}>Select All Items</Typography>
            }
          />
          <IconButton sx={deleteIcon}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Box>
      <Box mt={5}>
        {cart?.map((item, index) => (
          <Box key={index} bgcolor={"custom.grayLight"} px={5} mt={1} py={2}>
            <Grid container justifyContent={"start"} spacing={4}>
              <Grid item xs={6} sm={3} sx={{ objectFit: "cover" }} container>
                <Checkbox />
                <Image
                  src={item?.Product?.image_url}
                  alt="product image"
                  width={100}
                  height={100}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography
                  fontWeight={"bold"}
                  variant="subtitle1"
                  sx={{ textTransform: "uppercase" }}
                >
                  {item?.Product?.name}
                </Typography>
                <Typography variant="body2" mt={3}>
                  {item?.Brand?.name}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                {discount?.map((dis) => (
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  color="custom.red"
                >
                  {dis}
                  {/* Rs. 800.00 */}
                </Typography>
                ))}
                <Typography fontWeight={"bold"}>Rs. {item?.Product?.price}</Typography>
                <Typography variant="caption">20%</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Stack
                  direction={"row"}
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <IconButton
                    sx={{ bgcolor: "#b4b4b4", borderRadius: 1 }}
                    size="small"
                  >
                    <AddIcon />
                  </IconButton>
                  <Typography fontWeight={"bold"} variant="subtitle2" px={2}>
                    {item?.quantity}
                  </Typography>
                  <IconButton
                    sx={{ bgcolor: "#b4b4b4", borderRadius: 1 }}
                    size="small"
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={(e) => handleDelete(e, item?.id)} sx={{ color: "#9B2915", ml: 1 }}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default DetailCart;
