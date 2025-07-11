export default function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-title">Let's talk with us</h1>
        <p className="contact-subtitle">
          Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
        </p>
        <ul className="contact-details">
          <li>1055 Arthur Ave, Elk Groot 67, New Palmas, South Carolina.</li>
          <li>+1 234 678 9108 99</li>
          <li><a href="mailto:Contact@moralizer.com">Contact@moralizer.com</a></li>
        </ul>
      </div>

      <div className="contact-right">
        <form className="contact-form">
          <div className="form-row double">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 234 567 8910" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Your Message</label>
              <textarea rows="5" placeholder="Write your message here..."></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn btn bg-lg">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};