import React from 'react'

function DownloadApp({t}) {
  return (
    <>
        <section class="bg-triangles bg-gradient-primary overflow-hidden" id="DownloadApp">
            <div class="container">
                <div class="row" style={{alignItems:'center'}}>
                <div class="col-lg-6 text-center text-lg-left">
                    <div class="section">
                    <h2 class="section-title text-dark" data-aos="fade-up">Download Trankyl App Now</h2>
                    <p class="text-dark mb-4" data-aos="fade-up" data-aos-delay="200">{t("booking")}</p>
                    <ul class="list-inline">
                        <li class="list-inline-item mb-3 mb-lg-0">
                        <a class="btn btn-white aos-init aos-animate" href="https://play.google.com/store/apps/details?id=com.trankyl.client" data-aos="zoom-in" data-aos-delay="400"><img src="assets/images/icon/001-google-play.png" class="img-fluid mr-2" alt=""/>Google Play</a>
                        </li>
                        <li class="list-inline-item">
                        <a class="btn btn-outline-white aos-init aos-animate" href="https://apps.apple.com/fr/app/trankyl/id1547815509" data-aos="zoom-in" data-aos-delay="500"><i class="fa fa-apple mr-2"></i> app store</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="col-lg-6 align-self-end" data-aos="fade-left" data-aos-delay="600">
                    <img src="assets/images/Gold_Real_Estate.png" class="img-fluid w-100 mt-5" alt="mobile-screen"/>
                </div>
                </div>
            </div>
        </section>

        <section class="bg-triangles bg-light overflow-hidden">
            <div class="container">
                <div class="row" style={{alignItems:'center'}}>
                <div class="col-lg-6 align-self-end" data-aos="fade-left" data-aos-delay="600">
                    <img src="assets/images/Gold_Real_Estate1.png" class="img-fluid w-100 mt-5" alt="mobile-screen"/>
                </div>
                <div class="col-lg-6 text-center text-lg-right">
                    <div class="section">
                    <h2 class="section-title text-dark" data-aos="fade-up">Download Trankyl Heros App Now</h2>
                    <p class="text-dark mb-4" data-aos="fade-up" data-aos-delay="200">For daily updates and easy access download our app.</p>
                    <ul class="list-inline">
                        <li class="list-inline-item mb-3 mb-lg-0">
                        <a class="btn btn-white aos-init aos-animate" href="https://play.google.com/store/apps/details?id=com.trankyl.vhero&hl=en_IN&gl=US" data-aos="zoom-in" data-aos-delay="400"><img src="assets/images/icon/001-google-play.png" class="img-fluid mr-2" alt=""/>Google Play</a>
                        </li>
                        <li class="list-inline-item">
                        <a class="btn btn-white aos-init aos-animate" href="https://apps.apple.com/us/app/trankyl-heros/id1548459730" data-aos="zoom-in" data-aos-delay="500"><i class="fa fa-apple mr-2"></i> app store</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default DownloadApp