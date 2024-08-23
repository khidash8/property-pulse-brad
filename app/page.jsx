import Footer from "@/components/footer"
import Hero from "@/components/hero"
import InfoBoxes from "@/components/inBoxes"
import React from "react"

export const metadata = {
  title: "Property Pulse | Home",
  description: "Property Pulse - A Real Estate Web App",
}

const Home = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <Footer />
    </>
  )
}

export default Home
