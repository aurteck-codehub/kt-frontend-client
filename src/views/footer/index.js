"use client";
import Image from "next/image";
import NextLink from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import {
  Box,
  Typography,
  Divider,
  Container,
  Grid,
  List,
  Stack,
  FormHelperText,
  Button,
  useTheme,
} from "@mui/material";
import LogoIcon from "@/assets/icons/LogoWhite.svg";
import { inter } from "@/assets/fonts";
import * as Yup from "yup";
import { Formik } from "formik";
// import AnimateButton from "@/components/AnimateButton";
import { NAV_ITEMS, OTHER_LINK, hideLayoutRoutes } from "@/utils";
import {
  CiFacebook,
  CiYoutube,
  CiInstagram,
  CiPhone,
  CiLinkedin,
} from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import Input from "@/components/InputField";

const Footer = () => {
  const theme = useTheme();
  let segment = useSelectedLayoutSegment();
  const isLayoutNeeded = !hideLayoutRoutes.includes(segment);
  return (
    <>
      {isLayoutNeeded ? (
        <Box
          as="footer"
          sx={{
            width: "100%",
            backgroundColor: theme.palette.primary.main,
          }}>
          <Container maxWidth="xl" sx={{ mt: 10 }}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={4}
                container
                justifyContent={"center"}
                direction="column">
                <NextLink href={"/"}>
                  <Image
                    src={LogoIcon}
                    width={70}
                    height={70}
                    alt="image-logo"
                  />
                </NextLink>
                <Typography
                  className={inter.className}
                  color="white"
                  lineHeight={"22px"}
                  sx={{ py: 2 }}>
                  We digitally transforming the physical retail ecosystem of
                  Pakistan to meet the demand and expectation of modern customer
                </Typography>
                <Typography
                  color="white"
                  variant="h4"
                  sx={{ mt: 2, fontWeight: "bold" }}>
                  Follow Us
                  <Box sx={{ mt: 1, display: "flex" }}>
                    <Box sx={{ px: 1 }}>
                      <NextLink
                        href="https://www.facebook.com/"
                        target="_blank">
                        <CiFacebook color="white" size={24} />
                      </NextLink>
                    </Box>
                    <Box sx={{ px: 1 }}>
                      <NextLink
                        href="https://www.facebook.com/"
                        target="_blank">
                        <CiLinkedin color="white" size={24} />
                      </NextLink>
                    </Box>
                  </Box>
                </Typography>
                <Typography
                  color="white"
                  variant="h4"
                  sx={{ mt: 2, fontWeight: "bold" }}>
                  Contact Us
                  <Box sx={{ mt: 1, ml: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                      }}>
                      <CiPhone color="white" size={24} />
                      <Typography sx={{ px: 1, py: 1, fontWeight: "bold" }}>
                        +92 344 4023566
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                      }}>
                      <HiOutlineMail color="white" size={24} />
                      <Typography sx={{ px: 2, py: 1, fontWeight: "bold" }}>
                        junaid.ilyas@karobartechnologies.com
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                      }}>
                      <IoLocationOutline color="white" size={24} />
                      <Typography sx={{ px: 2, py: 1, fontWeight: "bold" }}>
                        Lahore, Punjab, Pakistan 54,000
                      </Typography>
                    </Box>
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container justifyContent={"center"} direction="column">
                  <Typography color="white" variant="h4" sx={{ mt: 2 }}>
                    Important Links
                  </Typography>
                  <List sx={{ ml: 2, maxWidth: 100 }}>
                    {NAV_ITEMS.map((nav) => (
                      <NextLink
                        key={nav.label}
                        href={nav.href}
                        style={{ textDecoration: "none" }}>
                        <Typography
                          color="white"
                          variant="subtitle1"
                          sx={{ py: 1 }}>
                          {nav.label}
                        </Typography>
                      </NextLink>
                    ))}
                  </List>
                  <Typography color="white" variant="h4" sx={{ mt: 2 }}>
                    Other Links
                  </Typography>
                  <List sx={{ ml: 2, maxWidth: 150 }}>
                    {OTHER_LINK.map((nav) => (
                      <NextLink
                        key={nav.label}
                        href={nav.href}
                        style={{ textDecoration: "none" }}>
                        <Typography
                          color="white"
                          variant="subtitle1"
                          sx={{ py: 1 }}>
                          {nav.label}
                        </Typography>
                      </NextLink>
                    ))}
                  </List>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} container justifyContent={"flex-end"}>
                <Grid item xs={12} container justifyContent={"flex-start"}>
                  <Typography
                    color="white"
                    variant="h4"
                    textAlign={"left"}
                    sx={{ mt: 2 }}>
                    Message Us
                  </Typography>
                </Grid>
                <Formik
                  initialValues={{
                    email: "",
                    name: "",
                    message: "",
                    submit: null,
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("Must be a valid email")
                      .max(255)
                      .required("Email is required"),
                    name: Yup.string().max(255).required("Name is required"),
                    message: Yup.string()
                      .max(255)
                      .required("Message is required"),
                  })}
                  onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting }
                  ) => {
                    try {
                      setStatus({ success: false });
                      setSubmitting(false);
                    } catch (err) {
                      setStatus({ success: false });
                      setErrors({ submit: err.message });
                      setSubmitting(false);
                    }
                  }}>
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
                              fullWidth
                              error={Boolean(touched.name && errors.name)}
                              id="password-footer-name"
                              type={"text"}
                              value={values.password}
                              name="name"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder="Enter Name"
                            />
                            {touched.name && errors.name && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text-name-footer">
                                {errors.name}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>
                        <Grid item xs={12}>
                          <Stack spacing={1}>
                            <Input
                              id="footer-email-login"
                              type="email"
                              value={values.email}
                              name="email"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder="Enter email address"
                              fullWidth
                              error={Boolean(touched.email && errors.email)}
                            />
                            {touched.email && errors.email && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text-email-login-footer">
                                {errors.email}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>
                        <Grid item xs={12}>
                          <Stack spacing={1}>
                            <Input
                              fullWidth
                              error={Boolean(touched.message && errors.message)}
                              id="-footer-text-login"
                              type={"text"}
                              value={values.password}
                              name="message"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder="Message"
                              multiline
                              rows={5}
                            />
                            {touched.message && errors.message && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text-message-footer">
                                {errors.message}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          container
                          justifyContent={"flex-end"}>
                          {/* <AnimateButton> */}
                          <Button
                            disableElevation
                            disabled={isSubmitting}
                            size="large"
                            type="submit"
                            variant="outlined"
                            sx={{
                              borderColor: "white",
                              fontWeight: "bold",
                              textTransform: "capitalize",
                              boxShadow: "none",
                              color: "white",
                            }}>
                            Send
                          </Button>
                          {/* </AnimateButton> */}
                        </Grid>
                      </Grid>
                    </form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Container>
          <Box sx={{ py: 2 }}>
            <Divider sx={{ borderColor: "#FDFDFD" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                py: 2,
                alignItems: "center",
              }}>
              <Box sx={{ maxWidth: 480, display: "flex" }}>
                <Typography
                  className={inter.className}
                  color="white"
                  textAlign={"center"}
                  component="p"
                  variant="caption"
                  gutterBottom={false}>
                  {"© 2023,"}{" "}
                  <NextLink
                    href="https://www.karobartechnologies.com/"
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}>
                    karobartechnologies Pvt. Ltd.
                  </NextLink>{" "}
                  Designed & Developed by{" "}
                  <NextLink
                    href="https://www.aurteck.com/"
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}>
                    AURTeck Pvt. Ltd.
                  </NextLink>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
export default Footer;
