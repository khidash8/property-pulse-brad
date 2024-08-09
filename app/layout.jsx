import React from "react"
import "@/assets/styles/global_style.css"

export const metadata = {
  title: "Property Pulse",
  description: "Property Pulse - A Real Estate Web App",
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout
