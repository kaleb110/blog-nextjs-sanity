import { Roboto, Montserrat, Inter, Fira_Code } from "next/font/google";
export const firaCode = Fira_Code({ subsets: ["latin"], weight: "400" });
export const inter = Inter({ subsets: ["latin"] });

// Import Roboto font with Latin subset
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights as needed
});

// Import Montserrat font with Latin subset
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights as needed
});
