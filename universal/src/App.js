import logo from './logo.jfif';
import ph from './ph.jpeg';
import ph1 from './ph1.jpeg';
import ph2 from './ph2.jpeg';
import ph3 from './ph3.jpeg';
import ph4 from './ph4.jpeg';
import './App.css';

function App() {
  return (
    <>
        <img src={logo} className="a-logo" alt="logo" /> <br></br><br></br>
        
        <ul>
        <li><a class="active" href="https://universalcodebox.com">Home</a></li>
        <li><a  href="https://universalcodebox.com">About Us</a></li>
        <li><a  href="https://universalcodebox.com">Courses</a></li>
        <li><a  href="https://universalcodebox.com">Contact Us</a></li>
    </ul> <br></br>
        
    <div class='d'>
    <p>Universal CodeBox is a trusted Web Developmentand Graphic Design Institute with placement support . It offers data science ,Digital Marketing , Tally Accounts , Web Development , Graphic Design , BCA and MCA classes in Kanpur.</p>
    <img src={ph4} className="d-ph4" alt="ph4" />
    </div>
        
        
        
          
          <h1>Our Courses</h1>
          <div class='b'>
          <img src={ph} className="b-ph" alt="ph" /> 
          <img src={ph1} className="b-ph1" alt="ph1" />
          <img src={ph2} className="b-ph2" alt="ph2" />
          <img src={ph3} className="b-ph3" alt="ph3" />
          </div>

          
    </>
   
  )
}

export default App;
 