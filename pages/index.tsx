import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Information from '../components/Information'
<<<<<<< HEAD
import MarketDiffForm from '../components/MarketDiffForm'
=======
import MarketDiffForm from '../components/DocumentForm'
>>>>>>> de4e81e (testform)

import Topbar from '../components/Topbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    
<<<<<<< HEAD
    <div className=" ">
      
        <Topbar/>
        <Information/>

        
=======

    <div className="  font-['Itim']">
      <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Itim&family=Poppins:wght@200&family=Roboto:wght@100&display=swap" rel="stylesheet"/>
      </div>
        <Topbar/>
        <Information/>
>>>>>>> de4e81e (testform)
        
    </div>
  )
}

export default Home
