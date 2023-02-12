import React, { useState } from 'react';
import Header from '../layouts/Header';


const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Home Loan',
            title: 'Home Loan',
            content: <form class="row">
            <div class="col-lg-12">
              <input type="text" name="name" class="bg-light form-control mb-4" placeholder="Your Name" />
            </div>

            <div class="col-lg-12">
              <input type="number" name='phone' class="bg-light form-control mb-4" placeholder="Your Phone"/>
            </div>

            <div class="col-lg-12">
              <input type="text" name='email' class="bg-light form-control mb-4" placeholder="Your Email"/>
            </div>

            <div class="col-lg-12">
              <input type="number" name='salary' class="bg-light form-control mb-4" placeholder="Monthly salary"/>
            </div>

            <div class="col-lg-12 ml-3 mb-3">
            <p style={{fontSize:'1rem'}}>Job Type</p>
              <input type="radio" id="html" name="fav_language" value="Salary" />
              <label for="html">Salary</label>
              <input type="radio" id="css" name="fav_language" value="Business" />
              <label for="css">Business</label><br/>
          </div>

            <div class="col-lg-12">
              <textarea name="address" class="bg-light form-control mb-4" placeholder="Address"></textarea>
            </div>

            <div class="col-12">
              <button value="Submit" type="submit" class="btn btn-primary">Submit Now</button>
            </div>
          </form>
        },
        {
          id: 2,
          tabTitle: 'Personal Loan',
          title: 'Personal Loan',
          content:  <form class="row">
          <div class="col-lg-12">
            <input type="text" name="name" class="bg-light form-control mb-4" placeholder="Your Name" />
          </div>

          <div class="col-lg-12">
            <input type="number" name='phone' class="bg-light form-control mb-4" placeholder="Your Phone"/>
          </div>

          <div class="col-lg-12">
            <input type="text" name='email' class="bg-light form-control mb-4" placeholder="Your Email"/>
          </div>

          <div class="col-lg-12">
            <input type="number" name='salary' class="bg-light form-control mb-4" placeholder="Monthly salary"/>
          </div>


          <div class="col-lg-12 ml-3 mb-3">
          <p style={{fontSize:'1rem'}}>Department</p>
            <input type="radio" id="html" name="fav_language" value="Government" />
            <label for="html">Government</label>
            <input type="radio" id="css" name="fav_language" value="Private" />
            <label for="css">Private</label><br/>
        </div>

          <div class="col-lg-12">
            <textarea name="address" class="bg-light form-control mb-4" placeholder="Address"></textarea>
          </div>

          <div class="col-12">
            <button value="Submit" type="submit" class="btn btn-primary">Submit Now</button>
          </div>
        </form>
        },
        {
            id: 3,
            tabTitle: 'Secured Business Loan',
            title: 'Secured Business Loan',
            content:  <form class="row">
            <div class="col-lg-12">
              <input type="text" name="name" class="bg-light form-control mb-4" placeholder="Your Name" />
            </div>

            <div class="col-lg-12">
              <input type="number" name='phone' class="bg-light form-control mb-4" placeholder="Your Phone"/>
            </div>

            <div class="col-lg-12">
              <input type="text" name='email' class="bg-light form-control mb-4" placeholder="Your Email"/>
            </div>

            <div class="col-lg-12">
              <input type="number" name='salary' class="bg-light form-control mb-4" placeholder="Monthly salary"/>
            </div>

            <div class="col-lg-12 ml-3 mb-3">
            <p style={{fontSize:'1rem'}}>Job Type</p>
              <input type="radio" id="html" name="fav_language" value="Salary" />
              <label for="html">Salary</label>
              <input type="radio" id="css" name="fav_language" value="Business" />
              <label for="css">Business</label><br/>
          </div>

            <div class="col-lg-12">
              <textarea name="address" class="bg-light form-control mb-4" placeholder="Address"></textarea>
            </div>

            <div class="col-12">
              <button value="Submit" type="submit" class="btn btn-primary">Submit Now</button>
            </div>
          </form>
        },
        {
            id: 4,
            tabTitle: 'Unsecured Business Loan',
            title: 'Unsecured Business Loan',
            content:  <form class="row">
            <div class="col-lg-12">
              <input type="text" name="name" class="bg-light form-control mb-4" placeholder="Your Name" />
            </div>

            <div class="col-lg-12">
              <input type="number" name='phone' class="bg-light form-control mb-4" placeholder="Your Phone"/>
            </div>

            <div class="col-lg-12">
              <input type="text" name='email' class="bg-light form-control mb-4" placeholder="Your Email"/>
            </div>

            <div class="col-lg-12">
              <input type="text" name='businessname' class="bg-light form-control mb-4" placeholder="Business Name"/>
            </div>

            <div class="col-lg-12">
              <textarea name="address" class="bg-light form-control mb-4" placeholder="Address"></textarea>
            </div>

            <div class="col-12">
              <button value="Submit" type="submit" class="btn btn-primary">Submit Now</button>
            </div>
          </form>
        },
        {
          id: 5,
          tabTitle: 'Secured Overdraft Limit',
          title: 'Secured Overdraft Limit',
          content:  <form class="row">
          <div class="col-lg-12">
            <input type="text" name="name" class="bg-light form-control mb-4" placeholder="Your Name" />
          </div>

          <div class="col-lg-12">
            <input type="number" name='phone' class="bg-light form-control mb-4" placeholder="Your Phone"/>
          </div>

          <div class="col-lg-12">
            <input type="text" name='email' class="bg-light form-control mb-4" placeholder="Your Email"/>
          </div>

          <div class="col-lg-12 ml-3 mb-3">
          <p style={{fontSize:'1rem'}}>Agriculture Land 2 Biga</p>
            <input type="radio" id="yes" name="fav_language" value="Yes" />
            <label for="Yes">Yes</label>
            <input type="radio" id="no" name="fav_language" value="No" />
            <label for="No">No</label><br/>
        </div>

        <div class="col-lg-12 ml-3 mb-3">
          <p style={{fontSize:'1rem'}}>2 Year ITR</p>
            <input type="radio" id="yes" name="fav_language" value="Yes" />
            <label for="Yes">Yes</label>
            <input type="radio" id="no" name="fav_language" value="No" />
            <label for="No">No</label><br/>
        </div>

          <div class="col-lg-12">
            <textarea name="address" class="bg-light form-control mb-4" placeholder="Address"></textarea>
          </div>

          <div class="col-12">
            <button value="Submit" type="submit" class="btn btn-primary">Submit Now</button>
          </div>
        </form>
        },
        {
          id: 6,
          tabTitle: 'Unsecured Overdraft Limit',
          title: 'Unsecured Overdraft Limit',
          content:  <form class="row">
          <div class="col-lg-12">
            <input type="text" name="name" class="bg-light form-control mb-4" placeholder="Your Name" />
          </div>

          <div class="col-lg-12">
            <input type="number" name='phone' class="bg-light form-control mb-4" placeholder="Your Phone"/>
          </div>

          <div class="col-lg-12">
            <input type="text" name='email' class="bg-light form-control mb-4" placeholder="Your Email"/>
          </div>

          <div class="col-lg-12">
            <input type="text" name='businessname' class="bg-light form-control mb-4" placeholder="Business Name"/>
          </div>

          <div class="col-lg-12">
            <textarea name="address" class="bg-light form-control mb-4" placeholder="Address"></textarea>
          </div>

          <div class="col-12">
            <button value="Submit" type="submit" class="btn btn-primary">Submit Now</button>
          </div>
        </form>
        },
        {
          id: 7,
          tabTitle: 'Car Loan',
          title: 'Car Loan',
          content: <form class="row">
          <div class="col-lg-12">
            <input type="text" name="name" class="bg-light form-control mb-4" placeholder="Your Name" />
          </div>

          <div class="col-lg-12">
            <input type="number" name='phone' class="bg-light form-control mb-4" placeholder="Your Phone"/>
          </div>

          <div class="col-lg-12">
            <input type="text" name='email' class="bg-light form-control mb-4" placeholder="Your Email"/>
          </div>

          <div class="col-lg-12 ml-3 mb-3">
          <p style={{fontSize:'1rem'}}>Income</p>
            <input type="radio" id="Salary " name="fav_language" value="Salary " />
            <label for="Salary ">Salary </label>
            <input type="radio" id="Business" name="fav_language" value="Business" />
            <label for="Business">Business</label>
            <input type="radio" id="Agriculture" name="fav_language" value="Agriculture" />
            <label for="Agriculture">Agriculture</label>
        </div>

        <div class="col-lg-12 ml-3 mb-3">
          <p style={{fontSize:'1rem'}}>Loan Type</p>
            <input type="radio" id="NewCar" name="fav_language" value="NewCar" />
            <label for="NewCar">New Car</label>
            <input type="radio" id="UsedCar" name="fav_language" value="UsedCar" />
            <label for="UsedCar">Used Car</label><br/>
        </div>

          <div class="col-lg-12">
            <textarea name="address" class="bg-light form-control mb-4" placeholder="Address"></textarea>
          </div>

          <div class="col-12">
            <button value="Submit" type="submit" class="btn btn-primary">Submit Now</button>
          </div>
        </form>
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
          </div>
        </div>

          <div className='row mt-5 pt-5 mobile-flex'>
            <div className="col-md-6 pr-lg-5">
                    <img src="assets/images/about/form.png" className="img-fluid" alt="dashboard" data-aos="fade-right"/>
            </div>
            <div class="col-md-6 text-center">
                <div className='content'>
                    {tabs.map((tab, i) =>
                        <div key={i}>
                            {currentTab === `${tab.id}` && <div>
                              <p className='title'>{tab.title}</p>
                              <p>{tab.content}</p></div>}
                        </div>
                    )}
                </div>
            </div>
          </div>

            
        </div>
    );
}

export default Tabs;



