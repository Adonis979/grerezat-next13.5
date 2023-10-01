import type { Metadata } from "next";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import "./main.css";

export const metadata: Metadata = {
  title: "Welcome to Grerezat",
  description: "Grerezat shop app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <html lang="en">
        <ThemeRegistry>
          <body style={{ backgroundColor: "#FFF6F6" }}>
            <NavBar />
            <div className="main">{children}</div>
            <Footer />
          </body>
        </ThemeRegistry>
      </html>
    </>
  );
}
