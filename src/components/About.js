import React from 'react'

function About({t}) {
  return (
    <>
        <section className="section pt-0" id="about">
            <div className="container">
            <div className="row">
                <div class="col-md-6 pr-lg-5 col-sm-12">
                
                    <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">{t("abouthead")}</h2>
                    <p className="mb-4" data-aos="fade-up" data-aos-delay="400">{t("abouttext1")}<br/>{t("abouttext2")}</p>
                    <ul className="list-unstyled">
                    <li className="d-flex mb-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="pr-3 pr-lg-5">
                        <i className="fa fa-check text-secondary bg-white shadow icon-sm"></i>
                        </div>
                        <div>
                        <p>{t("abouttextli1")}</p>
                        </div>
                    </li>
                    <li className="d-flex" data-aos="fade-up" data-aos-delay="550">
                        <div className="pr-3 pr-lg-5">
                        <i className="fa fa-check text-secondary bg-white shadow icon-sm"></i>
                        </div>
                        <div>
                        <p>{t("abouttextli2")}</p>
                        </div>
                    </li>
                    </ul>
                    <p className="mb-4" data-aos="fade-up" data-aos-delay="400">{t("abouttext3")}{t("abouttext4")}</p>
                </div>
                <div class="col-md-6 col-lg-5 col-sm-12">
                <img  src="assets/images/about/final-about.png" class="img-fluid img-about" alt="dashboard" data-aos="fade-left"/>
                </div>
                
            </div>
            </div>
        </section>
  </>
  )
}

export default About