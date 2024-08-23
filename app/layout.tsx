import Provider from "./components/themes/Provider";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { roboto, montserrat } from "./components/fonts/fonts";
import Head from "next/head";

import type { Metadata } from "next";

// Define the metadata object
export const metadata: Metadata = {
  title: "My Awesome Blog Post",
  description: "This is a detailed description of my awesome blog post.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${montserrat.className} bg-gray-100 dark:bg-gray-800`}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any"/>
        </Head>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
