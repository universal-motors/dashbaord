'use client'
import { Inter } from "next/font/google";
import { useState } from "react";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex w-full">
          {/* <div className="w-[218px] bg-slate-300 h-[100vh]"> */}
          <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

          {/* </div> */}
          <div className="flex w-full">
            <div className=' w-0 md:w-[218px]' ></div>
            {children}
          </div>

        </div>


      </body>
    </html>
  );
}
