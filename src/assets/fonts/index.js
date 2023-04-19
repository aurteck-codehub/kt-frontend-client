import { Inter, Raleway, Roboto } from "@next/font/google";
export const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway-font",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--roboto-font",
});
