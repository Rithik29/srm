import "./FooterContainer.css";

const FooterContainer = () => {
  return (
    <div className="footer">
      <div className="footer-child" />
      {/* <div className="but-i-must-container">
        <p className="but-i-must">
          But i must explain to you all this mistaken
        </p>
        <p className="idea-of-dencouncing">idea of dencouncing pleasure.</p>
      </div> */}
      <div className="quick-links-about-container">
        <p className="but-i-must">
          <span className="quick-links1">Quick Links</span>
        </p>
        <p className="about-our-company">
          <span>
            <span className="about-our-company1">About Our Company</span>
          </span>
        </p>
        <p className="but-i-must">
          <span>
            <span className="span">Services WE provide</span>
          </span>
        </p>
        <p className="but-i-must">
          <span>
            <span className="span">{`Career & Opportunity`}</span>
          </span>
        </p>
        <p className="but-i-must">
          <span>
            <span className="span">{`Privacy & policy`}</span>
          </span>
        </p>
        <p className="idea-of-dencouncing">
          <span>
            <span className="span">Contact US</span>
          </span>
        </p>
      </div>
      <div className="contact-us-sagrada-container">
        <p className="but-i-must">
          <span className="quick-links1">Contact us</span>
        </p>
        <p className="about-our-company">
          <span>
            <span className="about-our-company1">Sagrada Familia, Herba</span>
          </span>
        </p>
        <p className="but-i-must">
          <span>
            <span className="span">Street Front USA</span>
          </span>
        </p>
        <p className="but-i-must">
          <span>
            <span className="span">brandoxide@gmail.com</span>
          </span>
        </p>
        <p className="idea-of-dencouncing">
          <span>
            <span className="span">002-568423591</span>
          </span>
        </p>
      </div>
      <div className="company-about-company-container">
        <p className="but-i-must">
          <span className="quick-links1">Company</span>
        </p>
        <p className="about-our-company">
          <span>
            <span className="about-our-company1">About Company</span>
          </span>
        </p>
        <p className="but-i-must">
          <span>
            <span className="span">Our Testimonials</span>
          </span>
        </p>
        <p className="but-i-must">
          <span>
            <span className="span">Latest News</span>
          </span>
        </p>
        <p className="but-i-must">
          <span>
            <span className="span">Our misson</span>
          </span>
        </p>
        <p className="idea-of-dencouncing">
          <span>
            <span className="span">Get a free Quot</span>
          </span>
        </p>
      </div>
      <img className="footer-item" alt="" src="../group-36.svg" />
      <div className="follow-us">Follow Us</div>
      <div className="copyright-2020-container">
        <span>{`Copyright @ 2020 `}</span>
        <span className="brandoxide">Brandoxide</span>
        <span>.all right reserved.</span>
      </div>
      <div className="footer-inner" />
      <img className="group-icon" alt="" src="../group-60.svg" />
    </div>
  );
};

export default FooterContainer;
