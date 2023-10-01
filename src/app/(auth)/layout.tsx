import React from "react";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Grerezat",
  description: "Grerezat shop app",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/graphik-trial"
          rel="stylesheet"
        />
      </head>
      <html lang="en">
        <ThemeRegistry>
          <body style={{ margin: "0px" }}>{children}</body>
        </ThemeRegistry>
      </html>
    </>
  );
};

export default layout;
