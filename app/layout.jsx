import React from "react"
import "@/assets/styles/global_style.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Property Pulse",
  description: "Property Pulse - A Real Estate Web App",
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
