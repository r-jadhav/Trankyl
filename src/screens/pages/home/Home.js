import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from "../../../layouts/Header";
import Footer from "../../../layouts/Footer";
import About from "../../../components/About";
import Services from "../../../components/Services";
import DownloadApp from "../../../components/DownloadApp";
import Contact from "../../../components/Contact";
import { bankLogo } from "../../../layouts/Data";
import AOS from "aos";
import Modal from "react-modal";
import "aos/dist/aos.css";
import axios from "axios";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "react-tabs/style/react-tabs.css";
import { FaTiktok } from "react-icons/fa";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Home() {
  const { t } = useTranslation();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "1 !important",
    },
  };
  React.useEffect(() => {
    AOS.init();
    window.scrollTo({ top: 0, behavior: "smooth" });
    getBanner();
  }, []);

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const validate = (values) => {
    console.log(values);
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    if (!values.salary) {
      errors.salary = "Salary is required";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }
    return errors;
  };
  const createPost = (values, type) => {
    if (type == "enquiry") {
      axios
        .post("https://finedict.com:3003/addEnquiry", {
          enq_email: values.email,
          enq_name: values.name,
          enq_contact_number: values.phone,
          enq_monthly_salary: values.salary,
          enq_location: values.address,
          enq_loan_amt: values.loanamt,
          created_date_time: values.created_date_time,
        })
        .then((response) => {
          if (response.status == 200) {
            Swal.fire({
              title: "Success",
              text: "Thank you for contacting us. we will reach out soon.",
              icon: "success",
              confirmButtonText: "ok",
            });
            setTimeout(() => window.location.reload(), 3000);
          } else {
            Swal.fire({
              title: "Error",
              text: "Could not process your request now. Try again later.",
              icon: "error",
              confirmButtonText: "ok",
            });
            setTimeout(() => window.location.reload(), 3000);
          }
        });
    } else {
      axios
        .post("https://finedict.com:3003/addFeedback", {
          f_email: values.f_email,
          f_msg: values.f_msg,
        })
        .then((response) => {
          if (response.status == 200) {
            Swal.fire({
              title: "Success",
              text: "Thank you for your valuable feedback.",
              icon: "success",
              confirmButtonText: "ok",
            });
            setTimeout(() => window.location.reload(), 3000);
          } else {
            Swal.fire({
              title: "Error",
              text: "Could not process your request now. Try again later.",
              icon: "error",
              confirmButtonText: "ok",
            });
            setTimeout(() => window.location.reload(), 3000);
          }
        });
    }
  };
  const [youtube, setYoutube] = React.useState("");
  const [modalVsib, setModalVisible] = useState(false);
  const [banner, setBanner] = React.useState([]);
  const [values, feedbackValues] = useState({
    name: "",
    email: "",
    phone: "",
    object: "",
    message: "",
  });
  const getBanner = () => {
    axios
      .get("https://new-api.trankyl.me/api/fetch-slider-by-lang")
      .then((res) => {
        setBanner(res.data.data);
      });
  };
  const feedbackhandleSubmit = (val, sub) => {};
  return (
    <>
      {/* <div className="preloader">
      <img src="assets/images/preloader.gif" alt="preloader" className="img-fluid" />
  </div> */}

      <Header t={t} />
      <ToastContainer />

      <Carousel showThumbs={false} autoPlay={true} interval={3000}>
        {banner &&
          banner.map((bann) => (
            <div>
              <img src={`https://new-api.trankyl.me/${bann.banner_img}`} />
              <div className="bannerHeading">
                <h2 className="text-white position-relative">
                  {" "}
                  <span class="B">Trankyl</span>{" "}
                </h2>
                <p className="text-white mb-4">{bann.title}</p>
                <ul className="list-inline">
                  <li className="list-inline-item mx-1 my-2">
                    <button
                      onClick={() => {
                        var scrollDiv =
                          document.getElementById("DownloadApp").offsetTop;
                        window.scrollTo({
                          top: scrollDiv - 50,
                          behavior: "smooth",
                        });
                      }}
                      className="btn btn-primary"
                    >
                      Download App
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
      </Carousel>
      {/* <section className="hero-area hero-area-lg position-relative" id="banner">
  <div className="container">
  <div className="row align-items-center">
      <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
        <h2 className="text-white position-relative"> <span class="B">Trankyl</span> </h2>
        <p className="text-white mb-4" style={{width:'70%'}}>
        {t('about')}</p>
        <ul className="list-inline">
          <li className="list-inline-item mx-1 my-2">
            <button onClick={()=>{
              var scrollDiv = document.getElementById("DownloadApp").offsetTop;
              window.scrollTo({ top: scrollDiv - 50, behavior: 'smooth'});
            }} className="btn btn-primary">Download App</button>
             
          </li>
        </ul>
      </div>
      <div className="col-lg-6 banner-img">
      </div>
    </div>
  </div>
</section> */}

      
      <About t={t} />
      <DownloadApp t={t} />
      <Services t={t} />
      {/* Slider */}
      <section
        style={{ paddingTop: 50, paddingBottom: 50 }}
        className="position-relative section"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
                <div class="col-12 text-center">
                  <h2
                    className="section-title"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                  {t('clientssubhead')}
                  </h2>

                </div>
                <div className="blog-slider">
                  <Slider {...settings}>
                    {bankLogo.map((bankLogo) => {
                      return (
                        <div className="px-3 mb-5">
                          <div className="card border-0 shadow rounded-xs">
                            <img
                              src={bankLogo.img}
                              className="img-fluid card-img-top"
                              alt="post-thumb"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      <section
        style={{ paddingTop: 0 }}
        className="position-relative Choose"
        id="whyChoose"
      >
        <div className="container">
          <div className="row ">
            <div class="col-12 text-center">
              <h2
                class="section-title aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {t("valuessubhead")}
              </h2>
            </div>

            <div className="row mb-5">
              <div
                className="col-lg-4 col-sm-6 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="card border-0 shadow rounded-xs pt-5">
                  <div className="card-body">
                    <i className="fa fa-users icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">{t("human")}</h4>
                    <p>{t("humantext")}</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="card border-0 shadow rounded-xs pt-5">
                  <div className="card-body">
                    <i className="fa fa-globe icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">{t("respect")}</h4>
                    <p>{t("respecttext")}</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="card border-0 shadow rounded-xs pt-5">
                  <div className="card-body">
                    <i className="fa fa-line-chart icon-lg icon-orange icon-bg-orange icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">{t("quality")}</h4>
                    <p>{t("qualitytext")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div
                className="col-lg-4 col-sm-6 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="card border-0 shadow rounded-xs pt-5">
                  <div className="card-body">
                    <i className="fa fa-smile-o icon-lg icon-green icon-bg-green icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">{t("satisfaction")}</h4>
                    <p>{t("satisfactiontext")}</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="card border-0 shadow rounded-xs pt-5">
                  <div className="card-body">
                    <i className="fa fa-object-ungroup icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">{t("transparency")}</h4>
                    <p>{t("transparencytext")}</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="card border-0 shadow rounded-xs pt-5">
                  <div className="card-body">
                    <i className="fa fa-handshake-o icon-lg icon-cyan  icon-bg-cyan  icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3">{t("trust")}</h4>
                    <p>{t("trusttext")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/dot/dot-1.png"
          className="img-fluid feature-bg-shape-1"
          alt="background-dots"
        />
      </section>

      <section class="wide-40">
        <div class="container" id="video">
          <div class="row">
            <div class="col-12 text-center">
              <p class="subtitle">{t("videoshead")}</p>
              <h2 class="section-title">{t("videossubhead")}</h2>
            </div>
            <div class="col-md-6 pr-lg-4 mb-4 mb-md-0">
              <div
                class="position-relative aos-init aos-animate"
                data-aos="fade-right"
              >
                {/* <img src="assets/images/about/final-about.png" class="img-fluid rounded-sm" alt="video-bg"/> */}
                <div class="  rounded-sm">
                  <img
                    src="assets/images/video/first.png"
                    class="img-fluid rounded-sm"
                    alt="video-thumb"
                  />

                  <span
                    class="venobox play-icon icon-center vbox-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setYoutube("https://www.youtube.com/embed/zPsAyC2bdr8");
                      setModalVisible(true);
                    }}
                  >
                    <i class="fa fa-play  bg-black rounded-circle"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 pr-lg-4 mb-4 mb-md-0">
              <div
                class="position-relative aos-init aos-animate"
                data-aos="fade-right"
              >
                {/* <img src="assets/images/about/final-about.png" class="img-fluid rounded-sm" alt="video-bg"/> */}
                <div class="  rounded-sm">
                  <img
                    src="assets/images/video/second.png"
                    class="img-fluid rounded-sm"
                    alt="video-thumb"
                  />

                  <span
                    class="venobox play-icon icon-center vbox-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setYoutube("https://www.youtube.com/embed/M7ovin92OcU");
                      setModalVisible(true);
                    }}
                  >
                    <i class="fa fa-play  bg-black rounded-circle"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact
        feedbackValues={feedbackValues}
        t={t}
        validate={validate}
        feedbackhandleSubmit={feedbackhandleSubmit}
      />

      <section class="section map-list">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-8 rounded-xs mobile-height mb-5 mb-lg-0"
              id="map_canvas"
              data-latitude="51.507351"
              data-longitude="-0.127758"
              data-marker="images/marker.png"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.4407316357!2d1.165811!3d6.205449000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95715ea56673f710!2sTrankyl!5e0!3m2!1sen!2sin!4v1676117746413!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="col-lg-4">
              <div class="p-5 rounded-xs shadow">
                {/* <h3 class="text-dark">Keep in Touch</h3>
          <ul className="list-inline social-icons my-5">
              <li className="list-inline-item"><a href="https://www.facebook.com/trankyl/" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="https://vm.tiktok.com/ZMYRkj1ht/" target="_blank"><i className="fa"><FaTiktok /></i></a></li>
              <li className="list-inline-item"><a href="https://www.youtube.com/@trankyl9686/videos" target="_blank"><i className="fa fa-youtube"></i></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/trankyl_me/?hl=en" target="_blank"><i className="fa fa-instagram"></i></a></li>
            </ul> */}
                <ul class="list-unstyled">
                  <li
                    class="d-flex mb-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i class="fa fa-map-o icon-primary"></i>
                    <div class="pl-3">
                      <h6 class="text-dark">Address</h6>
                      <ul class="list-unstyled">
                        <li>
                          Amadahome' district, near CAPAmadahome' station, Lome'
                          -Togo
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    class="d-flex mb-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i class="fa fa-envelope-o icon-primary"></i>
                    <div class="pl-3">
                      <h6 class="text-dark">Email</h6>
                      <ul class="list-unstyled">
                        <li>info@trankyl.me</li>
                      </ul>
                    </div>
                  </li>
                  <li
                    class="d-flex mb-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i class="fa fa-phone icon-primary"></i>
                    <div class="pl-3">
                      <h6 class="text-dark">Mobile</h6>
                      <ul class="list-unstyled">
                        <li>+228 92 11 90 88</li>
                        <li>+228 90 80 91 91</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        onRequestClose={() => {
          setModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        isOpen={modalVsib}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <iframe
          width="560"
          height="315"
          src={youtube}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Modal>
      <Footer t={t} />
    </>
  );
}
