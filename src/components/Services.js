import React from "react";
import axios from "axios";
import i18next from "i18next";

function Services({t}) {
  const [category, setCategory] = React.useState();
  const [subcategory, setSubCategory] = React.useState();

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
      .get(
        `https://new-api.trankyl.me/api/get-sub-categories/${category_id}/${i18next.language}`
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
                              height={40}
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
                              class="col-lg-4 col-sm-6 mb-5 mt-4 mb-lg-0 team-member"
                              data-aos="fade-up"
                              data-aos-delay="00"
                            >
                              <div class="text-center shadow card py-3 border-0 rounded-sm mt-10">
                                <div class="card-body">
                                  {/* <i class="fa fa-desktop icon-lg icon-bg-square mb-5 icon-primary"></i> */}
                                 <div style={{position:'relative'}}>
                                 <img width={'100%'}
                              height={150}
                              src={`https://new-api.trankyl.me/${res.subcat_image}`} /> 
                                  <h4 class="mb-3 text-white text-align-center" 
                                  style={{position:'absolute',bottom:0,alignSelf:'center',width:'100%'}}>{i18next.language == 'en' ? res.subcat_name_en : res.subcat_name_fr}</h4>
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
    </div>
  );
}

export default Services;
