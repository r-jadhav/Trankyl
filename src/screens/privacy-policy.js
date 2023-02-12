import React, { useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Header from '../layouts/Header'
import Footer from '../layouts/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
import { bankLogo } from '../layouts/Data';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
export default function Home() {
  const [initialValues, setinitialValues] = React.useState({
    name:'',
    email:'',
    phone:'',
    salary:'',
    loanamt:'',
    address:'',
    created_date_time:new Date()
  })
  const [feedbackValues, setfeedbackValues] = React.useState({
    f_email:'',
    f_msg:''
  })
  React.useEffect(() => {
    AOS.init();
  
   
  }, [])
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }

]

  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
       errors.name = 'Name is required';
    }
    if (!values.email) {
       errors.email = 'Email is required';
    }
    if (!values.phone) {
       errors.phone = 'Phone number is required';
    }
    if (!values.salary) {
       errors.salary = 'Salary is required';
    }

   if (!values.address) {
    errors.address = 'Address is required';
 }
    return errors;
 }
 const fvalidate = (values) => {
  const errors = {};
  if (!values.f_email) {
     errors.f_email = 'Email is required';
  }
  if (!values.f_msg) {
     errors.f_msg = 'Message is required';
  }
 
  return errors;
}
const feedbackhandleSubmit = (values, setSubmitting) =>{
  createPost(values,'feedback');
}
 const handleSubmit = (values, setSubmitting) => {
  createPost(values,'enquiry');

}
const notify = () => toast("Thanks for contacting us we will contact you soon.");
  const createPost = (values,type)=> {
   
  if(type == 'enquiry'){
    axios
    .post('https://finedict.com:3003/addEnquiry'
    , {
      enq_email:values.email,
      enq_name:values.name,
      enq_contact_number:values.phone,
      enq_monthly_salary:values.salary,
      enq_location:values.address,
      enq_loan_amt:values.loanamt,
      created_date_time:values.created_date_time,
    })
    .then((response) => {
      if(response.status == 200){
        Swal.fire({
          title: 'Success',
          text: 'Thank you for contacting us. we will reach out soon.',
          icon: 'success',
          confirmButtonText: 'ok'
        })
        setTimeout(() => window.location.reload(), 3000);

      }else{
        Swal.fire({
          title: 'Error',
          text: 'Could not process your request now. Try again later.',
          icon: 'error',
          confirmButtonText: 'ok'
        })
        setTimeout(() => window.location.reload(), 3000);
      }
      
      
    });
  }else{
    axios
    .post('https://finedict.com:3003/addFeedback'
    , {
      f_email:values.f_email,
      f_msg:values.f_msg
    })
    .then((response) => {
      if(response.status == 200){
        Swal.fire({
          title: 'Success',
          text: 'Thank you for your valuable feedback.',
          icon: 'success',
          confirmButtonText: 'ok'
        })
        setTimeout(() => window.location.reload(), 3000);

      }else{
        Swal.fire({
          title: 'Error',
          text: 'Could not process your request now. Try again later.',
          icon: 'error',
          confirmButtonText: 'ok'
        })
        setTimeout(() => window.location.reload(), 3000);
      }
      
      
    });
  }
  }

  return (
    <>
<ToastContainer />

<section style={{marginTop:80}} className=" position-relative " id="about">
  <div className="container">
    <div className="row">
      <div class="col-md-12 pl-lg-12 col-sm-12">
        
          <h3 className="section-title"  data-aos-delay="200">Privacy Policy</h3>
          <p className="mb-2 fw-bold"  data-aos-delay="400">Privacy Policy for Fin Edict</p>

          <p className="mb-2"  data-aos-delay="400">At finedict.com, accessible from https://finedict.com/, one of our main priorities is the privacy of our visitors. 
This Privacy Policy document contains types of information that is collected and recorded by finedict.com and how we use it.</p>
<p className="mb-2"  data-aos-delay="400">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
<p className="mb-2"  data-aos-delay="400">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in finedict.com. This policy is not applicable to any information collected offline or via channels other than this website.</p>

<p className="mb-2 mt-3 fw-bold"  data-aos-delay="400">Consent</p>

<p className="mb-2"  data-aos-delay="400">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

<p className="mb-2 mt-3 fw-bold">Log Files</p>

<p className="mb-2"  data-aos-delay="400">Like most standard websites, we use log files. This information may include internet protocol (IP) addresses, browser type, internet service provider (ISP), 
referring/exit pages, platform type, date/time stamp, and number of clicks to analyze trends, administer the site, track user's movement in the aggregate, 
and gather broad demographic information for aggregate use. We may combine this automatically collected log information with other information we collect 
about you. We do this to improve services we offer to you, to improve marketing, analytics or site functionality.
</p>

<p className="mb-2 mt-3 fw-bold">Advertising Partners Privacy Policies</p>

<p className="mb-2"  data-aos-delay="400">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective 
advertisements and links that appear on finedict.com, which are sent directly to users' browser. They automatically receive your IP 
address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize 
the advertising content that you see on websites that you visit.</p>

<p className="mb-2"  data-aos-delay="400">Note that finedict.com has no access to or control over these cookies that are used by third-party advertisers.
</p>
<p className="mb-2 mt-3 fw-bold">Third Party Privacy Policies</p>

<p className="mb-2"  data-aos-delay="400">finedict.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective 
Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about 
how to opt-out of certain options.
</p>
<p className="mb-2"  data-aos-delay="400">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management 
with specific web browsers, it can be found at the browsers' respective websites.</p>

<p className="mb-2 mt-3 fw-bold">Controllers of Personal Information</p>

<p className="mb-2"  data-aos-delay="400">Your personal data will be stored and collected by FinEdict Insurance Brokers Private Limited.</p>

<p className="mb-2 mt-3 fw-bold">How we use your information</p>

<p className="mb-2"  data-aos-delay="400">We use the information we collect in following ways, including to:</p>

<p className="mb-2"  data-aos-delay="400">- Respond to queries or requests submitted by you.</p>

<p className="mb-2"  data-aos-delay="400">- Process orders or applications submitted by you.</p>

<p className="mb-2"  data-aos-delay="400">- Anticipate and resolve problems with any services supplied to you.</p>

<p className="mb-2"  data-aos-delay="400">- Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates
and other information relating to the Loan.</p>

<p className="mb-2"  data-aos-delay="400">- To send you information about promotions or offers from BANKs and NBFCs to the extent permissible under applicable laws. 
We might also tell you about new features or products.</p>

<p className="mb-2"  data-aos-delay="400">- To make our website and the services offered better. We may combine information we get from you with information about you
we get from our business partners or third parties as permissible under applicable laws.</p>

<p className="mb-2"  data-aos-delay="400">- To send you notices, communications, offer alerts relevant to your use of the Services offered on this Website.</p>

<p className="mb-2"  data-aos-delay="400">- Where we need to comply with a legal obligation as per applicable legal and regulatory framework.</p>

<p className="mb-2"  data-aos-delay="400">- As otherwise provided in this Privacy Policy.</p>

<p className="mb-2 mt-3 fw-bold">Information Sharing and Disclosure</p>

<p className="mb-2"  data-aos-delay="400">We may share your Information submitted on the Website to any third party/service provider/business partner without obtaining 
your prior consent in the following limited circumstances:</p>

1. When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms and Conditions; for complying with the applicable laws and regulations.

2. FinEdict shall transfer information about you in case FinEdict is acquired by or merged with another company.

3. Where we need to comply with a legal obligation as per applicable legal and regulatory framework.

<br/>
<p className="mb-2 mt-3 fw-bold">Links to Other Websites</p>

There might be other sites linked to finedict.com. Personal information that you provide to those sites are not our property. 
These affiliated sites may have different privacy practices and we encourage you to read their privacy policies of these website when you visit them.
<br/>

<p className="mb-2 mt-3 fw-bold">Changes in this Privacy Policy</p>

<p className="mb-5"  data-aos-delay="400">finedict.com reserves the right to change this policy from time to time, at its sole discretion. We may update this privacy policy
to reflect changes to our information practices. We encourage you to periodically review.</p>
          
      </div>
     
      
    </div>
  </div>
</section>

    </>
  )
}
