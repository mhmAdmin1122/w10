import About from './components/A/About'
import Head from 'next/head'
import CourseHomeSec from './components/C/CourseHomeSec'
import YourGoals from './components/Y/YourGoals'
import OurTeamSection from './components/O/OurTeamSection'
import WebLayout from './components/L/WebLayout'
import FeaturedCourses from './components/F/FeaturedCourses'

export default function Home() {
  return (
    <>
      <Head>
        <title>W10 || Home</title>
      </Head>
      <WebLayout>
        <CourseHomeSec />
        <FeaturedCourses />
        <About />
        <OurTeamSection />
      </WebLayout>
    </>
  )
}