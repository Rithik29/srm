import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-us4">
      <div className="contact-us-child" />
      <div className="our-geeks-are-container">
        <p className="our-geeks-are">
          Our geeks are in full swing relentlessly coding our sleek new Android
          app to bring it out to you ASAP!
        </p>
        <p className="blank-line">&nbsp;</p>
      </div>
      <img className="linkedin-1-icon" alt="" src="../linkedin-1@2x.png" />
      <img
        className="logo-twitter-png-5860-1-icon"
        alt=""
        src="../logotwitterpng5860-1@2x.png"
      />
      <img className="instagram-1-icon" alt="" src="../instagram-1@2x.png" />
      <div className="contact-us-parent">
        <div className="contact-us5">Contact us</div>
        <div className="group-child2" />
        <input className="rectangle-input" type="text" />
        <input className="group-child3" type="text" />
        <textarea className="rectangle-textarea" />
        <div className="your-name">Your Name</div>
        <div className="email-address">Email Address</div>
        <div className="message">Message</div>
        <div className="your-name1">Your Name</div>
        <div className="email-address1">Email Address</div>
        <div className="type-your-message">Type your message here</div>
        <button className="rectangle-button" />
        <div className="send-message">SEND MESSAGE</div>
      </div>
    </div>
  );
};

export default ContactForm;
