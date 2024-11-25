import React from 'react'
import './Home.css'
import Navbar from '../../components/NavBar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="hero banner" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="caption image" className='caption-img' />
          <p>Discovering her ties to an ancient secret order, a young woman  embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src= {play_icon} alt= "" />Watch Now</button>
            <button className='btn dark-btn'><img src= {info_icon} alt= "" />More Info</button>
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Popluar on Netflix"} category={"now_playing"}/>
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Recently Added"} category={"upcoming"}/>
        {/* <TitleCards title={"Top Picks for You"} category={"popular"}/> */}
        {/* <TitleCards title={"Coming Soon"} category={"upcoming"}/> */}
        {/* There are only 4 movie lists and two of them were the same at build time */}
      </div>
      <Footer/>
    </div>
  )
}

export default Home

