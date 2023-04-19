"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Stack,
  Box,
  Typography,
  Rating,
  Card,
  CardContent,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Product = ({ index, item, link }) => {
  return (
    <Link style={{ textDecoration: "none" }} href={`/product/${item?.id}`}>
      <Card>
        <CardContent>
          <Stack
            justifyContent={"center"}
            direction="column"
            spacing={1}
            sx={{ overflow: "hidden" }}
          >
            <Image
              // src={"https://via.placeholder.com/300.png"}
              src={item?.image_url}
              alt="product-image"
              width={250}
              height={200}
            />
            <Typography color="black">{item?.name}</Typography>
            <Typography variant="h6" color="custom.red" fontWeight={"bold"}>
              Rs. {item?.price}
            </Typography>
            <Stack direction={"row"}>
              <Rating
                name="text-feedback"
                value={62}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }}>(82)</Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Product;
