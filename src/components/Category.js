"use client";
import Link from "next/link";
import { Stack, Typography, Card, CardContent, useTheme } from "@mui/material";

const Category = ({ index, item, link }) => {
  const theme = useTheme();
  console.log({ item });
  return (
    <Link style={{ textDecoration: "none" }} href={`/categories/${item?.id}`}>
      <Card sx={{ backgroundColor: theme.palette.custom.grayLight, py: 2 }}>
        <CardContent>
          <Stack
            justifyContent={"center"}
            direction="column"
            spacing={1}
            sx={{ overflow: "hidden" }}
          >
            {/* <Image
              src={"https://via.placeholder.com/300.png"}
              alt="product-image"
              width={250}
              height={200}
            /> */}
            <Typography color="black" variant="h3" textTransform="uppercase">
              {item?.title}
            </Typography>
            <Typography variant="body2" color="black">
              {item?.children?.map((sub) => (
                <>{sub?.name} , </>
              ))}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Category;
