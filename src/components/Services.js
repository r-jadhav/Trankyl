import React from "react";
import axios from "axios";
import i18next from "i18next";
import Modal from "react-modal";
import { Formik } from "formik";
import Swal from "sweetalert2";

const  Services =({t})=> {
  const [category, setCategory] = React.useState();
  const [subcategory, setSubCategory] = React.useState();
  const [modalVsib, setModalVisible] =  React.useState(false);
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
  const [isSubmitting, setsubmitting] = React.useState(false);
  const [scategory, selectedCategory] = React.useState("")
  const [initialValues, feedbackValues] = React.useState({
    we_name: "",
    we_phone: "",
    we_days: "",
    we_message: "",
    we_created_date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
    we_subcategory:""

  });
  const validate = (values) => {
    const errors = {};
    if (!values.we_name) {
      errors.we_name = "Required";
    }
    if (!values.we_phone) {
      errors.we_phone = "Required";
    }
    if (!values.we_days) {
      errors.we_days = "Required";
    }
    if (!values.we_message) {
      errors.we_message = "Required";
    }
    return errors;
  };
  const handleSubmit = (values, setSubmitting) => {
    values.we_subcategory = scategory
    axios
        .post("https://new-api.trankyl.me/api/enquiry/store", values)
        .then((response) => {
          console.log(values)
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
  React.useEffect(() => {

    axios
      .get("https://new-api.trankyl.me/api/get-categories/"+i18next.language)
      .then((res) => {
        setCategory(res.data.data);
        getSubcategory('1')
      });
  }, []);
  const getSubcategory = (category_id) => {

    axios
      .post(
        `https://new-api.trankyl.me/api/get-sub-categories`,{
          "city_id":"2",
       "lang":"en",
       "category_id":category_id
       }
      )
      .then((res) => {
        setSubCategory(res.data.data);
        console.log(res.data.data);
      });
  };
  
  return (
    <div id="services">
      <section id="tabs-2" className="wide-40 tabs-section division">
        <div className="container">
          <div className="row">
            <div class="col-12 text-center">
              <h2
                className="section-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
               {t('serviceshead')}
              </h2>
              <p className="mb-4" data-aos="fade-up" data-aos-delay="400">
              {t('servicessubhead')}
              </p>
            </div>

            <div className="col-lg-3 bg-light">
              <div id="tabs-nav" className="list-group text-center clearfix">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  {category &&
                    category.map((e) => {
                      return (
                        <li onClick={()=>{
                            setSubCategory()
                            getSubcategory(e.cat_id)
                        }} key={e.cat_image} className="nav-item icon-xs">
                          <a
                            className="nav-link"
                            id="tab11-list"
                            data-toggle="pill"
                            href={e.cat_isactive}
                            // "#tab-11"
                            role="tab"
                            aria-controls="tab-11"
                            aria-selected="true"
                          >
                            {/* {e.cat_image} */}
                            <img
                              width={50}
                              height='auto'
                              src={`https://new-api.trankyl.me/${e.cat_image}`}
                            />
                            &nbsp; {i18next.language == 'en' ?  e.cat_name_en : e.cat_name_fr}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab-11"
                  role="tabpanel"
                  aria-labelledby="tab11-list"
                >
                  <section class="section-lg-bottom">
                    <div class="container">
                      <div class="row">
                        {subcategory &&
                          subcategory.map((res) => (
                            <div
                              class="col-lg-4 col-sm-6 mb-5 mt-4 mb-lg-0 team-member d-flex"
                              data-aos="fade-up"
                              data-aos-delay="00"
                              onClick={()=>{
                                selectedCategory(i18next.language == 'en' ? res.subcat_name_en : res.subcat_name_fr)
                                setModalVisible(true)
                              }}
                            >
                              <div class="text-center shadow card py-3 border-0 rounded-sm mt-10 flex-container">
                                <div class="card-body column">
                                  {/* <i class="fa fa-desktop icon-lg icon-bg-square mb-5 icon-primary"></i> */}
                                 <div style={{position:'relative'}}>
                                 <img width={'100%'}
                              height={150}
                              src={`https://new-api.trankyl.me/${res.subcat_image}`} /> 
                                  <h4 class="mb-3 text-white text-align-center" 
                                  style={{position:'absolute',bottom:0,alignSelf:'center',width:'100%'}}>
                                    {i18next.language == 'en' ? res.subcat_name_en : res.subcat_name_fr}</h4>
                                 </div>
                                  <p style={{marginTop:40}}>
                                    {i18next.language == 'en' ? res.subcat_desp_en : res.subcat_desp_fr}
                                  </p>
                                </div>
                                <div class="team-member-content p-4">
                                    <h5 class="team-member-name text-dark border border-dark p-3">Enqiure Now</h5>
                                </div>
                                
                              </div>
                              
                            </div>
                          ))}
                      </div>
                    </div>
                  </section>
                </div>

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
                  <form className="row mt-15 mobile-form" style={{width:500}} onSubmit={handleSubmit}>
                     <div class="col-12 text-center">
              <h2 class="section-title mb-1">{t("contactshead")}</h2>
              <p class="subtitle mb-4">{t("contactssubhead")}</p>
            </div>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        name="we_name"
                        class="form-control"
                        placeholder={t("name")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.we_name}
                      />
                      <label for="amount">
                        <span style={{ color: "red", marginLeft: 20 }}>
                          {errors.we_name && touched.we_name && errors.we_name}
                        </span>
                      </label>
                    </div>
                   
                    <div class="col-lg-6">
                      <input
                        type="number"
                        name="we_phone"
                        class="form-control"
                        placeholder={t("phone")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.we_phone}
                      />
                      <label for="amount">
                        <span style={{ color: "red", marginLeft: 20 }}>
                          {errors.we_phone && touched.we_phone && errors.we_phone}
                        </span>
                      </label>
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="number"
                        name="we_days"
                        class="form-control"
                        placeholder={t("Number of days")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.we_days}
                      />
                      <label for="amount">
                        <span style={{ color: "red", marginLeft: 20 }}>
                          {errors.we_days && touched.we_days && errors.we_days}
                        </span>
                      </label>
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        name="we1_days"
                        class="form-control"
                        placeholder={t("category")}
                       disabled
                        value={scategory}
                      />
                      <label for="amount">
                        
                      </label>
                    </div>
                    
                    <div class="col-12">
                      <textarea
                        name="we_message"
                        class="form-control"
                        placeholder={t("message")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.we_message}
                      ></textarea>
                      <label for="amount">
                        <span style={{ color: "red", marginLeft: 20 }}>
                          {errors.we_message && touched.we_message && errors.we_message}
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
      
             
             
            
       
      
      </Modal>
    </div>
  );
}

export default Services;
