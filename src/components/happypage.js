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
        <title>Travel Agency</title>
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
      <div className="landing-page-top-container">
        <div className="landing-page-hero">
          <h1 className="landing-page-text">Relax , Refresh and Renew</h1>
          <div className="landing-page-content-container">
            <span className="landing-page-text01">
              <span>
                Take time out from your busy day. Take a deep breath.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                And find a practice that both challenges and centers you.
              </span>
              <br></br>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>It’s all right Here and Now !</span>
            </span>
            <SolidButton button="Explore homes"></SolidButton>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1>
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
              <OutlineButton button1="Discover place"></OutlineButton>
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
              <OutlineButton button1="Discover place"></OutlineButton>
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
              <OutlineButton button1="Discover place"></OutlineButton>
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
              <OutlineButton button1="Discover place"></OutlineButton>
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
              <OutlineButton button1="Discover place"></OutlineButton>
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
              <OutlineButton button1="Discover place"></OutlineButton>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1>Travel</h1>
          <div className="landing-page-links-container">
            <div className="landing-page-container13">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link"
              >
                Tour packages
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link01"
              >
                Personalized offers
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link02"
              >
                Special deals
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link03"
              >
                Summer holiday
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </a>
            </div>
            <div className="landing-page-container14">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link04"
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link05"
              >
                FAQ
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link06"
              >
                Terms and conditions
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link07"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="landing-page-follow-container">
            <span className="landing-page-text34">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="landing-page-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link08"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link09"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon2"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link10"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon4"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HappyPage
