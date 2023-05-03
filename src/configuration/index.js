export const API_ROOT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000" : "http://15.236.35.120:8000/api"
    // : "https://apiprod.signacapture.com";

export const API_URL = 
process.env.NODE_ENV === "development"
    ? "http://localhost:8888/api" : "http://15.236.35.120:8000/api"
    // : "https://apiprod.signacapture.com";
