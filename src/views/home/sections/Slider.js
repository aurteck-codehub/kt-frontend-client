"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
import Slider from "react-slick";
import { sliderImages } from "@/utils";

const SupplyPartnersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Container maxWidth="lg" sx={{ py: 5, mb: 10 }}>
      <Typography
        variant="h1"
        textAlign={"center"}
        sx={{
          color: "custom.green",
          py: 5,
          fontWeight: "600",
          textTransform: "uppercase",
        }}
      >
        Supply Partners
      </Typography>
      <Slider {...settings}>
        {sliderImages.map((image) => (
          <div
            key={image.alt}
            style={{ objectFit: "contain", overflow: "hidden" }}
          >
            <Image src={image.image} alt={image.alt} width={100} height={100} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};
export default SupplyPartnersSlider;
