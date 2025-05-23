import React from 'react'
import profileImg from '../assets/Profile.jpeg'


function About(){
    return(
       <section id="about">
     
      <div className='container'>
          <div className='row align-items-center g-5'>
            <div className='col-md-6 text-center mb-3 text-md-start' data-aos='fade-right'>
            <p><strong>Location:</strong> Hyderabad</p>
              <p><strong>Phone:</strong> 6303268572 / 7993514391</p>
          <p><strong>Email:</strong> revathiparisarla@gmail.com</p>
          <p><strong>Age:</strong> 25</p>
           <p><strong>
            Detail-oriented and enthusiastic Front-End Developer with 1 year of hands-on experience in building
            responsive, user-friendly web applications. Proficient in HTML, CSS, JavaScript, and React.js. Passionate about creating seamless user experiences and writing clean, maintainable code.
          </strong></p>
        </div>
            
        <div className='col-md-6' data-aos='fade-left'>
        
   <div className='mb-4'>
    <h4>💼 Work Experience</h4>
     <p><strong>Front-End Developer</strong></p>
          <p> Thrivfull Technologies Pvt. Ltd. (Feb 2024 – Present)</p>
        <ul>
         
          <ul>
            <li>Developed responsive interfaces using HTML5, CSS3, JavaScript, and React.js</li>
            <li>Styled components using Bootstrap and custom CSS</li>
            <li>Integrated RESTful APIs for dynamic data</li>
            <li>Ensured mobile responsiveness and cross-browser compatibility</li>
            <li>Used Git for version control and collaborated with teams</li>
          </ul>
        </ul>
   </div>
   
   </div>
   </div>
      </div>
   <hr/>
 <div className='container'>
     <div className='row align-items-center g-5'>
  <div className='col-md-6' data-aos='fade-right'>
    <div className='mb-4'>
      <h4>🧑‍💻 Career Summary</h4>
      <p>
        Experienced in working with RESTful APIs, version control (Git), and UI libraries like Bootstrap and Material-UI.
        Strong grasp of responsive design and cross-browser compatibility.
      </p>
    </div>
  </div>

  <div className='col-md-6' data-aos='fade-left'>
    <div className='mb-4'>
      <h4>🎓 Education</h4>
      <p><strong>B.Com – Computer Applications,</strong> Osmania University (2020 – 2023)</p>
      <p><strong>Intermediate – MPC</strong>, [Vasavi Junior College], Andrapradesh State Board (2017 – 2019)</p>
      <p><strong>SSC</strong>, [RCM, st. Joseph's High School], Board of Secondary Education, Andhrapradesh (2016 – 2017)</p>
    </div>
  </div>
</div>
 </div>
  
 <div className='text-center'>
     <a href="/P.Revathi_Resume.pdf"
      className="btn btn-primary"
      target="_blank"
      rel="noopener noreferrer">View my resume</a>
       
 </div>
       </section>
    )
}

export default About;