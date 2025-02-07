import "./sig.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context";
import { useState } from "react";
import Loder from "./loder";
function Signup(){
    const {name,setname,mail,setmail,pass,setpass,strigger,setstrigger,token}=useContext(Context)
    let valid = true;
    
    // console.log("Form submitted:", mail, name, pass);

    // ------------------------------warn-------------------------
    const [mailwarn,setmailwarn]=useState(false)
    const [namewarn,setnamewarn]=useState(false)
    const [passwarn,setpasswarn]=useState(false)
    const [co,setco]=useState(false)
    function sighandle(e){
        e.preventDefault();

        

        if (!name) {
          setnamewarn(true);
          valid = false;
      
        } else {
          setnamewarn(false);
         
        }
    
        if (!mail) {
          setmailwarn(true);
          valid = false;
     
        } else {
          setmailwarn(false);
    
        }
    
        if (!pass) {
          setpasswarn(true);
          valid = false;
     
        } else {
          setpasswarn(false);
   
        }
    
        if (valid) {
          console.log("Form submitted:", mail, name, pass);
          setco(true)
          if(!strigger){
            setstrigger(true)
          }else{
            setstrigger(false)
          }

        }else{
         setco(false)
        }
      }
    
    return(
        <>
        <div className="form-box">
<form className="form" onSubmit={sighandle}>
    <span className="title">Sign up</span>
    <span className="subtitle">Create a free account with your email.</span>
    <div className="form-container">
      <input type="text" className="input" placeholder="Full Name" id={namewarn?"warn1":"1"} onChange={(e)=>setname(e.target.value)}/>
			<input type="email" className="input" placeholder="Email" id={mailwarn?"warn2":"2"} onChange={(e)=>setmail(e.target.value)}/>
			<input type="password" className="input" placeholder="Password" id={passwarn?"warn3":"3"} onChange={(e)=>setpass(e.target.value)}/>
    </div>
   
    <Link to="/login"> <button onClick={sighandle}>Sign up</button></Link>
</form>
<div className="form-section">
  <p>Have an account? <Link to="/login">Log in</Link> </p>
</div>
</div>
<p id="warn">{token==true?"Email exists":""}</p>
{co?<><p id="green">Registered</p></>:""}

       

        </>
    )
}
export default Signup;