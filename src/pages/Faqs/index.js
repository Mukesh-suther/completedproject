import React, { useState, useEffect } from 'react';
import circleimg from './../../assets/images/circle@2x.jpg'
import './faqs.css'
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title} <span className="opensign">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const Faqs = () => {
  useEffect(() => {
    document.title = "Jeeva Joy | Faqs | Kids Exercise Videos App | Fun Fitness for Children on Mobile, Smart TV, & Web";
  }, []);
  return (
    <div className="page-content">
      <section style={{ padding: '0px' }}>
        <div className="columns-main">
          <div className="cols">
            <div className="img_main">
              <img src={circleimg} alt="circleimg" width="100%" />
            </div>
          </div>
          <div className="cols faq_section">
            <h1 className="faq-title">Have a question?</h1>
            <div className="faqs_main">
              <div className="accordion">
                <AccordionItem title="What is Jeeva Joy?">
                  <p>JeevaJoy is a streaming service that offers a wide variety of Online Exercise.</p>
                  <p>You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover!</p>
                </AccordionItem>
                <AccordionItem title="How much does JeevaJoy Cost?">
                  <p>Watch JeevaJoy on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6 to $10 a month. No extra costs, no contracts.</p>
                </AccordionItem>
                <AccordionItem title="Where can I watch?">
                  <p>Watch anywhere, anytime. Sign in with your JeevaJoy account to watch instantly on the web at JeevaJoy.com from your personal computer or on any internet-connected device that offers the JeevaJoy app, including smart TVs, smartphones, tablets, and streaming media players.</p>
                </AccordionItem>
                <AccordionItem title="How do I cancel?">
                  <p>JeevaJoy is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.</p>
                </AccordionItem>
                <AccordionItem title="Is JeevaJoy good for children?">
                  <p>The JeevaJoy Children's experience is included in your membership to give parents control while children enjoy family-friendly content in their own space.</p>
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
