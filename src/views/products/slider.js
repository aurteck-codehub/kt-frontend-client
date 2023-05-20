"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useSWR from "swr";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { inter } from "@/assets/fonts";
import { Container, Typography, Box, Stack, Button, Grid } from "@mui/material";
import { PrimaryButton } from "@/components";
import tempImage from "@/assets/images/bannerImage2.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BannerSlider = () => {
  const { data } = useSWR("/api/slider", fetcher);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <Container maxWidth="md" disableGutters>
      <Slider {...settings}>
        {data?.slider.map((slide) => {
          return (
            <div key={slide.id}>
              <Grid
                container
                direction="row"
                sx={{
                  height: 500,
                  backgroundImage: `url(${slide?.image?.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center right",
                  backgroundOrigin: "padding-box",
                  objectFit: "contain",
                }}
              >
                <Grid item xs>
                  <Box px={{ xs: 0, sm: 8 }}>
                    <Box sx={{ maxWidth: 400, py: 6 }}>
                      <Typography
                        variant="h1"
                        color="custom.red"
                        fontWeight={"bold"}
                        className={`${inter.variable}`}
                      >
                        {slide.title}
                      </Typography>
                      {/* <Typography
                        variant="h4"
                        sx={{ py: 2 }}
                        color="custom.orange"
                      >
                        {slide.subtitle ?? ""}
                      </Typography> */}
                    </Box>
                    <Link href={slide.slug} style={{ textDecoration: "none" }}>
                      <PrimaryButton>Show Now</PrimaryButton>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default BannerSlider;
