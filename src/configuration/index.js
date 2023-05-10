export const API_ROOT =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000" : "https://api.karobartechnologies.com/api"
    // : "https://apiprod.signacapture.com";

export const API_URL = 
process.env.NODE_ENV === "development"
    ? "https://api.karobartechnologies.com/api" : "https://api.karobartechnologies.com/api"
    // : "https://apiprod.signacapture.com";
