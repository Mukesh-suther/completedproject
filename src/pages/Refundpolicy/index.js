import React, {useEffect} from 'react';

const Refundpolicy = () => {
  useEffect(() => {
    document.title = "Jeeva Joy | Refund Policy | Kids Exercise Videos App | Fun Fitness for Children on Mobile, Smart TV, & Web";
  }, []);
  return (
    <div className="page-content">
      <section>
        <h1 style={{ margin: '0px', paddingBottom: '14px', textAlign: 'start', fontSize: '34px' }}>Refund Policy</h1>
        <h6>
          At JeevaJoy, we want you to be completely satisfied with your purchase. If you are not satisfied with your purchase, we offer a full refund within 30 days of your purchase date.
          <br /><br />
          To be eligible for a refund, you must have purchased a subscription to our website and must have used it for less than 30 days. If you meet these criteria and would like to request a refund, please contact us at support@jeevajoy.com
          <br /><br />
          Please note that we do not offer refunds for purchases made more than 30 days ago or for purchases made through third-party websites. We also do not offer refunds for purchases made through our mobile app.
          <br /><br />
          If you have any questions or concerns about our refund policy, please contact us at support@jeevajoy.com
        </h6>
      </section>
    </div>
  );
};

export default Refundpolicy