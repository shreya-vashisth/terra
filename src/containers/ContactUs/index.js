import React from 'react';
import{NavLink} from 'react-router-dom';

/**
* @author
* @function ContactUs
**/

const ContactUs = (props) => {
  return(
   

      <div className="contactus">
        <ul className="info">
         <li><NavLink to="/">MAIL ID: vashisth.shreya.sv@gmail.com</NavLink></li>
         <li><NavLink to="/"> NUMBER: +919456361708 </NavLink></li>
        
        </ul>
        </div>
        
    
    
   )

 }

export default ContactUs