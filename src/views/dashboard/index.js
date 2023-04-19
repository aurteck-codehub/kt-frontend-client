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
const DashBoard = () => {
  const { data } = useSession();
  return (
    <MainCard title={`Hi, ${data?.user?.name ?? ""}`} darkTitle>
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
              title={<Typography variant="h3">Personal Profile</Typography>}
            />
            <Grid container direction={"column"} p={3}>
              <Stack spacing={1}>
                <Typography>{data?.user?.name ?? ""}</Typography>
                <Typography>+92 321 765 4321</Typography>
                <Typography>useremail@example.com</Typography>
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
                  <Typography>{data?.user?.name ?? ""}</Typography>
                  <Typography>
                    Shop 123, area name, Lahore, Pakistan{" "}
                  </Typography>
                  <Typography>+92 321 765 4321</Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="h4" color="textSecondary">
                    Default Billing Address
                  </Typography>
                  <Typography>{data?.user?.name ?? ""}</Typography>
                  <Typography>
                    Shop 123, area name, Lahore, Pakistan{" "}
                  </Typography>
                  <Typography>+92 321 765 4321</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </MainCard>
  );
};
export default DashBoard;
