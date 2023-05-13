/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Grid,
  InputLabel,
  OutlinedInput,
  FormControl,
  FormHelperText,
  Box,
  useTheme,
  Select,
  MenuItem,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import _ from "lodash";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "@/configuration";

const EditOutlet = ({ open, setOpen, currentRowData, setOutlet }) => {
  const theme = useTheme();
  const [user, setUser] = useState([]);
  const [area, setArea] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const authUser = JSON?.parse(localStorage.getItem("user"));
    setUser(authUser);
    axios
      .get(`${API_URL}/area`)
      .then((res) => setArea(res?.data))
      .catch((err) => console.log(err));
  }, []);

  async function fetchOutlet() {
    axios.get(`${API_URL}/store/user/${user?.id}`).then((res) => {
      setOutlet(res?.data);
    });
  }

  console.log({ currentRowData });

  return (
    <Dialog maxWidth="md" open={open} fullWidth>
      <Box p={2} mt={2}>
        <Typography variant="h2">Edit Store</Typography>
      </Box>
      <DialogContent>
        <Formik
          initialValues={{
            name: currentRowData?.name,
            address: currentRowData?.address,
            ntn: currentRowData?.ntn,
            area_id: currentRowData?.area_id,
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(255).required("Name is required"),
            address: Yup.string().required("Address is required"),
            ntn: Yup.string().required("ntn number is required"),
            area_id: Yup.number().required("Area is required"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              if (currentRowData?.id) {
                axios
                  .put(`${API_URL}/store/${currentRowData?.id}`, {
                    ...currentRowData,
                    ...values,
                  })
                  .then(() => {
                    fetchOutlet();
                  });
              }
              setStatus({ success: true });
              setSubmitting(false);
              setOpen(false);
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                  >
                    <InputLabel htmlFor="add-product-name">Name*</InputLabel>
                    <OutlinedInput
                      id="add-product-name"
                      value={values.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Name"
                      inputProps={{}}
                    />
                    {touched.name && errors.name && (
                      <FormHelperText error>{errors.name}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.address && errors.address)}
                  >
                    <InputLabel htmlFor="address">Address*</InputLabel>
                    <OutlinedInput
                      id="address"
                      value={values.address}
                      name="address"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Address"
                      inputProps={{}}
                    />
                    {touched.address && errors.address && (
                      <FormHelperText error>{errors.address}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.ntn && errors.ntn)}
                  >
                    <InputLabel htmlFor="ntn_number">Ntn Number*</InputLabel>
                    <OutlinedInput
                      id="ntn_number"
                      value={values.ntn}
                      name="ntn"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Ntn Number"
                      inputProps={{}}
                    />
                    {touched.ntn && errors.ntn && (
                      <FormHelperText error>{errors.ntn}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ paddingTop: "24px !important" }}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.area_id && errors.area_id)}
                  >
                    <InputLabel htmlFor="add-area_id">Area*</InputLabel>
                    <Select
                      fullWidth
                      sx={{ borderRadius: "5px", backgroundColor: "#D9D9D9" }}
                      id="add-area_id"
                      value={values.area_id}
                      name="area_id"
                      label="Area"
                      placeholder="Select Area"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {(area || []).map((are) => (
                        <MenuItem key={are?.id} value={are?.id}>
                          {are.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {touched.area_id && errors.area_id && (
                      <FormHelperText error>{errors.area_id}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Grid container sx={{ py: 2, mt: 2 }} justifyContent="flex-end">
                  <Grid item xs={2} mr={2}>
                    <Button
                      onClick={handleClose}
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ backgroundColor: "#9B2915" }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};
export default EditOutlet;
