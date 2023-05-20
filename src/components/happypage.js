import React from 'react'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import OutlineButton from '../components/outline-button'
import './happypage.css'
import NavbarNew from './Navbarnew'

const HappyPage = (props) => {
  return (
    <div className="landing-page-container">
      <NavbarNew/>
      
      <Helmet>
        <title>Happy page</title>
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
      <div className="landing-page-top-container">
        <div className="landing-page-hero">
          <h1 className="landing-page-text">Relax , Refresh and Renew</h1>
          <div className="landing-page-content-container">
          <p class="happy_head">
                Take time out from your busy day. Take a deep breath.
              
              <br></br>
              
                And find a practice that both challenges and centers you.
      
              <br></br>
              <br></br>
              <span>It’s all right Here and Now !</span>
              </p>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1 class="act_head">
          <span>Recommended Activities</span>
          <br></br>
          <span>            Here And Now !</span>
          <br></br>
        </h1>
        <div className="landing-page-cards-container">
          <div className="landing-page-container01">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
              className="landing-page-image"
            />
            <div className="landing-page-container02">
              <span className="landing-page-text15">Practice self-care</span>
              <span className="landing-page-text16">
                Engage in activities that make you feel good, such as getting a
                massage,taking a relaxing bath,
              </span>
              <OutlineButton className="happy_but" button1="Discover"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container03">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
              className="landing-page-image1"
            />
            <div className="landing-page-container04">
              <span className="landing-page-text17">
                Take on new challenges
              </span>
              <span className="landing-page-text18">
                <span>
                  Challenge yourself to learn something new or try something
                  that&apos;s outside your comfort zone.
                </span>
                <span className="landing-page-text20"></span>
              </span>
              <OutlineButton className="happy_but" button1="Discover"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container05">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1513342791620-b106dc487c94?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
              className="landing-page-image2"
            />
            <div className="landing-page-container06">
              <span className="landing-page-text21">Gratitude</span>
              <span className="landing-page-text22">
                Make a habit of focusing on the positive things in your
                life,such as your relationships, health, and personal growth.
              </span>
              <OutlineButton className="happy_but" button1="Discover"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container07">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
              className="landing-page-image3"
            />
            <div className="landing-page-container08">
              <span className="landing-page-text23">Get Creative</span>
              <span className="landing-page-text24">
                <span>
                  Engage in creative activities such as painting, drawing, or
                  writing. This can be a great way to express yourself.
                </span>
                <br></br>
              </span>
              <OutlineButton className="happy_but" button1="Discover"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container09">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1585211969224-3e992986159d?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
              className="landing-page-image4"
            />
            <div className="landing-page-container10">
              <span className="landing-page-text27">
                <span>Connect with Loved</span>
                <br></br>
                <span>                  Ones</span>
              </span>
              <span className="landing-page-text31">
                Engage in activities that make you feel good, such as getting a
                massage,taking a relaxing bath,
              </span>
              <OutlineButton className="happy_but" button1="Discover"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container11">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
              className="landing-page-image5"
            />
            <div className="landing-page-container12">
              <span className="landing-page-text32">Spend time in nature</span>
              <span className="landing-page-text33">
                Engage in activities that make you feel good, such as getting a
                massage,taking a relaxing bath,
              </span>
              <OutlineButton  button1="Discover"></OutlineButton>
            </div>
          </div>
        </div>
      </div>

       
    </div>
  )
}

export default HappyPage
