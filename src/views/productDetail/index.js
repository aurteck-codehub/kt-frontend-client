"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Stack,
  Rating,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import useSWR from "swr";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { NumericFormat } from "react-number-format";
import ProductSlider from "../products/ProductSlider";
import { productDetailData } from "@/utils/data";
import { PrimaryButton, ClientReviews, RatingAndSlider } from "@/components";
import { API_URL } from "@/configuration";
import axios from "axios";
import { useRouter } from "next/navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductDetail = ({id}) => {
  const router = useRouter();
  const [isReadMore, setIsReadMore] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [shoppingcart, setShoppingCart] = useState([]);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    const user = JSON?.parse(localStorage.getItem('user'))
    axios.get(`${API_URL}/shoppingcart/auth/${user?.id}`)
    .then((res) => {
      setShoppingCart(res?.data)
    })
  },[])

  const { data } = useSWR(`${API_URL}/product/${id}`, fetcher)
  const { data: discount } = useSWR(`${API_URL}/discount/p/${id}`, fetcher)

  const handleClick = (e) => {
    console.log('clicked')
    e.preventDefault();
    axios.post(`${API_URL}/shoppingcartitem`, {shopping_cart_id: shoppingcart?.id, product_id: data?.id, quantity})
    .then(() => {
      router.push('/cart')
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <Container maxWidth="xl">
      <Grid container mt={8} gap={8}>
        <Grid
          item
          xs={12}
          sm={2}
          md={3}
          sx={{
            objectFit: "contain",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            height: 300,
          }}
        >
          <Image
            // src="https://via.placeholder.com/1000"
            src={data?.image_url}
            alt="product-image"
            fill
          />
        </Grid>
        <Grid item xs={12} sm="auto">
          <Typography
            variant="h1"
            sx={{ textTransform: "capitalize", mb: "12px" }}
          >
            {data?.name}
          </Typography>
          <Grid container alignItems="center" mb={3}>
            <Rating
              value={productDetailData.rating}
              readOnly
              precision={0.1}
              size="small"
            />
            <Typography variant="caption" sx={{ ml: 1, color: "custom.gray" }}>
              ({productDetailData.rating})
            </Typography>
          </Grid>
          <Typography variant="subtitle1" fontWeight={700}>
            Brand:
            <Typography
              variant="caption"
              sx={{ ml: 1, color: "custom.red" }}
              fontWeight="bold"
            >
              {data?.Brand?.name}
            </Typography>
          </Typography>
          <Typography
            variant="h2"
            mt={2}
            sx={{ color: "custom.red" }}
            fontWeight="bold"
          >
            <NumericFormat
              thousandsGroupStyle="thousand"
              value={data?.price || 0}
              prefix="Rs"
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={false}
              fixedDecimalScale={true}
              decimalScale={2}
              allowEmptyFormatting={false}
              allowLeadingZeros={false}
            />
          </Typography>
          <Typography mt={2} sx={{ color: "custom.gray" }}>
            <NumericFormat
              thousandsGroupStyle="thousand"
              value={discount?.discount_amount || 0}
              prefix="Rs"
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={false}
              fixedDecimalScale={true}
              decimalScale={2}
              allowEmptyFormatting={false}
              allowLeadingZeros={false}
            />
            <Typography ml={3} color="black" as="span">
              -{!discount?.discount_amount ? 0 : ((discount?.discount_amount / data?.price) * 100).toFixed(2)}%
            </Typography>
          </Typography>
          <Stack direction={"row"} alignItems="center" mt={2}>
            <Typography mr={2}>Quantity: </Typography>
            <IconButton
              sx={{ bgcolor: "#b4b4b4", borderRadius: 1 }}
              size="small"
              onClick={() => setQuantity((quantity) => quantity + 1)}
            >
              <AddIcon />
            </IconButton>
            <Typography fontWeight={"bold"} px={2}>
              {quantity}
            </Typography>
            <IconButton
              sx={{ bgcolor: "#b4b4b4", borderRadius: 1 }}
              size="small"
              onClick={() => setQuantity((quantity) => quantity - 1)}
            >
              <RemoveIcon />
            </IconButton>
            <Typography sx={{ color: "custom.gray" }} fontWeight="bold" ml={3}>
              {productDetailData.totalItem} items left
            </Typography>
          </Stack>
          <Stack direction={"row"} mt={5}>
            <Button
              variant="contained"
              size="large"
              sx={{
                textTransform: "capitalize",
                boxShadow: "none",
                padding: "15px 30px",
                bgcolor: "custom.red",
                mr: 3,
              }}
            >
              Buy now
            </Button>
            {/* <Button onClick={(e) => handleClick(e)}>
              Add to cart
            </Button> */}
            <PrimaryButton onClick={(e) => handleClick(e)}>Add to cart</PrimaryButton>
          </Stack>
        </Grid>
      </Grid>
      <Stack mt={10} spacing={3}>
        <Typography variant="h4">Description:</Typography>
        <Typography variant="body1" color="black">
          {isReadMore
            ? data?.description.slice(0, 200)
            : data?.description}
          <Typography
            variant="subtitle1"
            onClick={toggleReadMore}
            sx={{ color: "custom.red" }}
          >
            {isReadMore ? "Read more" : " Show less"}
          </Typography>
        </Typography>
      </Stack>
      <Stack mt={5}>
        <Typography variant="h4" fontWeight={"bold"} mb={3}>
          Rating & reviews
        </Typography>
        <RatingAndSlider rating={3.5} totalReviews={82} />
        {[...new Array(4)].map((item, index) => (
          <ClientReviews
            key={index}
            name="Client Name"
            rating={3}
            review="Client descriptive review goes here if there is any "
          />
        ))}
      </Stack>
      <Divider />
      <Link href="#" style={{ textDecoration: "none" }}>
        <Typography variant="h6" color="custom.orange" py={2} fontWeight="bold">
          See all Reviews &gt;
        </Typography>
      </Link>
      <Box py={10}>
        <Grid item xs>
          <Typography
            variant="h2"
            color="custom.orange"
            textTransform="uppercase"
            textAlign={"center"}
          >
            <Typography variant="h1" as="span" color={"inherit"}>
              S
            </Typography>
            imilar
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;P
            </Typography>
            roduct
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;O
            </Typography>
            F
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;D
            </Typography>
            ifferent
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;B
            </Typography>
            rands
          </Typography>
        </Grid>
        <Box mt={5}>
          <ProductSlider />
        </Box>
      </Box>
      <Box py={5} mb={10}>
        <Grid item xs>
          <Typography
            variant="h2"
            color="custom.orange"
            textTransform="uppercase"
            textAlign={"center"}
          >
            <Typography variant="h1" as="span" color={"inherit"}>
              D
            </Typography>
            ifferent
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;P
            </Typography>
            roduct
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;O
            </Typography>
            F
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;S
            </Typography>
            ame
            <Typography variant="h1" as="span" color={"inherit"}>
              &nbsp;B
            </Typography>
            rands
          </Typography>
        </Grid>
        <Box mt={5}>
          <ProductSlider />
        </Box>
      </Box>
    </Container>
  );
};
export default ProductDetail;
