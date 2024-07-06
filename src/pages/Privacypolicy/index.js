import React, {useEffect} from 'react';

const Privacypolicy = () => {
  useEffect(() => {
    document.title = "Jeeva Joy | Privacy Policy | Kids Exercise Videos App | Fun Fitness for Children on Mobile, Smart TV, & Web";
  }, []);
  return (
    <div className="page-content">
      <section>
        <h1 style={{ margin: '0px', paddingBottom: '14px', textAlign: 'start', fontSize: '34px' }}>Privacy Policy</h1>
        <h6>
          At JeevaJoy, we take your privacy seriously. We are committed to protecting the personal information of our users and ensuring that their data is kept safe and secure. This privacy policy outlines the types of information we collect, how we use it, and how we protect it.
        </h6>
        <h1 style={{ margin: '0px', paddingBottom: '14px', textAlign: 'start', fontSize: '34px' }}>Information We Collect</h1>
        <h6>
          We collect personal information from our users when they register on our website or subscribe to our newsletter. This information may include their name, email address, and other contact details. We also collect non-personal information such as IP addresses, browser types, and device types.
        </h6>
        <h1 style={{ margin: '0px', paddingBottom: '14px', textAlign: 'start', fontSize: '34px' }}>How We Use Your Information</h1>
        <h6>
          We use the information we collect to provide our users with a better experience on our website. This includes personalizing their experience, sending them relevant content, and improving our services. We may also use the information to communicate with our users about new products, services, or promotions.
        </h6>
        <h1 style={{ margin: '0px', paddingBottom: '14px', textAlign: 'start', fontSize: '34px' }}>How We Protect Your Information</h1>
        <h6>
          We take the security of our users’ information seriously. We use industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of data. We also restrict access to personal information to only those employees who need it to perform their job functions.
        </h6>
        <h1 style={{ margin: '0px', paddingBottom: '14px', textAlign: 'start', fontSize: '34px' }}>Third-Party Disclosure</h1>
        <h6>
          We do not sell, trade, or otherwise transfer our users’ personal information to third parties. However, we may share non-personal information with third-party service providers who help us operate our website or provide our services.
        </h6>
        <h1 style={{ margin: '0px', paddingBottom: '14px', textAlign: 'start', fontSize: '34px' }}>Cookies</h1>
        <h6>
          We use cookies to enhance the user experience on our website. Cookies are small text files that are stored on a user’s device when they visit our website. They help us remember user preferences and provide a more personalized experience.
        </h6>
        <h1 style={{ margin: '0px', paddingBottom: '14px', textAlign: 'start', fontSize: '34px' }}>Changes to This Privacy Policy</h1>
        <h6>
          We reserve the right to update this privacy policy at any time. We will notify our users of any changes by posting the new policy on our website.
          <br /><br />
          If you have any questions or concerns about our privacy policy, please contact us at support@jeevajoy.com
        </h6>
      </section>
    </div>
  );
};

export default Privacypolicy;
