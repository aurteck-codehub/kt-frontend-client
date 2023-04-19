"use client";
import { OutlinedInput, InputLabel } from "@mui/material";

const Input = ({ label = "", labelHtml, sx = {}, ...rest }) => {
  return (
    <>
      <InputLabel htmlFor={labelHtml} sx={{ color: "black" }}>
        {label}
      </InputLabel>
      <OutlinedInput
        {...rest}
        sx={{ bgcolor: "#D9D9D9", borderRadius: "15px", ...sx }}
      />
    </>
  );
};
export default Input;
