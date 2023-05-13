"use client";
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  Typography,
  Stack,
  Divider,
  Box,
} from "@mui/material";
import MainCard from "@/ui-component/cards/MainCard";
import { useSession } from "next-auth/react";
import EditIcon from "@mui/icons-material/Edit";
import { gridSpacing } from "@/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/configuration";

const DashBoard = ({ profile, setProfile, shipping, setShipping, setCurrentRowData, setOpen }) => {
  const { data } = useSession();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const authUser = JSON?.parse(localStorage.getItem("user"));
    setUser(authUser);
    const userProfile = JSON.parse(localStorage.getItem("profile"));
    setProfile(userProfile)
    axios.get(`${API_URL}/shippingaddress/user/${authUser?.id}`)
    .then((res) => {
      setShipping(res.data)
    })
  },[])
  console.log({shipping})

  const handleOpenMenu = (e, shipping) => {
    setCurrentRowData(shipping);
    setOpen(true)
    console.log('clicked')
  }

  return (
    <MainCard title={`My Payment Method`} darkTitle>
      {user?.status === 'inactive' ? 
      <Typography>
        Your Application is under review, we will inform you after reviewing your application with in 3 to 4 working days. 
      </Typography> 
      :
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{height: '250px'}}>
            <CardHeader
              disableTypography
              action={
                <IconButton aria-label="settings">
                  <EditIcon />
                </IconButton>
              }
              title={<Typography variant="h3">Payment Method</Typography>}
            />
            <Grid container direction={"column"} p={3}>
              <Stack spacing={1}>
                <Typography variant="h4" color="textSecondary">Credit Card</Typography>
                <Typography>**** **** **** 4321</Typography>
                <Typography>{profile?.name}</Typography>
                <Typography>April 2023</Typography>
              </Stack>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Card sx={{height: '250px'}}>
            <CardHeader
              disableTypography
              action={
                <IconButton onClick={(e) => handleOpenMenu(e, shipping)} aria-label="settings">
                  <EditIcon />
                </IconButton>
              }
              title={<Typography variant="h3">Address Book</Typography>}
            />
            <Grid container direction={"column"} p={2}>
              <Stack
                direction="row"
                alignItems={"center"}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={5}
              >
                <Stack spacing={1}>
                  <Typography variant="h4" color="textSecondary">
                    Default shipping Address
                  </Typography>
                  <Typography>{!shipping ? profile?.name : shipping?.name ?? ""}</Typography>
                  <Typography>
                    {!shipping ? profile?.address : shipping?.address}{" "}
                  </Typography>
                  <Typography>{!shipping ? profile?.phone_number : shipping?.phone_number}</Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="h4" color="textSecondary">
                    Default Billing Address
                  </Typography>
                  <Typography>{!shipping ? profile?.name : shipping?.name ?? ""}</Typography>
                  <Typography>
                    {!shipping ? profile?.address : shipping?.address}{" "}
                  </Typography>
                  <Typography>{!shipping ? profile?.phone_number : shipping?.phone_number}</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      }
    </MainCard>
  );
};
export default DashBoard;
