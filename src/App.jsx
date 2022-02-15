import React from 'react'
import Destination from './components/destination/Destination.jsx'
import Explore from './components/explore/Explore.jsx'
import Guides from './components/Guides/Guides.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Testimonials from './components/testimonials/Testominals.jsx'
import World from './components/world/World.jsx'
import Stories from './components/stories/Stories.jsx'
import Footer from './components/footer/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Explore />
      <World />
      <Destination />
      <Guides />
      <Testimonials />
      <Stories />
      <Footer />
    </>
  )
}
