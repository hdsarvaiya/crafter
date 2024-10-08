
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/LandingNavbar";
// import Footer from "@/components/LandingFooter";
import SessionWrapper from "@/components/sessionWrapper";
const inter = Inter({ subsets: ["latin"] });
import { dbConnect } from "@/lib/mongo";
import 'bootstrap/dist/css/bootstrap.min.css';




export default async function RootLayout({ children }) {

  const conn = await dbConnect();
  // console.log(conn);
  
  return (
    <html lang="en">

      <body className={inter.className}>
      <SessionWrapper>
       {/* <Navbar/> */}
        <div className="min-h screen">
        {children}
        </div>
        
      </SessionWrapper>
        </body>
      
    </html>
  );
}
