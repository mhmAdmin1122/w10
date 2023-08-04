import About from './components/A/About'
import CategoryTabs from './components/C/CategoryTabs'
import Header from './components/H/Header'
import Head from 'next/head'
import MobileCategHeader from './components/M/MobileCategHeader'
import CourseHomeSec from './components/C/CourseHomeSec'
import YourGoals from './components/Y/YourGoals'
import OurTeamSection from './components/O/OurTeamSection'
import Footer from './components/F/Footer'
import CopyRightLine from './components/C/CopyRightLine'
import WebLayout from './components/L/WebLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>W10 || Home</title>
      </Head>
      <WebLayout>
        <CourseHomeSec />
        <YourGoals />
        <About />
        <OurTeamSection />
      </WebLayout>
    </>
  )
}