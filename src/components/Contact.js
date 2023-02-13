import axios from "axios";
import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";

function Contact({ t }) {
  const [isSubmitting, setsubmitting] = React.useState(false);
  const [initialValues, feedbackValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    object: "",
    message: ""
  });
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.phone) {
      errors.phone = "Required";
    }
    if (!values.object) {
      errors.object = "Required";
    }
    return errors;
  };
  const handleSubmit = (values, setSubmitting) => {
    axios
        .post("https://new-api.trankyl.me/api/contactUs/store", {
          email: values.email,
          name: values.name,
          phone: values.phone,
          title: values.object,
          message: values.message
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
  };
  return (
    <>
      <section class="section bg-light py-5">
        <div class="container" id="contact">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="section-title mb-1">{t("contactshead")}</h2>
              <p class="subtitle mb-4">{t("contactssubhead")}</p>
            </div>
            <div class="col-12 col-lg-8 m-auto text-center">
              <Formik
                initialValues={initialValues}
                validate={(values) => validate(values)}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmit(values,setSubmitting);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) => (
                  <form className="row" onSubmit={handleSubmit}>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        name="name"
                        class="form-control mb-4"
                        placeholder={t("name")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <label for="amount">
                        <span style={{ color: "red", marginLeft: 20 }}>
                          {errors.name && touched.name && errors.name}
                        </span>
                      </label>
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        name="email"
                        class="form-control mb-4"
                        placeholder={t("email")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <label for="amount">
                        <span style={{ color: "red", marginLeft: 20 }}>
                          {errors.email && touched.email && errors.email}
                        </span>
                      </label>
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        name="phone"
                        class="form-control mb-4"
                        placeholder={t("phone")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      <label for="amount">
                        <span style={{ color: "red", marginLeft: 20 }}>
                          {errors.phone && touched.phone && errors.phone}
                        </span>
                      </label>
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        name="object"
                        class="form-control mb-4"
                        placeholder={t("object")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.object}
                      />
                      <label for="amount">
                        <span style={{ color: "red", marginLeft: 20 }}>
                          {errors.object && touched.object && errors.object}
                        </span>
                      </label>
                    </div>

                    <div class="col-12">
                      <textarea
                        name="message"
                        class="form-control mb-4"
                        placeholder={t("message")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      ></textarea>
                      <label for="amount">
                        <span style={{ color: "red", marginLeft: 20 }}>
                          {errors.message && touched.message && errors.message}
                        </span>
                      </label>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">
                        {t("send")}
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
