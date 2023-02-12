import React from 'react'

function Contact({t}) {
  return (
    <>
    
        <section class="section bg-light py-5">
        <div class="container" id="contact">
            <div class="row">
            <div class="col-12 text-center">
                <h2 class="section-title mb-1">{t("contactshead")}</h2>
                <p class="subtitle mb-4">{t("contactssubhead")}</p> 
            </div>
            <div class="col-12 text-center">
                <form action="#" class="row">
                <div class="col-lg-6">
                    <input type="text" class="form-control mb-4" placeholder={t("name")}/>
                </div>
                <div class="col-lg-6">
                    <input type="text" class="form-control mb-4" placeholder={t("email")}/>
                </div>
                <div class="col-lg-6">
                    <input type="number" class="form-control mb-4" placeholder={t("phone")}/>
                </div>
                <div class="col-lg-6">
                    <input type="text" class="form-control mb-4" placeholder={t("object")}/>
                </div>

                <div class="col-12">
                    <textarea name="message" class="form-control mb-4" placeholder={t("message")}></textarea>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">{t("send")}</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>

    </>
  )
}

export default Contact