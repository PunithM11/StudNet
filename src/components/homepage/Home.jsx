import React from 'react'
import Header from '../header/Header'
import Intropage from '../Pages/Intropage'
import About from '../about/About'
import Vision from '../content/Vision'
import Mentor from '../mentor/Mentor'
import Courses from '../courses/Courses'

const Home = () => {
  return (
    <>
<Header />
<Intropage />
<About />
<Vision />
<Mentor />
{/* <Courses /> */}
</>
  )
}

export default Home