import React, {useEffect} from 'react'
import applestore from './../../assets/images/apple-app-store-icon.png'
import playstore from './../../assets/images/play-store.png'
import amazonicon from './../../assets/images/AmazonAppStoreIcon.png'
import windowstore from './../../assets/images/Windows-Store.png'
import './downloadoutapp.css'
import { Link } from 'react-router-dom'
function Downloadourapp() {
  useEffect(() => {
    document.title = "Jeeva Joy | Download Our App | Kids Exercise Videos App | Fun Fitness for Children on Mobile, Smart TV, & Web";
  }, []);
  return (
    <div className="page-content" style={{ background: '#F8F8FD', padding: '0px', marginTop: '110px', marginBottom: '40px' }}>
    <section style={{ paddingTop: '10px', maxWidth: '940px' }}>
      <h2>Watch Exercise Videos on Mobile, Table & TV</h2>
      <div className="cards_main">
        {[
          { img: applestore, text: 'Download for iPhone', link: 'https://www.watch.jeevajoy.com/' },
          { img: applestore, text: 'Download for iPad', link: 'https://www.watch.jeevajoy.com/' },
          { img: playstore, text: 'Download for Android', link: 'https://www.watch.jeevajoy.com/' },
          { img: playstore, text: 'Download for Android TV', link: 'https://www.watch.jeevajoy.com/' },
          { img: applestore, text: 'Download for Apple TV (Coming Soon)', link: 'https://www.watch.jeevajoy.com/', disabled: true },
          { img: amazonicon, text: 'Download for Fire TV (Coming Soon)', link: 'https://www.watch.jeevajoy.com/', disabled: true },
          { img: windowstore, text: 'Download for Windows (Coming Soon)', link: 'https://www.watch.jeevajoy.com/', disabled: true },
          { img: applestore, text: 'Download for Mac OS (Coming Soon)', link: 'https://www.watch.jeevajoy.com/', disabled: true },
        ].map((card, index) => (
          <div className="appcards" key={index}>
            <div className="cards_logo">
              <img src={card.img} alt="logo" />
            </div>
            <div className="cards_txt">
              <h4>{card.text}</h4>
            </div>
            <div className="cards_btn">
              <Link to={card.link} className={card.disabled ? 'disabled' : ''} target='_blank'>
                Download
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  )
}

export default Downloadourapp