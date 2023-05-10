"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import tickcircle from "../../../assets/images/tickcircle.png";
import smallcircle from "../../../assets/images/smallcircle.png";
import { strengthColor, strengthIndicator } from "@/utils";
import { Input } from "@/components";
import { FiCamera } from "react-icons/fi";
import axios from "axios";
import { API_URL } from "@/configuration";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AuthRegister = () => {
  const router = useRouter();
  const [area, setArea] = useState([]);
  const [level, setLevel] = useState();
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [frontFile, setFrontFile] = useState(null);
  const [file, setFile] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFrontFileChange = (e) => {
    setFrontFile(e.target.files[0]);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword("");
    axios
      .get(`${API_URL}/area`)
      .then((res) => setArea(res?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
          address: "",
          phone_number: "",
          area_id: "",
          ntn: "",
          store_name: "",
          nic_number: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          // name: Yup.string().max(255).required("Name is required"),
          // store_name: Yup.string().required("store name is required"),
          // email: Yup.string()
          //   .email("Must be a valid email")
          //   .max(255)
          //   .required("Email is required"),
          // password: Yup.string().max(255).required("Password is required"),
          // confirmpassword: Yup.string().when("password", {
          //   is: (val) => (val && val.length > 0 ? true : false),
          //   then: Yup.string().oneOf(
          //     [Yup.ref("password")],
          //     "Both password need to be the same"
          //   ),
          // }),
          // address: Yup.string().required("Address is required"),
          // phone_number: Yup.number().required("Phone number is required"),
          // area_id: Yup.number().required("Area is required"),
          // ntn: Yup.number().required("ntn number is required"),
          // nic_number: Yup.number().required("nic number is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          console.log({ values });
          try {
            const formData = new FormData();
            for (let value in values) {
              formData.set(value, values[value]);
            }
            formData.append("image1", frontFile);
            formData.append("image2", file);
            await axios
              .post(`${API_URL}/auth/register`, formData)
              .then((res) => {
                // localStorage.setItem("user", JSON?.stringify(res?.data?.user));
                // localStorage.setItem(
                //   "profile",
                //   JSON?.stringify(res?.data?.profile)
                // );
                // localStorage.setItem("token", res?.data?.token);
                setStatus({ success: false });
                setSubmitting(false);
                setOpen(true)
              });
          } catch (err) {
            console.log("Called");
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
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    id="name-login"
                    type="text"
                    label="Name*"
                    labelHtml="name-signup"
                    value={values.name}
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                  />
                  {touched.name && errors.name && (
                    <FormHelperText error id="helper-text-name-signup">
                      {errors.name}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    label="Store Name"
                    labelHtml="store-name"
                    fullWidth
                    error={Boolean(touched.store_name && errors.store_name)}
                    id="storename-signup"
                    value={values.store_name}
                    name="store_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Demo Inc."
                  />
                  {touched.store_name && errors.store_name && (
                    <FormHelperText error id="helper-text-storename-signup">
                      {errors.store_name}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    labelHtml="email-signup"
                    label="Email Address*"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@company.com"
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    label="Password*"
                    labelHtml="password-signup"
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="******"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box
                        sx={{
                          bgcolor: level?.color,
                          width: 85,
                          height: 8,
                          borderRadius: "7px",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    label="Confirm Password*"
                    labelHtml="confirm-password-signup"
                    fullWidth
                    error={Boolean(
                      touched.confirmpassword && errors.confirmpassword
                    )}
                    id="confirmpassword-signup"
                    type={showPassword ? "text" : "password"}
                    value={values.confirmpassword}
                    name="confirmpassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="******"
                  />
                  {touched.confirmpassword && errors.confirmpassword && (
                    <FormHelperText
                      error
                      id="helper-text-confirmpassword-signup"
                    >
                      {errors.confirmpassword}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    fullWidth
                    label="Cell Number*"
                    labelHtml="phone_number"
                    error={Boolean(touched.phone_number && errors.phone_number)}
                    id="phone_number-signup"
                    type="text"
                    value={values.phone_number}
                    name="phone_number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="0300000000"
                  />
                  {touched.phone_number && errors.phone_number && (
                    <FormHelperText error id="helper-text-phone-signup">
                      {errors.phone_number}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    fullWidth
                    label="Address*"
                    labelHtml="address"
                    error={Boolean(touched.address && errors.address)}
                    id="address"
                    type="text"
                    value={values.address}
                    name="address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="address"
                  />
                  {touched.address && errors.address && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.address}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Typography>Area*</Typography>
              </Grid>
              <Grid item xs={12} sx={{paddingTop: '10px !important'}}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.area_id && errors.area_id)}
                >
                  {/* <InputLabel htmlFor="add-area_id">Area*</InputLabel> */}
                  <Select
                    fullWidth
                    sx={{ borderRadius: "15px", backgroundColor: "#D9D9D9" }}
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
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    fullWidth
                    label="NTN Number*"
                    labelHtml="ntn number"
                    error={Boolean(touched.ntn && errors.ntn)}
                    id="ntn"
                    type="text"
                    value={values.ntn}
                    name="ntn"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="NTN"
                  />
                  {touched.ntn && errors.ntn && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.ntn}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <Input
                    id="nic-number"
                    type="number"
                    label="CNIC Number (without dash) *"
                    labelHtml="cnic-number"
                    value={values.nic_number}
                    name="nic_number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="3500000000000"
                    fullWidth
                    error={Boolean(touched.nic_number && errors.nic_number)}
                  />
                  {touched.nic_number && errors.nic_number && (
                    <FormHelperText error id="helper-text-cnic-signup">
                      {errors.nic_number}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ color: "#000" }}>Upload CNIC*</Typography>
              </Grid>
              <Input
                id="file-inp"
                type="file"
                sx={{ display: "none" }}
                onChange={handleFrontFileChange}
              />
              <Grid item xs={12} md={6}>
                <label htmlFor="file-inp">
                  <Stack spacing={1}>
                    <Box
                      sx={{
                        bgcolor: "custom.grayLight",
                        height: 150,
                        borderRadius: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundImage: `url(${
                          frontFile && URL.createObjectURL(frontFile)
                        })`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        position: "relative",
                        cursor: "pointer",
                      }}
                    >
                      {!frontFile && (
                        <Box
                          sx={{ position: "absolute", right: 10, bottom: 2 }}
                        >
                          <FiCamera size={34} color="#E95C20" />
                        </Box>
                      )}
                      {!frontFile && (
                        <Typography sx={{ color: "#CAC3C3" }}>front</Typography>
                      )}
                    </Box>
                  </Stack>
                </label>
              </Grid>
              <Input
                id="file-input"
                type="file"
                sx={{ display: "none" }}
                onChange={handleFileChange}
              />
              <Grid item xs={12} md={6}>
                <label htmlFor="file-input">
                  <Stack spacing={1}>
                    <Box
                      sx={{
                        bgcolor: "custom.grayLight",
                        height: 150,
                        borderRadius: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundImage: `url(${
                          file && URL.createObjectURL(file)
                        })`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        position: "relative",
                        cursor: "pointer",
                      }}
                    >
                      {!file && (
                        <Box
                          sx={{ position: "absolute", right: 10, bottom: 2 }}
                        >
                          <FiCamera size={34} color="#E95C20" />
                        </Box>
                      )}
                      {!file && (
                        <Typography sx={{ color: "#CAC3C3" }}>back</Typography>
                      )}
                    </Box>
                  </Stack>
                </label>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  By Signing up, you agree to our &nbsp;
                  <Link href="#">Terms of Service</Link>
                  &nbsp; and &nbsp;
                  <Link href="#">Privacy Policy</Link>
                </Typography>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                {/* <AnimateButton> */}
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: "custom.green",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      boxShadow: "none",
                    }}
                  >
                    Create Account
                  </Button>
                {/* </AnimateButton> */}
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
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
                <Box sx={{ width: "100%", height: "420px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop: "43px",
                    }}
                  >
                    <Image
                      src={tickcircle}
                      width={67}
                      height={67}
                      alt="circle"
                    />
                    <Typography variant="h2" color="custom.orange" mt="63px">
                      THANK YOU
                    </Typography>
                    <Typography variant="h3" mt="21px" textAlign={"center"}>
                      For Registeration
                    </Typography>
                    <Typography variant="h5" mt="21px" fontWeight={400}>
                      We will inform you after reviewing your application with
                      in 3 to 4 working days
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthRegister;
