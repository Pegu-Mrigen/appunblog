import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import Themeprovider from "@/providers/Themeprovider";
import AuthProvider from "./../providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appun Blog",
  description: "Productive and Dynamic Blog at Gohpur!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <Themeprovider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </Themeprovider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
