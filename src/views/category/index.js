"use client";
import { Container, Grid } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import FallBackLoader from "@/components/CircularProgress";
import Categories from "../products/categories";
import axios from "axios";
import { API_URL } from "../../configuration";
import { Product } from "@/components";

function CategoriesSearch({ id }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/product/sub/cat/${id}`).then((res) => {
      setProducts(res?.data);
    });
  }, []);
  console.log({ products });
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Suspense fallback={<FallBackLoader />}>
            <Categories gri={12} />
          </Suspense>
        </Grid>
        <Grid item xs={12} md={8} ml="20px">
          <Grid container spacing={2}>
            {products?.products?.map((item, index) => (
              <Grid item xs={12} md={4}>
                <Product key={index} item={item} link={index} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CategoriesSearch;
