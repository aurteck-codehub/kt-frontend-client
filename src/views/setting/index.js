"use client";
import {
  Grid,
  Card,
  CardHeader,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Stack,
  Divider,
  Box,
  TextField,
} from "@mui/material";
import MainCard from "@/ui-component/cards/MainCard";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { gridSpacing } from "@/utils";
import axios from "axios";
import { API_URL } from "@/configuration";
import PrimaryButton from "../../components/PrimaryButton";

const SettingsView = () => {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const authUser = JSON?.parse(localStorage.getItem("user"));
    setUser(authUser);
  },[])

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if(password === confirmPassword) {
      axios.put(`${API_URL}/auth/resetpassword/${user?.id}`, {password})
      .then((res) => {
        setMessage('Password reset successfully')
        setOpen(true)
        setPassword('')
        setConfirmPassword('');
      }).catch(() => {
        setMessage('Passwords does not match')
        setOpen(true)
      })
    }
  }
  return (
    <>
    <MainCard title={`My Settings`} darkTitle>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardHeader
              disableTypography
              action={
                <IconButton aria-label="settings">
                  <EditIcon />
                </IconButton>
              }
              title={<Typography variant="h3">Change Password</Typography>}
            />
              <div style={{display: 'flex', flexDirection: 'column'}}>
              <TextField label="New Password" value={password} onChange={(e) => setPassword(e.target.value)} size="small" sx={{width: '90%', borderRadius: '10px', margin: '15px'}}/>
              <TextField label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} size="small" sx={{width: '90%', borderRadius: '10px', margin: '15px'}}/>
              <div onClick={handleClick} style={{display: 'flex', justifyContent: 'flex-end', marginRight: '7%', marginBottom: '10px'}}>
                <PrimaryButton sx={{width: '20%'}}>Save</PrimaryButton>
              </div>
              </div>
          </Card>
        </Grid>
      </Grid>
    </MainCard>
    <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogContent>
          <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
            <Grid item xs>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ width: "70%", height: "120px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop: "43px",
                    }}
                  >
                    {/* <Image
                      src={tickcircle}
                      width={67}
                      height={67}
                      alt="circle"
                    /> */}
                    {/* <Typography variant="h2" color="custom.orange" mt="63px">
                      THANK YOU
                    </Typography>
                    <Typography variant="h3" mt="21px" textAlign={"center"}>
                      For Registeration
                    </Typography> */}
                    <Typography variant="h5" mt="21px" fontWeight={400}>
                      {message}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
};
export default SettingsView;
