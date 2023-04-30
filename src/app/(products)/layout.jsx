"use client";
import {
  Box,
  Container,
  Stack,
  OutlinedInput,
  InputAdornment,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/configuration";
import { Product } from "@/components";

const DashboardLayout = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if(name == "") {
        setProducts(null);
    } else {
      axios.get(`${API_URL}/product/name/keyword/${name}`).then((res) => {
        setProducts(res?.data);
      });
    }
  }, [name]);

  return (
    <Box mt={"40px"} display="flex" flex={1} flexDirection="column">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          mt: 3,
          height: "100%",
        }}
      >
        <Stack sx={{ mb: 5 }}>
          <Container maxWidth="md">
            <OutlinedInput
              padding="8px"
              sx={{
                bgcolor: "#F5F5F5",
                borderRadius: "20px",
              }}
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Search products..."
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon color="primary" />
                </InputAdornment>
              }
            />
          </Container>
        </Stack>
        {products?.length ? (
          <Grid container>
            {products?.map((item, index) => (
              <Grid item xs={12} md={3}>
                <Product key={index} item={item} link={index} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
          { children }
          </>
        )}
      </Container>
    </Box>
  );
};
export default DashboardLayout;
