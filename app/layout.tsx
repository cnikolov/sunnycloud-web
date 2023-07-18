import Footer from "./components/Footer";
import TopNavBar from "./components/TopNavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sunny Cloud Solutions | Cloud and Software Development Company",
  description:
    "Our goal is to provide top-quality services that help our customers save money and achieve their business objectives. We offer a range of consultation services, including website design and development, search engine optimization, and social media marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "bg-brand")}>
        <TopNavBar />
        <div className="container mx-auto min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
