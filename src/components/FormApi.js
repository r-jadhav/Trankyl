import React from 'react'
import axios from 'axios'

function FormApi() {

  function createPost() {
    axios
      .post('http://68.183.139.53:3000/addEnquiry'
      , {
        enq_email:"test",
        enq_name:"test",
        enq_contact_number:"test",
        enq_monthly_salary:"test",
        enq_location:"test",
        enq_loan_amt:"test",
        created_date_time:"test",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  return (
    <>
     
    </>
  )
}

export default FormApi