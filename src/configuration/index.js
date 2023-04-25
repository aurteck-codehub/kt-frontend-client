export const API_ROOT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://apiprod.signacapture.com";

export const API_URL = 
process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api"
    : "https://apiprod.signacapture.com";
    