import About from './components/A/About'
import CategoryTabs from './components/C/CategoryTabs'
import Header from './components/H/Header'
import Head from 'next/head'
import HowTo from './components/H/HowTo'

export default function Home() {
  return (
    <>
      <Head>
        <title>W10 || Home</title>
      </Head>
      <Header />
      <CategoryTabs />
      <About />
      <HowTo />
    </>
  )
}