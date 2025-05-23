import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault()

  const nameregex = /^[A-Za-z\s]+$/;
  if(!formData.name || !formData.email || !formData.message){
    alert("please fill out all fields")
    return;

  }
  if(!nameregex.test(formData.name)){
       alert("Plesse Enter a valid name Letters only")
       return;
  }
  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
  .then(res => res.json())
  .then(data => {
    if (data.message) {
      setSubmitted(true);
    } else {
      alert("Something went wrong");
    }
  })
  .catch(error => {
    console.error("Error submitting contact form: ", error);
    alert("Server error, please try again later.");
  });


  }
  return (
    <div className='container mt-4 d-flex flex-column justify-content-center bg-dark text-white'>
      <h2 className='mb-1 text-center pt-4'>Contact me</h2>
      {submitted ? (
        <div className='alert alert-success'>Thank you for contacting me!</div>
      ) : (
        <div className='container w-50 p-4'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label' htmlFor="name">Name</label>
              <input
                type="text"
                className='form-control'
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label' htmlFor="message">Message</label>
              <textarea
                className='form-control'
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='text-center mt-4'>
              <button className='btn btn-light text-dark' type="submit">Send</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Contact;
