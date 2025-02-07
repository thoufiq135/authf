async function signup(mail,pass){
    const token=localStorage.getItem("token")
    const err=true

    try{console.log("data came=",pass,mail)
        console.log("sending=",token)
        const response =await fetch("https://authb6.vercel.app/loginin",{
            method:"POST",
            body:JSON.stringify({
                email:mail,
                password:pass
            }),
            
            headers:{
                "Authorization": `Bearer ${token}`,
                "content-type":"application/json"
            }
        })
        const r=await response.json()
        console.log("finsl",r)
        if(response.status===200){
            return r
        }else{
            return err
        }
          
    }catch(err){
        console.log("error=",err)
        return err
    }
}
export default signup;