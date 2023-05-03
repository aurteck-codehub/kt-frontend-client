/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["via.placeholder.com", "picsum.photos", "production-bucket-api.s3.amazonaws.com", "kt-storage.s3.amazonaws.com"],
  },
  env: {
    NEXTAUTH_SECRET: "^r*0If07P$O8i+an)SbS`sy-tu,BsC",
  },
};

module.exports = nextConfig;

