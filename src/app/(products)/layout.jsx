"use client";
import {
  Box,
  Container,
  Stack,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const DashboardLayout = ({ children }) => {
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
              placeholder="Search products..."
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon color="primary" />
                </InputAdornment>
              }
            />
          </Container>
        </Stack>
        {children}
      </Container>
    </Box>
  );
};
export default DashboardLayout;
