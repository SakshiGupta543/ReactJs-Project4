import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Fill() {
  return(
    <>
      <h2>Student Admission Form</h2>

      <table border='5' align="center" cellpadding="10">
          
            <tr>
              <td>First Name:</td>
              <td><lable><input type='text'></input></lable></td>
            </tr>
            
            <tr>
              <td>Middle Name:</td>
              <td><lable><input type='text'></input></lable></td>
            </tr>

            <tr>
              <td>Last Name:</td>
              <td><lable><input type='text'></input></lable></td>
            </tr>

            <tr>
              <td>E-mail:</td>
              <td><lable><input type='text'></input></lable></td>
            </tr>
           
           <tr>
            <td>Father Name:</td>
            <td><lable><input type='text'></input></lable></td>
           </tr>

           <tr>
            <td>Mother Name:</td>
            <td><lable><input type='text'></input></lable></td>
           </tr>

           <tr>
            <td>Date of Birth:</td>
            <td><lable><input type='date'></input></lable></td>
           </tr>
           
           <tr>
            <td>Gender:</td>
            <td><lable><input type='radio' vlaue='male'></input>Male</lable> <lable><input type='radio' vlaue='female'></input>Female</lable></td>
           </tr>
           
           <tr>
            <td>Course Applied For:</td>
            <td><lable><select name='course'>
            <option vlaue='Web Development'>Web Development</option>
            <option vlaue='Graphic Designing'>Graphic Designing</option>
            <option vlaue='Data Science'>Data Science</option>
            <option vlaue='Digital Marketing'>Digital Marketing</option>
            </select>
            </lable></td>
           </tr>

           <tr>
            
            <td colspan='2' align='center'><input type='button'  value='Submit'></input> <input type='button' value='Reset'></input></td> 
           </tr>
           
        </table>

        <h2 className='c'>Student Feedback Form</h2>
      
    </>
   
  );
}

function TA(){
  const [textarea, setTextarea] = useState(
    "Your Feedback"
  );

  const handleChange = (event) =>{
    setTextarea(event.target.value)
  }

  return(
    <div className='container'>
      <form>
      <label>Name: <input type='text'></input></label> <br></br> <br></br>
      <label>Phone No: <input type='text'></input></label> <br></br> <br></br>
      <label>Email: <input type='text'></input></label> <br></br> <br></br>
      <textarea cols='40' rows='10' value={textarea} onChange={handleChange}></textarea> <br></br>
      <label><input type='button' value='Submit'></input> <input type='button' value='Reset'></input></label>
    </form>
    </div>
    
  )
  
}
function Sa(){
  return(
      <h3>Copyright Universal CodeBox All Right Reserved
              Designed by Sakshi Gupta</h3>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App /> <Fill /> <TA /> <Sa />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
