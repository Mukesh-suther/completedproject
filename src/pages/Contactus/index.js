import React, {useEffect} from 'react';
import './contactus.css'; // Make sure to create and style this CSS file accordingly
const Contactus = () => {
  useEffect(() => {
    document.title = "Jeeva Joy | Contact Us | Kids Exercise Videos App | Fun Fitness for Children on Mobile, Smart TV, & Web";
  }, []);
  return (
    <div className="page-content">
      <section style={{ padding: '0px' }}>
        <div className="contact-container">
          {/* <form action="" className="form">
            <div className="item">
              <label htmlFor="first-name" className="label">
                <span>*</span> First Name <span>Required</span>
              </label>
              <input type="text" id="first-name" placeholder="First Name" className="input" required />
            </div>

            <div className="item">
              <label htmlFor="last-name" className="label">
                <span>*</span> Last Name <span>Required</span>
              </label>
              <input type="text" id="last-name" placeholder="Last Name" className="input" required />
            </div>

            <div className="item">
              <label htmlFor="phone" className="label">Phone</label>
              <input type="text" id="phone" placeholder="+44" className="input" />
            </div>

            <div className="item">
              <label htmlFor="email" className="label">
                <span>*</span> Email <span>Required</span>
              </label>
              <input type="email" id="email" placeholder="john@company.com" className="input" required />
            </div>

            <div className="item">
              <label htmlFor="case-type" className="label">
                <span>*</span> Case Type <span>Required</span>
              </label>
              <select name="issue" id="issue" className="select" required>
                <option value="technical" className="option">Technical issue</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="message" className="label">
                <span>*</span> Message <span>Required</span>
              </label>
              <textarea id="message" cols="30" rows="5" className="textarea" required></textarea>
            </div>

            <div className="button-container">
              <button type="submit" className="submit">Submit</button>
            </div>
          </form> */}
          <iframe src="https://oqct.my.salesforce-sites.com/jeevajoycontactsupport" width="100%" height="917" frameBorder='0' style={{maxWidth:'700px'}}>
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
