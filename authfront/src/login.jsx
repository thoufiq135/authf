import "./log.css"
import { Link } from "react-router-dom";
import { Context } from "./context";
import { useContext } from "react";
import { useState } from "react";
function Login(){
        const {logmail,setlogmail,logpass,setlogpass,ltrigger,setltrigger,err,mess}=useContext(Context)
         const [mailwarn,setmailwarn]=useState(false)
        const [passwarn,setpasswarn]=useState(false)
        function sinhandle(e){
            e.preventDefault()
            let valid=true
            if(!logmail){
                setmailwarn(true)
                valid=false
            }else{
                setmailwarn(false)
                valid=true
            }
            if(!logpass){
                setpasswarn(true)
                valid=false
            }else{
                setpasswarn(false)
                valid=true
            }
            if(valid){
                console.log("submitted",logmail,logpass)
                if(!ltrigger){
                    setltrigger(true)
                  }else{
                    setltrigger(false)
                  }
            }
        }

    return(
        <>
<form className="form" onSubmit={sinhandle}>
   <p className="form-title">Sign in to your account</p>
    <div className="input-container">
      <input type="email" placeholder="Enter email" onChange={(e)=>setlogmail(e.target.value)} id={mailwarn?"warn1":""}/>
      <span>
      </span>
  </div>
  <div className="input-container">
      <input type="password" placeholder="Enter password" onChange={(e)=>setlogpass(e.target.value)} id={passwarn?"warn2":""}/>
    </div>
     <button type="submit" className="submit" onClick={sinhandle}>
    Sign in
  </button>

  <p className="signup-link">
    No account?
    <Link to="/signup">Sign up</Link>
  </p>
  {err?<>Invalid email or password</>:""}
  {mess?<><Link to="/protected"><button>SEE🥳👍</button></Link></>:""}
</form>

        </>
    )
}
export default Login;