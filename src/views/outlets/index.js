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
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { gridSpacing } from "@/utils";
import axios from "axios";
import { API_URL } from "@/configuration";

const OutletsView = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [outlet, setOutlet] = useState([]);

  useEffect(() => {
    const authUser = JSON?.parse(localStorage.getItem("user"));
    setUser(authUser);
    axios.get(`${API_URL}/store/user/${authUser?.id}`)
    .then((res) => {
      setOutlet(res?.data);
    })
    const userProfile = JSON.parse(localStorage.getItem("profile"));
    setProfile(userProfile)
  },[])
  return (
    <MainCard title={`My Outlets`} darkTitle>
      {user?.status === 'inactive' ? 
      <Typography>
        Your Application is under review, we will inform you after reviewing your application with in 3 to 4 working days. 
      </Typography> 
      :
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              disableTypography
              action={
                <IconButton aria-label="settings">
                  <EditIcon />
                </IconButton>
              }
              title={<Typography variant="h3">{outlet?.name}</Typography>}
            />
            <Grid container direction={"column"} p={3}>
              <Stack spacing={1}>
                <Typography>{profile?.name ?? ""}</Typography>
                <Typography>{profile?.phone_number}</Typography>
                <Typography>{outlet?.ntn}</Typography>
              </Stack>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Card>
            <CardHeader
              disableTypography
              action={
                <IconButton aria-label="settings">
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
                  <Typography>{profile?.name ?? ""}</Typography>
                  <Typography>
                    {profile?.address}{" "}
                  </Typography>
                  <Typography>{profile?.phone_number}</Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="h4" color="textSecondary">
                    Default Billing Address
                  </Typography>
                  <Typography>{profile?.name ?? ""}</Typography>
                  <Typography>
                    {profile?.address}{" "}
                  </Typography>
                  <Typography>{profile?.phone_number}</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      }
    </MainCard>
  )
};
export default OutletsView;
