'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import { useState } from "react";

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
          <Sidebar isSidebarOpen={isSidebarOpen} />

          {/* </div> */}
          <div className="flex w-full">
            <div className='w-0 sm:w-64' ></div>
            {children}
          </div>

        </div>


      </body>
    </html>
  );
}
