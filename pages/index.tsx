import About from './components/A/About'
import CategoryTabs from './components/C/CategoryTabs'
import Header from './components/H/Header'
import Head from 'next/head'
import MobileCategHeader from './components/M/MobileCategHeader'
import CourseHomeSec from './components/C/CourseHomeSec'
import YourGoals from './components/Y/YourGoals'
import OurTeamSection from './components/O/OurTeamSection'
import Footer from './components/F/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>W10 || Home</title>
      </Head>
      <Header />
      <CategoryTabs />
      <CourseHomeSec />
      <YourGoals />
      <About />
      <OurTeamSection />
      <Footer />
      <MobileCategHeader />
    </>
  )
}