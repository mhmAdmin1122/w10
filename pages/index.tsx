import About from './components/A/About'
import CategoryTabs from './components/C/CategoryTabs'
import Header from './components/H/Header'
import Head from 'next/head'
import HowTo from './components/H/HowTo'
import MobileCategHeader from './components/M/MobileCategHeader'
import CourseHomeSec from './components/C/CourseHomeSec'

export default function Home() {
  return (
    <>
      <Head>
        <title>W10 || Home</title>
      </Head>
      <Header />
      <CategoryTabs />
      <CourseHomeSec />
      <MobileCategHeader />
      <About />
      <HowTo />
    </>
  )
}